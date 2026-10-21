import { skills } from '../data'
import { Reveal, Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Capabilities" title="What I work *with.*">
      <dl className="border-t border-line">
        {skills.map((group, i) => (
          <Reveal
            key={group.group}
            delay={i * 0.05}
            className="grid gap-3 border-b border-line py-8 lg:grid-cols-12 lg:gap-8"
          >
            <dt className="eyebrow text-ink lg:col-span-3">{group.group}</dt>
            <dd className="max-w-3xl text-base leading-relaxed lg:col-span-8">
              {group.items.join(', ')}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
