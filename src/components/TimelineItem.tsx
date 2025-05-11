import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
}

export const TimelineItem = ({ title, description, date }: TimelineItemProps) => {
  return (
    <motion.div
      className="relative pl-8 sm:pl-12 py-4 border-l-2 border-gray-300"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-4 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <time className="text-sm text-gray-400">{date}</time>
    </motion.div>
  );
};
