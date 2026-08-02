import { education, spokenLanguages } from '../data'
import { Reveal, Section } from './ui'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <Reveal>
          <article className="surface h-full rounded-2xl p-7 sm:p-8">
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
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {d}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="surface h-full rounded-2xl p-7 sm:p-8">
            <h3 className="flex items-center gap-3 text-sm font-semibold tracking-tight">
              <span aria-hidden="true" className="h-4 w-1 rounded-full bg-accent" />
              Languages
            </h3>
            <dl className="mt-5 space-y-3">
              {spokenLanguages.map((lang) => (
                <div key={lang.name} className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm font-medium">{lang.name}</dt>
                  <dd className="muted font-mono text-xs">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}
