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
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <Reveal>
          <div className="grid gap-6 border-t border-line pt-6 lg:grid-cols-12 lg:gap-8">
            <p className="eyebrow flex gap-4 lg:col-span-3">
              <span>06</span>
              <span>Contact</span>
            </p>
            <div className="lg:col-span-9">
              <h2 id="contact-heading" className="display text-[clamp(3rem,7.6vw,7.25rem)]">
                Let’s <em>talk.</em>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:mt-20 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-9 lg:col-start-4">
            <a
              href={`mailto:${profile.email}`}
              className="display inline-block break-words text-[clamp(1.375rem,3.2vw,2.875rem)] underline decoration-line decoration-1 underline-offset-[0.25em] transition-colors duration-300 hover:decoration-ink"
            >
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-4">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Open to AI engineering roles and collaboration on LLM, real-time voice and computer
              vision systems. {profile.availability}, based in {profile.location}.
            </p>
          </Reveal>

          <ul className="border-t border-line lg:col-span-3 lg:col-start-10">
            {links.map(({ label, value, href, external }, i) => (
              <Reveal key={label} as="li" delay={0.15 + i * 0.05} className="border-b border-line">
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span>
                    <span className="eyebrow block">{label}</span>
                    <span className="mt-1 block text-[0.9375rem] font-medium">{value}</span>
                  </span>
                  <ArrowUpRightIcon
                    width={16}
                    height={16}
                    className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
