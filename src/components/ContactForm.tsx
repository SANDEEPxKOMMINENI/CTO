"use client"

import { useState } from 'react'

export default function ContactForm({ formspreeId }: { formspreeId: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again later.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-md border bg-green-50 p-4 text-green-700 dark:border-green-900/30 dark:bg-green-950/30 dark:text-green-300">
        Thank you! Your message has been sent.
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      {status === 'error' && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
