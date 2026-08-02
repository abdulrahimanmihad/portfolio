import { education } from '../data'
import { Reveal, Section } from './ui'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Reveal>
        <article className="surface rounded-2xl p-7 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                {education.degree}
              </h3>
              <p className="muted mt-1.5 text-sm">
                {education.school} · {education.location}
              </p>
            </div>
            <p className="chip font-mono">{education.period}</p>
          </div>
          <ul className="muted mt-6 space-y-2 text-sm leading-relaxed">
            {education.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {d}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  )
}
