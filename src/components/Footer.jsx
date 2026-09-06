import { profile } from '../data'
import { ArrowUpIcon } from './icons'

export default function Footer() {
  return (
    <footer className="inverse border-t border-line">
      <div className="shell flex flex-col gap-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            { href: profile.linkedin, label: 'LinkedIn' },
            { href: profile.github, label: 'GitHub' },
            { href: `mailto:${profile.email}`, label: 'Email' },
            { href: profile.cv, label: 'CV', download: true },
          ].map(({ href, label, download }) => (
            <li key={label}>
              <a
                href={href}
                {...(download ? { download: true } : {})}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="font-medium text-muted transition-colors hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#top" className="link-arrow self-start text-muted hover:text-ink sm:self-auto">
          Back to top
          <ArrowUpIcon width={15} height={15} />
        </a>
      </div>
    </footer>
  )
}
