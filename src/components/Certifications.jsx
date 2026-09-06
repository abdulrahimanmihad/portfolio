import { certifications } from '../data'
import { Reveal, Section } from './ui'
import { ArrowUpRightIcon } from './icons'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      index="05"
      label="Certifications"
      title="Credentials."
      lead="Cloud fundamentals from Microsoft, applied LLM engineering from IBM, and SQL from Kaggle."
    >
      <div className="border-b border-line">
        {certifications.map((group, gi) => (
          <Reveal
            key={group.issuer}
            delay={gi * 0.05}
            className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-8"
          >
            <h3 className="eyebrow text-ink lg:col-span-3">{group.issuer}</h3>
            <ul className="divide-y divide-line lg:col-span-9">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-6 py-3 first:pt-0 last:pb-0"
                >
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-arrow text-[0.9375rem] font-medium"
                    >
                      {item.name}
                      <ArrowUpRightIcon width={14} height={14} />
                    </a>
                  ) : (
                    <span className="text-[0.9375rem] font-medium">{item.name}</span>
                  )}
                  <span className="shrink-0 text-sm tabular-nums text-muted">
                    {item.code ?? (item.url ? 'Verified' : '')}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
