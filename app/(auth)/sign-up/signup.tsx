'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Login, Signup } from '@/types'
import { signup } from '@/lib/validator'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter()
  const form = useForm<Signup>({
    resolver: zodResolver(signup),
  })

  const onSubmit = async (value: Login) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      })
      const data = await response.json()
      if (data.sucess) {
        alert('User created successfully')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='mx-14 mt-16'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='h-12 text-lg'
                    placeholder='Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='h-12 text-lg'
                    placeholder='Username'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='h-12 text-lg'
                    placeholder='Email'
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

          <div className=' flex justify-center mt-12'>
            <Button
              type='submit'
              className='bg-[#39D2C0] w-[119px] font-bold text-lg py-6'
            >
              Next{' '}
            </Button>
          </div>
          <p className=' text-sm text-center mt-4 font-semibold'>
            By clicking Next, I agree to Tienext{' '}
            <span className='text-[#39D2C0] underline'>Terms of use</span> and
            acknowledge the{' '}
            <span className='text-[#39D2C0] underline'>Privacy Policy</span>.
          </p>
          <p className='font-bold'>
            Already have an account?
            <span
              className=' text-red-700 underline cursor-pointer'
              onClick={() => {
                router.push('/login')
              }}
            >
              {' '}
              Go to login
            </span>{' '}
          </p>
        </form>
      </Form>
    </div>
  )
}

export default SignUp
