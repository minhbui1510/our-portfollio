import { motion } from 'framer-motion';
import type { Skill } from '../model/Skill';
import { resolveSkillIcon } from './SkillsIcon';

interface TechMarqueeProps {
  skills: Skill[];
}

export default function TechMarquee({ skills }: TechMarqueeProps) {
  // Double the items for seamless infinite scroll
  const doubled = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden py-6 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: skills.length * 3,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors duration-200 flex-shrink-0"
          >
            <span className="text-2xl">{resolveSkillIcon(skill.name)}</span>
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
