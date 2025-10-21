import { ReactNode } from 'react'
import clsx from 'clsx'

export default function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={clsx('container py-12 md:py-16', className)}>
      {children}
    </section>
  )
}
