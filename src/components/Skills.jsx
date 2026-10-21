import { skills } from '../data'
import { Reveal, Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Capabilities" title="What I work *with.*">
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05} className="border-t border-line pt-5">
            <dt className="eyebrow text-ink">{group.group}</dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
              {group.items.join(', ')}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
