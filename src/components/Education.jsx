import { education, spokenLanguages } from '../data'
import { Reveal, Section } from './ui'

export default function Education() {
  return (
    <Section id="education" index="06" label="Education" title="Background.">
      <div className="border-b border-line">
        <Reveal className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-8">
          <p className="eyebrow lg:col-span-3">{education.period}</p>
          <div className="lg:col-span-9">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{education.degree}</h3>
            <p className="mt-2 text-muted">
              {education.school}, {education.location}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
              {education.details.map((d) => (
                <li key={d} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-muted" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-8">
          <p className="eyebrow lg:col-span-3">Languages</p>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-9">
            {spokenLanguages.map((lang) => (
              <div key={lang.name}>
                <dt className="font-medium">{lang.name}</dt>
                <dd className="mt-0.5 text-sm text-muted">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
