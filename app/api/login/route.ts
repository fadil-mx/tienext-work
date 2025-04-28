import { connectDB } from '@/lib/db'
import User from '@/lib/db/models/login'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    await connectDB()
    const body = await request.json()
    const user = await User.findOne({
      email: body.email,
    })
    if (!user) {
      return NextResponse.json({
        sucess: false,
        message: 'User not found',
      })
    }
    const isMatch = await bcrypt.compare(body.password, user.password)

    if (!isMatch) {
      return NextResponse.json({
        sucess: false,
        message: 'Invalid credentials',
      })
    }

    return NextResponse.json({
      sucess: true,
      message: 'Login successful',
    })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({
      sucess: false,
      message: 'Internal server error',
    })
  }
}
