import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  eyebrow,
  dark = false,
  children,
}: {
  id: string
  title: string
  eyebrow?: string
  dark?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`px-5 py-24 md:py-32 ${dark ? 'bg-graphite text-paper' : ''}`}
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-brass">{eyebrow}</p>
        )}
        <h2 className="max-w-3xl text-3xl leading-tight md:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
