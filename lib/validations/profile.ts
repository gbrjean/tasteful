import * as z from 'zod';

export const ProfileValidation = z.object({
  photo: z.string().url().nonempty(),
})