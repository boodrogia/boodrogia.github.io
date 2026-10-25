import { Reveal } from '../animations/Reveal'
import { Section } from '../components/Section'
import { references } from '../content/hu'
import a from '../assets/malac_banner.jpeg'
import b from '../assets/blurry_locked.jpeg'
import c from '../assets/louver_blinds.jpg'

const photos = [a, b, c] // TODO: replace with real project photos

export function References() {
  return (
    <Section id="referenciak" eyebrow="Munkáink" title={references.title}>
      <p className="mb-10 max-w-xl text-slate">{references.text}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {photos.map((src, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-sand">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
