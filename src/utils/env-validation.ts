import { EmailServiceError } from "./email-error.class";

export function validateEnvironment() {
  if (!process.env.RESEND_API_KEY) {
    throw new EmailServiceError("RESEND_API_KEY is not configured", 500);
  }
  if (!process.env.ADMIN_EMAIL) {
    throw new EmailServiceError("ADMIN_EMAIL is not configured", 500);
  }
}