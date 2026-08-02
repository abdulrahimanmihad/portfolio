import { experience } from '../data'
import { Counter, Reveal, Section, Tag } from './ui'
import { ExternalIcon } from './icons'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where the systems run"
      lead="Production work on real-time conversational AI, where reliability is an engineering problem before it is a prompting problem."
    >
      {experience.map((job) => (
        <article key={job.company} className="space-y-10">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {job.role} ·{' '}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
                  >
                    {job.company}
                    <ExternalIcon width={16} height={16} />
                  </a>
                </h3>
                <p className="muted mt-1.5 text-sm">{job.location}</p>
              </div>
              <p className="chip font-mono">{job.period}</p>
            </div>
            <p className="muted mt-5 max-w-3xl text-base leading-relaxed">{job.summary}</p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {job.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.07} as="li">
                <div className="surface card-glow h-full rounded-xl p-6">
                  {h.metric ? (
                    <p className="text-3xl font-bold tracking-tight text-accent">
                      {h.metric.text ?? (
                        <Counter
                          value={h.metric.value}
                          prefix={h.metric.prefix}
                          suffix={h.metric.suffix}
                          decimals={h.metric.decimals ?? 0}
                        />
                      )}
                    </p>
                  ) : (
                    <p
                      className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
                      aria-hidden="true"
                    >
                      ——
                    </p>
                  )}
                  {h.unitLabel && (
                    <p className="muted mt-1 font-mono text-xs tracking-wide">{h.unitLabel}</p>
                  )}
                  <h4 className="mt-4 text-[0.95rem] font-semibold leading-snug">{h.title}</h4>
                  <p className="muted mt-2 text-sm leading-relaxed">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <h4 className="muted font-mono text-[0.7rem] uppercase tracking-[0.18em]">
              Stack in production
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </Reveal>
        </article>
      ))}
    </Section>
  )
}
