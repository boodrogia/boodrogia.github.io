import { Section } from '../components/Section'
import { faq } from '../content/hu'

export function Faq() {
  return (
    <Section id="gyik" eyebrow="GYIK" title="Gyakori kérdések">
      <div className="max-w-3xl divide-y divide-graphite/15 border-y border-graphite/15">
        {faq.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg">
              {f.q}
              <span className="ml-4 text-brass transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-slate">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
