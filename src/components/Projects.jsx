import { projects } from '../data'
import { Reveal, Section } from './ui'
import { ArrowUpRightIcon } from './icons'

export default function Projects() {
  return (
    <Section id="projects" index="03" label="Work" title="Selected *work.*">
      <div className="border-t border-line">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            as="article"
            className="grid gap-6 border-b border-line py-12 sm:py-16 lg:grid-cols-12 lg:gap-8"
          >
            <p className="eyebrow lg:col-span-1">0{i + 1}</p>

            <div className="lg:col-span-5">
              <p className="eyebrow">{project.category}</p>
              <h3 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.75rem)]">{project.name}</h3>
              {(project.demo || project.repo) && (
                <div className="mt-6 flex flex-wrap gap-6 text-sm">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-arrow"
                    >
                      Live demo
                      <ArrowUpRightIcon width={14} height={14} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-arrow"
                    >
                      GitHub
                      <ArrowUpRightIcon width={14} height={14} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed sm:text-lg">{project.blurb}</p>

              {project.stats.length > 0 && (
                <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
                  {project.stats.map((s) => (
                    <div key={s.label} className="flex flex-col-reverse">
                      <dt className="mt-2 text-sm text-muted">{s.label}</dt>
                      <dd className="numeral text-4xl sm:text-5xl">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <p className="mt-8 text-sm text-muted">{project.tags.join(', ')}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
