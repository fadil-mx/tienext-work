import { z } from 'zod'

export const loginvalidator = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' })
    .max(50, { message: 'Email must be less than 50 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 4 characters' })
    .max(20, { message: 'Password must be less than 20 characters' }),
})

export const signup = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  username: z.string().min(1, { message: 'Username is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' })
    .max(50, { message: 'Email must be less than 50 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 4 characters' })
    .max(20, { message: 'Password must be less than 20 characters' }),
})
