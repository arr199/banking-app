import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  address: z.string().max(50),
  city: z.string().max(50),
  state: z.string().min(2).max(2),
  postalCode: z.string().min(3).max(6),
  dateOfBirth: z.string().min(3).date(),
  ssn: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
