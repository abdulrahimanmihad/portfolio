import { profile } from '../data'
import { ArrowUpIcon } from './icons'

const links = [
  { href: profile.linkedin, label: 'LinkedIn' },
  { href: profile.github, label: 'GitHub' },
  { href: `mailto:${profile.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-[54rem] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="eyebrow">
        © {new Date().getFullYear()} {profile.name}
      </p>

      <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className="eyebrow transition-colors hover:text-ink"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#top" className="eyebrow link-arrow self-start transition-colors hover:text-ink sm:self-auto">
        Back to top
        <ArrowUpIcon width={12} height={12} />
      </a>
      </div>
    </footer>
  )
}
