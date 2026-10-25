import { Reveal } from '../animations/Reveal'
import { Section } from '../components/Section'
import { products } from '../content/hu'

export function Products() {
  return (
    <Section id="termekek" eyebrow="Termékek" title="Minden, ami az ablakra kerül.">
      <div className="grid gap-px overflow-hidden rounded-sm bg-graphite/15 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80} className="bg-paper">
            <article className="group h-full p-8 transition hover:bg-sand">
              <span className="font-display text-sm text-brass">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-2xl">{p.title}</h3>
              <p className="mt-3 text-slate">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
