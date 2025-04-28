import { connectDB } from '@/lib/db'
import User from '@/lib/db/models/login'
import { signup } from '@/lib/validator'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const validatedData = await signup.parseAsync(body)
    const hashedPassword = bcrypt.hashSync(validatedData.password, 10)

    await User.create({
      ...validatedData,
      password: hashedPassword,
    })

    return NextResponse.json({
      sucess: 'true',
      message: 'User created successfully',
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      sucess: 'false',
      message: 'User Not  created ',
    })
  }
}
