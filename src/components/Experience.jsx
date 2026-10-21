import { experience } from '../data'
import { Reveal, Section, Stat } from './ui'
import { ArrowUpRightIcon } from './icons'

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience" title="Two systems, both *live.*">
      <div className="space-y-16">
        {experience.map((job, j) => (
          <article key={job.company} className={j > 0 ? 'border-t border-line pt-16' : ''}>
            <Reveal>
              <p className="eyebrow">
                {job.period} · {job.location}
              </p>
              <h3 className="display mt-3 text-[clamp(1.6rem,2.2vw,2rem)]">
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
              <p className="mt-5 leading-relaxed text-muted">{job.summary}</p>
            </Reveal>

            {job.stats.length > 0 && (
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                {job.stats.map((s, i) => (
                  <Reveal key={s.label} as="li" delay={i * 0.06}>
                    <Stat {...s} />
                  </Reveal>
                ))}
              </ul>
            )}

            <ol className="mt-10 space-y-7 border-t border-line pt-8">
              {job.highlights.map((h, i) => (
                <Reveal
                  key={h.title}
                  as="li"
                  delay={i * 0.05}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4"
                >
                  <span className="numeral pt-1 text-lg text-accent">0{i + 1}</span>
                  <div>
                    <h4 className="font-medium leading-snug">{h.title}</h4>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-8 text-sm leading-relaxed text-muted">
              <span className="eyebrow mr-3">Stack</span>
              {job.tech.join(', ')}
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  )
}
