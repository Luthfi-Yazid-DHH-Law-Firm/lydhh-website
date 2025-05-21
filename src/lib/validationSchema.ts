import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(1, { message: "First name is required" })
    .refine(value => value.trim().length > 0, { 
      message: "First name cannot be empty or just spaces" 
    }),
  
  subject: z.string()
    .min(1, { message: "Last name is required" })
    .refine(value => value.trim().length > 0, { 
      message: "Last name cannot be empty or just spaces" 
    }),
  
  email: z.string()
    .email({ message: "Invalid email address" })
    .refine(value => value.trim().length > 0, { 
      message: "Email cannot be empty or just spaces" 
    }),
  
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .refine(value => value.trim().length >= 10, {
      message: "Message must contain at least 10 non-space characters"
    })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;