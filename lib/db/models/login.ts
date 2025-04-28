import { Signup } from '@/types'
import { model, models, Schema } from 'mongoose'

export interface IUser extends Document, Signup {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, default: 'user' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const User = models.User || model<IUser>('User', UserSchema)
export default User
