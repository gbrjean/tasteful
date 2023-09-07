import * as z from 'zod';


export const RegisterValidation = z.object({
  fullname: z.string()
             .min(6, {message: 'The full name must be at least 6 characters'})
             .max(30, {message: 'The full name must be at most 30 characters'})
             .nonempty({message: 'This field is required'}),
  email: z.string().email({message: 'Invalid email address'}),
  password: z.string().min(6, {message: 'The password must be at least 6 characters'})
             .refine((password) => /\d/.test(password), {
                message: 'The password must contain at least one number',
              }),
})

export const LoginValidation = z.object({
  email: z.string().email({message: 'Invalid email address'})
                   .nonempty({message: 'This field is required'}),
  password: z.string().nonempty({message: 'This field is required'}),
})