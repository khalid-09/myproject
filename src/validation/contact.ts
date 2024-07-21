import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z
    .string({ required_error: 'Name is required.' })
    .min(3, { message: 'Name must atleast 3 chars long.' })
    .max(50, { message: 'Name must be between 3 and 50 characters.' }),
  phoneNumber: z
    .string({ required_error: 'Phone number is required.' })
    .min(10, { message: 'Phone number must be atleast 10 digits long.' })
    .max(10, { message: 'Phone number must be 10 digits long.' }),
  businessName: z
    .string({ required_error: 'Business Name is required.' })
    .min(3, { message: 'Name must atleast 3 chars long.' })
    .max(50, { message: 'Name must be between 3 and 50 characters.' }),
  businessEmail: z
    .string({ required_error: 'Email is required.' })
    .email({ message: 'Invalid email' }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
