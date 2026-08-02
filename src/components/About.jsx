import { about } from '../data'
import { Reveal, Section } from './ui'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering AI that survives contact with users"
      alt
    >
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} as="p">
              <span className="muted block text-base leading-[1.75] sm:text-[1.0625rem]">{p}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <dl className="surface rounded-xl">
            {about.facts.map((fact, i) => (
              <div
                key={fact.label}
                className="px-5 py-4"
                style={{ borderTop: i ? '1px solid var(--border)' : 'none' }}
              >
                <dt className="muted font-mono text-[0.7rem] uppercase tracking-[0.16em]">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
