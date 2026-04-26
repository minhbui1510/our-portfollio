import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollUp}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full
            flex items-center justify-center cursor-pointer
            bg-[rgb(var(--primary))] text-white shadow-lg
            hover:bg-[rgb(var(--accent))] hover:shadow-[0_0_20px_rgba(var(--accent),0.4)]
            transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
