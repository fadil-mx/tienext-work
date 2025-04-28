import { loginvalidator, signup } from '@/lib/validator'
import { z } from 'zod'

export type Login = z.infer<typeof loginvalidator>
export type Signup = z.infer<typeof signup>
