import { CountUp } from '../animations/CountUp'
import { trust } from '../content/hu'

export function TrustStrip() {
  return (
    <section className="bg-graphite px-5 py-14 text-paper">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {trust.map((t) => (
          <div key={t.label}>
            <dt className="font-display text-4xl text-brass md:text-5xl">
              <CountUp value={t.value} suffix={t.suffix} />
            </dt>
            <dd className="mt-2 text-sm text-paper/70">{t.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
