import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="shell flex flex-col items-center justify-between gap-5 py-9 sm:flex-row">
        <p className="muted text-sm">
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <ul className="flex items-center gap-2">
          {[
            { href: `mailto:${profile.email}`, Icon: MailIcon, label: 'Email' },
            { href: profile.linkedin, Icon: LinkedInIcon, label: 'LinkedIn' },
            { href: profile.github, Icon: GitHubIcon, label: 'GitHub' },
          ].map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                aria-label={label}
                className="muted grid h-9 w-9 place-items-center rounded-lg transition-colors hover:text-accent"
                style={{ border: '1px solid var(--border)' }}
              >
                <Icon width={17} height={17} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
