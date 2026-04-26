import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  onClick,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass-card p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
