import { toast } from 'sonner'
import axios from 'axios'
import z from 'zod'

export function handleError(error: unknown) {
  // --- Zod validation error ---
  if (error instanceof z.ZodError) {
    toast.warning('Validation errors', {
      description: (
        <ul style={{ marginLeft: 16 }}>
          {error.issues.map((issue, index) => (
            <li key={index}>• {issue.message}</li>
          ))}
        </ul>
      ),
    })

    return console.warn('zodError:', error)
  }

  // --- Axios error ---
  if (axios.isAxiosError(error)) {
    const data = error?.response?.data
    const message = data?.message || data?.error?.message

    toast.error(message)
    return console.log('axiosError:', error?.response)
  }

  // --- Native Error ---
  if (error instanceof Error) {
    toast.error(error.message)
    return console.error(error)
  }

  // --- String error ---
  if (typeof error === 'string') {
    toast.error(error)
    return console.error(error)
  }

  // --- Unknown error ---
  toast.error('An unexpected error occurred')
  console.error('unknownError:', error)
}
