'use server'

import prisma from '@/prisma/utils'
import { generateId } from '@/lib/generateId'
import { hash } from 'argon2'

export async function createUser(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')

  const id = generateId()

  try {
    await prisma.user.create({
      data: {
        id,
        name,
        email,
        password: await hash(password)
      }
    })
  } catch (error) {
    console.error(error)
  }
}
