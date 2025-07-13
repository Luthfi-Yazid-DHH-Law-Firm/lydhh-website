import AdminNotifEmail from "@/emails/admin-notif-email";
import CustomerNotifEmail from "@/emails/customer-notif-email";
import { ContactFormData, contactFormSchema } from "@/lib/validationSchema";
import { EmailServiceError } from "@/utils/email-error.class";
import { getErrorMessage } from "@/utils/get-error-message";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { v4 as generateID } from "uuid";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = contactFormSchema;
type EmailRequest = ContactFormData;

function validateEnvironment() {
  if (!process.env.RESEND_API_KEY) {
    throw new EmailServiceError("RESEND_API_KEY is not configured", 500);
  }
  if (!process.env.ADMIN_EMAIL) {
    throw new EmailServiceError("ADMIN_EMAIL is not configured", 500);
  }
}

// Helper function to send multiple emails
async function sendEmails(emailData: EmailRequest) {
  const { name, email, subject, message } = emailData;
  const mailID = generateID();
  
  const adminEmail = {
    from: email,
    to: process.env.ADMIN_EMAIL!,
    subject: `New Contact Form: ${subject} - ${name}`,
    react: AdminNotifEmail({ name, subject, message }),
  };

  const customerEmail = {
    from: process.env.ADMIN_EMAIL!,
    to: email,
    subject: "Thank you for contacting us!",
    react: CustomerNotifEmail({ name, mailID }),
  };

  const [adminResult, customerResult] = await Promise.allSettled([
    resend.emails.send(adminEmail),
    resend.emails.send(customerEmail),
  ]);

  const results = {
    admin: { success: false, id: null as string | null, error: null as string | null },
    customer: { success: false, id: null as string | null, error: null as string | null },
  };

  // Process admin email result
  if (adminResult.status === "fulfilled") {
    const { data, error } = adminResult.value;
    if (error) {
      results.admin.error = "Failed to send admin notification";
      console.error("Admin email error:", error);
    } else {
      results.admin.success = true;
      results.admin.id = data?.id || null;
      console.log("Admin email sent successfully:", data?.id);
    }
  } else {
    results.admin.error = "Failed to send admin notification";
    console.error("Admin email promise rejected:", adminResult.reason);
  }

  // Process customer email result
  if (customerResult.status === "fulfilled") {
    const { data, error } = customerResult.value;
    if (error) {
      results.customer.error = "Failed to send customer confirmation";
      console.error("Customer email error:", error);
    } else {
      results.customer.success = true;
      results.customer.id = data?.id || null;
      console.log("Customer email sent successfully:", data?.id);
    }
  } else {
    results.customer.error = "Failed to send customer confirmation";
    console.error("Customer email promise rejected:", customerResult.reason);
  }

  return results;
}

export async function POST(req: NextRequest) {
  try {
    validateEnvironment();

    const body = await req.json();
    const validatedData: EmailRequest = emailSchema.parse(body);

    const emailResults = await sendEmails(validatedData);

    const adminSuccess = emailResults.admin.success;
    const customerSuccess = emailResults.customer.success;

    console.log(adminSuccess);
    console.log(customerSuccess);

    if (!adminSuccess) {
      throw new EmailServiceError(
        "Your message could not be processed at this time. Please try again or contact us directly.",
        500
      );
    }

    if (adminSuccess && customerSuccess) {
      return NextResponse.json(
        { 
          message: "Message sent successfully! You'll receive a confirmation email shortly.",
          details: {
            adminEmailId: emailResults.admin.id,
            customerEmailId: emailResults.customer.id
          }
        },
        { status: 200 }
      );
    } else if (adminSuccess && !customerSuccess) {
      return NextResponse.json(
        { 
          message: "Your message was received successfully! We'll get back to you soon. (Note: Confirmation email delivery failed)",
          details: {
            adminEmailId: emailResults.admin.id,
            customerEmailError: emailResults.customer.error
          }
        },
        { status: 200 }
      );
    }

  } catch (error: unknown) {
    console.error("Email API error:", error);

    if (error instanceof z.ZodError) {
      throw NextResponse.json(
        { 
          message: "Invalid input data",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    if (error instanceof EmailServiceError) {
      throw NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }

    if (error instanceof SyntaxError) {
      throw NextResponse.json(
        { message: "Invalid JSON format" },
        { status: 400 }
      );
    }

    throw NextResponse.json(
      { message: getErrorMessage(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}