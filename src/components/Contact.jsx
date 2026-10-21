import { profile } from '../data'
import { Reveal, Section } from './ui'
import { ArrowUpRightIcon } from './icons'

const links = [
  { label: 'LinkedIn', value: 'abdul-rahiman-mihad', href: profile.linkedin, external: true },
  { label: 'GitHub', value: 'abdulrahimanmihad', href: profile.github, external: true },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
]

export default function Contact() {
  return (
    <Section id="contact" index="06" label="Contact" title="Let’s *talk.*">
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="display inline-block break-words text-[clamp(1.5rem,2.6vw,2.5rem)] underline decoration-line decoration-1 underline-offset-[0.22em] transition-colors duration-300 hover:decoration-ink"
        >
          {profile.email}
        </a>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          Open to AI engineering roles and collaboration on LLM, real-time voice and computer
          vision systems. {profile.availability}, based in {profile.location}.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <ul className="grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-3">
          {links.map(({ label, value, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="group block"
              >
                <span className="eyebrow block">{label}</span>
                <span className="mt-1.5 flex items-center gap-1.5 text-[0.9375rem] font-medium">
                  {value}
                  <ArrowUpRightIcon
                    width={14}
                    height={14}
                    className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <a href={profile.cv} download className="btn btn-ink">
          Download CV
        </a>
      </Reveal>
    </Section>
  )
}
