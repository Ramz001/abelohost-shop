import { z } from 'zod'

export const username = z
  .string()
  .min(1, 'Username is required')
  .min(3, 'Username must be at least 3 characters')

export const password = z
  .string()
  .min(1, 'Password is required')
  .min(3, 'Password must be at least 3 characters')
