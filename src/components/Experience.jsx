import { experience } from '../data'
import { Reveal, Section, Stat } from './ui'
import { ArrowUpRightIcon } from './icons'

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience" title="Two systems, both *live.*">
      <div className="space-y-28 sm:space-y-36">
        {experience.map((job) => (
          <article
            key={job.company}
            className="grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8"
          >
            <Reveal className="lg:col-span-3">
              <p className="eyebrow text-ink">{job.period}</p>
              <p className="mt-2 text-sm text-muted">{job.location}</p>
            </Reveal>

            <div className="lg:col-span-9">
              <Reveal>
                <h3 className="display text-[clamp(1.9rem,3.6vw,3rem)]">
                  {job.role}
                  <span className="text-muted"> at </span>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-arrow"
                    >
                      {job.company}
                      <ArrowUpRightIcon width="0.5em" height="0.5em" strokeWidth={1.5} />
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {job.summary}
                </p>
              </Reveal>

              {job.stats.length > 0 && (
                <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
                  {job.stats.map((s, i) => (
                    <Reveal key={s.label} as="li" delay={i * 0.08}>
                      <Stat {...s} />
                    </Reveal>
                  ))}
                </ul>
              )}

              <ol className="mt-14 border-t border-line">
                {job.highlights.map((h, i) => (
                  <Reveal
                    key={h.title}
                    as="li"
                    delay={i * 0.05}
                    className="grid gap-2 border-b border-line py-6 md:grid-cols-[3.5rem_5fr_7fr] md:gap-8"
                  >
                    <p className="eyebrow">0{i + 1}</p>
                    <h4 className="text-base font-medium leading-snug">{h.title}</h4>
                    <p className="text-sm leading-relaxed text-muted sm:text-[0.9375rem]">{h.body}</p>
                  </Reveal>
                ))}
              </ol>

              <Reveal className="mt-8 grid gap-2 md:grid-cols-[3.5rem_1fr] md:gap-8">
                <p className="eyebrow">Stack</p>
                <p className="text-sm leading-relaxed text-muted">{job.tech.join(', ')}</p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
