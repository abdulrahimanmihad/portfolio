import { skills } from '../data'
import { Reveal, Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills" title="The toolkit." alt>
      <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, gi) => (
          <Reveal key={group.group} delay={gi * 0.06} className="border-t border-line pb-10 pt-5">
            <h3 className="eyebrow text-ink">{group.group}</h3>
            <ul className="mt-6 space-y-2 text-[0.9375rem] font-medium leading-relaxed">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
