import { Reveal } from '../animations/Reveal'
import { Section } from '../components/Section'
import { about } from '../content/hu'

export function About() {
  return (
    <Section id="rolunk" eyebrow="Rólunk" title={about.title} dark>
      <Reveal>
        <p className="max-w-2xl text-lg text-paper/75">{about.text}</p>
      </Reveal>
    </Section>
  )
}
