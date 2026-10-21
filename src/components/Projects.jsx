import { projects } from '../data'
import { Reveal, Section } from './ui'
import { ArrowUpRightIcon } from './icons'

export default function Projects() {
  return (
    <Section id="projects" index="03" label="Work" title="Selected *work.*">
      <div className="space-y-14">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            as="article"
            className={i > 0 ? 'border-t border-line pt-14' : ''}
          >
            <p className="eyebrow">{project.category}</p>
            <h3 className="display mt-3 text-[clamp(1.6rem,2.2vw,2rem)]">{project.name}</h3>
            <p className="mt-5 leading-relaxed text-muted">{project.blurb}</p>

            {project.stats.length > 0 && (
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                {project.stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mt-1.5 text-sm text-muted">{s.label}</dt>
                    <dd className="numeral text-[2.25rem]">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {(project.demo || project.repo) && (
              <div className="mt-7 flex flex-wrap gap-6 text-sm font-medium">
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

            <p className="mt-5 text-sm text-muted">{project.tags.join(', ')}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
