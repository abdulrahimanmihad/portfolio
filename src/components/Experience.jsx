import { experience } from '../data'
import { Counter, Reveal, Section, Tag } from './ui'
import { ArrowUpRightIcon } from './icons'

// The stats strip sizes itself to the number of entries a role provides.
const STAT_COLUMNS = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience" title="Live in production.">
      <div className="space-y-24 sm:space-y-32">
        {experience.map((job) => (
          <article key={job.company} className="space-y-16 sm:space-y-20">
            <Reveal>
              <div className="grid gap-5 border-t border-line pt-5 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3">
                  <p className="eyebrow">{job.period}</p>
                  <p className="mt-2 text-sm text-muted">{job.location}</p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="display text-[clamp(1.75rem,3.5vw,2.75rem)]">
                    {job.role}
                    <span className="text-muted"> · </span>
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-arrow"
                      >
                        {job.company}
                        <ArrowUpRightIcon width="0.6em" height="0.6em" strokeWidth={2.2} />
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                  </h3>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                    {job.summary}
                  </p>
                </div>
              </div>
            </Reveal>

            {job.stats.length > 0 && (
              <ul
                className={`grid border-l border-t border-line ${
                  STAT_COLUMNS[job.stats.length] ?? STAT_COLUMNS[4]
                }`}
              >
                {job.stats.map((s, i) => (
                  <Reveal
                    key={s.label}
                    as="li"
                    delay={i * 0.06}
                    className="border-b border-r border-line p-5 sm:p-8"
                  >
                    <p className="display text-[clamp(2.5rem,5vw,4.5rem)] normal-case tabular-nums">
                      {s.text ?? (
                        <Counter
                          value={s.value}
                          prefix={s.prefix}
                          suffix={s.suffix}
                          decimals={s.decimals ?? 0}
                        />
                      )}
                    </p>
                    <p className="mt-5 text-sm font-semibold leading-snug">{s.label}</p>
                    {s.note && <p className="mt-1 text-sm text-muted">{s.note}</p>}
                  </Reveal>
                ))}
              </ul>
            )}

            <ol className="border-b border-line">
              {job.highlights.map((h, i) => (
                <Reveal
                  key={h.title}
                  as="li"
                  delay={i * 0.04}
                  className="grid gap-3 border-t border-line py-7 lg:grid-cols-12 lg:gap-8"
                >
                  <p className="eyebrow tabular-nums lg:col-span-3">0{i + 1}</p>
                  <h4 className="text-lg font-semibold leading-snug tracking-tight lg:col-span-4">
                    {h.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted sm:text-[0.9375rem] lg:col-span-5">
                    {h.body}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
                <p className="eyebrow lg:col-span-3">Stack in production</p>
                <ul className="flex flex-wrap gap-2 lg:col-span-9">
                  {job.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  )
}
