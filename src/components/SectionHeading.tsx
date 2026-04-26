import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  icon?: ReactNode;
  className?: string;
}

export default function SectionHeading({ title, icon, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 mb-6 ${className}`}
    >
      {icon && (
        <span className="text-xl text-[rgb(var(--accent))]">{icon}</span>
      )}
      <h2
        className="text-2xl font-bold text-[rgb(var(--text))] tracking-tight"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[rgb(var(--primary)/0.3)] to-transparent ml-2" />
    </motion.div>
  );
}
