import { projects } from '../data'
import { Counter, Reveal, Section, Tag } from './ui'
import { CheckIcon, ExternalIcon } from './icons'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I built and shipped"
      lead="Agentic retrieval, computer vision with real experiment tracking, and deep learning built from first principles."
      alt
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.09}
            className={
              i === projects.length - 1 && projects.length % 2 === 1 ? 'lg:col-span-2' : ''
            }
          >
            <article className="surface card-glow flex h-full flex-col rounded-2xl p-7 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    style={{ border: '1px solid color-mix(in srgb, var(--color-accent) 45%, transparent)' }}
                  >
                    Live Demo
                    <ExternalIcon width={14} height={14} />
                  </a>
                )}
              </div>

              <p className="muted mt-3 text-sm leading-relaxed">{project.blurb}</p>

              {project.stats.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                  {project.stats.map((s) => (
                    <p key={s.label} className="flex flex-col">
                      <span className="text-2xl font-bold tracking-tight text-accent">
                        <Counter value={s.value} suffix={s.suffix} />
                      </span>
                      <span className="muted mt-0.5 text-xs">{s.label}</span>
                    </p>
                  ))}
                </div>
              )}

              <ul className="mt-6 space-y-2.5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed">
                    <CheckIcon
                      width={16}
                      height={16}
                      className="mt-1 shrink-0 text-accent"
                      strokeWidth={2.2}
                    />
                    <span className="muted">{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
