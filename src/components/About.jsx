import { about } from '../data'
import { Reveal, Section } from './ui'

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="AI engineer. Production first.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-5 lg:col-start-4">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} as="p" className="text-base leading-[1.7] sm:text-lg">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="lg:col-span-4">
          <dl className="border-b border-line">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-4"
              >
                <dt className="eyebrow pt-0.5">{fact.label}</dt>
                <dd className="text-sm font-medium leading-relaxed">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
