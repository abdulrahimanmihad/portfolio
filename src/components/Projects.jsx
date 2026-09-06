import { projects } from '../data'
import { Counter, Reveal, Section, Tag } from './ui'
import { ArrowUpRightIcon } from './icons'

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected work."
      lead="Generative AI, computer vision and deep learning. Two of the three are live and open to try."
    >
      <div className="border-t border-line">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            as="article"
            className="grid gap-8 border-b border-line py-10 sm:py-14 lg:grid-cols-12 lg:gap-8"
          >
            <p className="eyebrow tabular-nums lg:col-span-1">0{i + 1}</p>

            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">{project.category}</p>
              <h3 className="display text-[clamp(1.75rem,3.2vw,2.5rem)]">{project.name}</h3>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-arrow mt-6 text-sm"
                >
                  Live demo
                  <ArrowUpRightIcon width={15} height={15} />
                </a>
              )}
            </div>

            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed sm:text-lg">{project.blurb}</p>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-4">
                    <span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {project.stats.length > 0 && (
                <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-6">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <dd className="display text-3xl tabular-nums sm:text-4xl">
                        <Counter value={s.value} suffix={s.suffix} />
                      </dd>
                      <dt className="mt-2 text-sm text-muted">{s.label}</dt>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
