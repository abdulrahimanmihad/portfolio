import { about } from '../data'
import { Reveal, Section } from './ui'

export default function About() {
  return (
    <Section id="about" index="01" label="Profile" title="Built for *production.*">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-5 lg:col-start-4">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} as="p" className="text-base leading-[1.75] sm:text-lg">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="lg:col-span-3 lg:col-start-10">
          <dl className="border-t border-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-4">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1.5 text-sm font-medium leading-relaxed">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
