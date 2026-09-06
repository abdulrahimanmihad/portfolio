import { profile } from '../data'
import { Reveal } from './ui'
import { ArrowUpRightIcon } from './icons'

const links = [
  { label: 'LinkedIn', value: 'abdul-rahiman-mihad', href: profile.linkedin, external: true },
  { label: 'GitHub', value: 'abdulrahimanmihad', href: profile.github, external: true },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="inverse py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex gap-3">
            <span className="tabular-nums">07</span>
            <span>Contact</span>
          </p>
          <h2 id="contact-heading" className="display mt-6 text-[clamp(3.5rem,12vw,11rem)]">
            Let’s talk.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Open to AI engineering roles and collaboration on real-time voice, LLM and
              computer vision systems. {profile.availability}, based in {profile.location}.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block break-all text-[clamp(1.25rem,3.4vw,2.75rem)] font-bold leading-tight tracking-tight underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-300 hover:decoration-current"
            >
              {profile.email}
            </a>
          </Reveal>

          <ul className="border-t border-line lg:col-span-5 lg:col-start-8">
            {links.map(({ label, value, href, external }, i) => (
              <Reveal key={label} as="li" delay={0.15 + i * 0.05} className="border-b border-line">
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span>
                    <span className="eyebrow block">{label}</span>
                    <span className="mt-1 block text-base font-medium sm:text-lg">{value}</span>
                  </span>
                  <ArrowUpRightIcon
                    width={20}
                    height={20}
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
