'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Login } from '@/types'
import { loginvalidator } from '@/lib/validator'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const Loginform = () => {
  const router = useRouter()
  const form = useForm<Login>({
    resolver: zodResolver(loginvalidator),
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const body = await response.json()
      if (body.ok) {
        console.log('Login successful')
        alert(body.message)
        router.push('/')
      } else {
        console.log('Login failed')
        alert(body.message)
      }
    } catch (error) {
      console.log('error', error)
      alert('Invalid credentials')
    }
  }
  return (
    <div className='mx-14 mt-16'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='h-12 text-lg'
                    placeholder='Email or Phone No'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='password'
                    className='h-12 text-lg'
                    placeholder='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className=' flex justify-center mt-4 text-red-700 underline'>
            {' '}
            Forgot Password
          </p>
          <div className=' flex justify-center mt-12'>
            <Button
              type='submit'
              className='bg-[#39D2C0] w-[119px] font-bold text-lg py-6'
            >
              Login{' '}
            </Button>
          </div>
          <p className='font-bold'>
            Don’t have an account?
            <span
              className=' text-red-700 underline cursor-pointer'
              onClick={() => router.push('/sign-up')}
            >
              {' '}
              Create account
            </span>{' '}
          </p>
        </form>
      </Form>
    </div>
  )
}

export default Loginform
