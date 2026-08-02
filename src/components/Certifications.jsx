import { certifications } from '../data'
import { Reveal, Section } from './ui'
import { ExternalIcon } from './icons'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified coursework and credentials"
      lead="Cloud fundamentals from Microsoft, applied LLM engineering from IBM, and SQL from Kaggle. Linked credentials open the issuer's verification page."
    >
      <div className="space-y-12">
        {certifications.map((group, gi) => (
          <div key={group.issuer}>
            <Reveal delay={gi * 0.05}>
              <h3 className="muted font-mono text-[0.72rem] uppercase tracking-[0.2em]">
                {group.issuer}
              </h3>
            </Reveal>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, i) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[0.95rem] font-semibold leading-snug">{item.name}</p>
                      {item.url && (
                        <ExternalIcon
                          width={16}
                          height={16}
                          className="mt-0.5 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      )}
                    </div>
                    <p className="muted mt-2 font-mono text-xs">
                      {item.code ? item.code : item.url ? 'View credential' : group.issuer}
                    </p>
                  </>
                )

                return (
                  <Reveal key={item.name} delay={i * 0.05} as="li">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="surface card-glow group block h-full rounded-xl p-5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="surface card-glow group h-full rounded-xl p-5">{content}</div>
                    )}
                  </Reveal>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
