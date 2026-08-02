import { profile } from '../data'
import { Reveal } from './ui'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './icons'

const links = [
  {
    label: 'LinkedIn',
    value: 'abdul-rahiman-mihad',
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'abdulrahimanmihad',
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: PhoneIcon,
    external: false,
  },
  {
    label: 'Location',
    value: profile.location,
    href: null,
    Icon: PinIcon,
    external: false,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-alt)' }}
    >
      <div className="shell">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something
          </h2>
          <p className="muted mt-4 max-w-2xl text-base leading-relaxed">
            Open to AI engineering roles and collaboration on real-time and agentic systems. The
            fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-9 inline-flex items-center gap-2.5 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[0_14px_34px_-14px_var(--color-accent)]"
          >
            <MailIcon width={18} height={18} />
            {profile.email}
          </a>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, value, href, Icon, external }, i) => {
            const body = (
              <>
                <Icon width={18} height={18} className="text-accent" />
                <span className="mt-3.5 block font-mono text-[0.7rem] uppercase tracking-[0.16em] muted">
                  {label}
                </span>
                <span className="mt-1 block truncate text-sm font-medium">{value}</span>
              </>
            )
            return (
              <Reveal key={label} delay={0.15 + i * 0.06} as="li">
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                    className="surface card-glow block h-full rounded-xl p-5"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="surface h-full rounded-xl p-5">{body}</div>
                )}
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
