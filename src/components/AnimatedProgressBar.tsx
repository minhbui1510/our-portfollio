import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { resolveSkillIcon } from './SkillsIcon';
import type { Skill } from '../model/Skill';

interface AnimatedProgressBarProps {
  skill: Skill;
  maxLevel?: number;
  index?: number;
}

export default function AnimatedProgressBar({
  skill,
  maxLevel = 10,
  index = 0,
}: AnimatedProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const percentage = (skill.level / maxLevel) * 100;

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base text-[rgb(var(--primary))]">
            {resolveSkillIcon(skill.name)}
          </span>
          <span
            className="text-sm font-medium text-[rgb(var(--text))]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-[rgb(var(--text-muted))]">
          {skill.level}/{maxLevel}
        </span>
      </div>
      <div className="skill-progress-track">
        <motion.div
          className="skill-progress-bar"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
