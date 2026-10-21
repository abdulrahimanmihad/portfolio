import { certifications, education, spokenLanguages } from '../data'
import { Reveal, Section } from './ui'
import { ArrowUpRightIcon } from './icons'

const row = 'border-t border-line pt-6'

export default function Background() {
  return (
    <Section id="background" index="05" label="Background" title="Education and *credentials.*">
      <div className="space-y-10">
        <Reveal className={row}>
          <h3 className="eyebrow">Education</h3>
          <p className="mt-3 text-lg font-medium leading-snug">{education.degree}</p>
          <p className="mt-1 text-muted">
            {education.school}, {education.location} · {education.period}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {education.details.join('. ')}.
          </p>
        </Reveal>

        {certifications.map((group, gi) => (
          <Reveal key={group.issuer} delay={0.05 + gi * 0.05} className={row}>
            <h3 className="eyebrow">{group.issuer}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-7 gap-y-2.5 text-[0.9375rem]">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-baseline gap-2">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-arrow"
                    >
                      {item.name}
                      <ArrowUpRightIcon width={13} height={13} />
                    </a>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  {item.code && <span className="text-sm text-muted">{item.code}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal delay={0.2} className={row}>
          <h3 className="eyebrow">Languages</h3>
          <p className="mt-3 text-[0.9375rem]">
            {spokenLanguages.map((l) => `${l.name}, ${l.level.toLowerCase()}`).join(' · ')}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
