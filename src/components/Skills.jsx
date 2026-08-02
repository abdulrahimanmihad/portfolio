import { motion } from 'framer-motion'
import { skills } from '../data'
import { Reveal, Section } from './ui'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      lead="Grouped by the role each tool plays rather than by claimed proficiency."
      alt
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, gi) => (
          <Reveal
            key={group.group}
            delay={gi * 0.07}
            className={gi === skills.length - 1 && skills.length % 2 === 1 ? 'md:col-span-2' : ''}
          >
            <div className="surface h-full rounded-xl p-6">
              <h3 className="flex items-center gap-3 text-sm font-semibold tracking-tight">
                <span aria-hidden="true" className="h-4 w-1 rounded-full bg-accent" />
                {group.group}
              </h3>
              <motion.ul
                className="mt-5 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{ show: { transition: { staggerChildren: 0.035 } } }}
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    className="chip"
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.96 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
