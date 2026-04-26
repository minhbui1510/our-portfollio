import { resolveSkillIcon } from './SkillsIcon';

interface SkillBadgeProps {
  name: string;
  showIcon?: boolean;
}

export default function SkillBadge({ name, showIcon = true }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
      bg-[rgb(var(--primary)/0.15)] text-[rgb(var(--primary))]
      border border-[rgb(var(--primary)/0.2)]
      transition-all duration-200
      hover:bg-[rgb(var(--primary)/0.25)] hover:border-[rgb(var(--primary)/0.4)]
      cursor-default"
    >
      {showIcon && <span className="text-sm">{resolveSkillIcon(name)}</span>}
      <span>{name}</span>
    </span>
  );
}
