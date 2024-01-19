'use client'

import { signIn } from 'next-auth/react'

export default function Page() {
  async function handleLogin(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/dashboard',
        redirect: true
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleLoginWithGoogle() {
    try {
      await signIn('google', { callbackUrl: '/dashboard', redirect: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form action={handleLogin}>
      <main className="w-[320px] space-y-1">
        <label>Email</label>
        <input name="email" type="text" placeholder="john@doe.com" />
        <label>Password</label>
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
        <button type="button" onClick={handleLoginWithGoogle}>
          Continue with Google
        </button>
      </main>
    </form>
  )
}
