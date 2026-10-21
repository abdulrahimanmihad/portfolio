import { about } from '../data'
import { Reveal, Section } from './ui'

export default function About() {
  const [lede, ...rest] = about.paragraphs

  return (
    <Section id="about" index="01" label="Profile" title="Built for *production.*">
      <Reveal as="p" className="lede">
        {lede}
      </Reveal>
      {rest.map((p, i) => (
        <Reveal key={i} as="p" delay={0.08 + i * 0.05} className="mt-6 leading-[1.75] text-muted">
          {p}
        </Reveal>
      ))}

      <Reveal delay={0.15} className="mt-12">
        <dl className="grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-1.5 text-[0.9375rem] font-medium leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
