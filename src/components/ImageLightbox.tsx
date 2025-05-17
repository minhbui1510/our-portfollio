import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ImageLightboxProps = {
  src: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageLightbox({ src, isOpen, onClose }: ImageLightboxProps) {
  // Đóng bằng phím ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <motion.img
            src={src}
            onClick={(e) => e.stopPropagation()} // không đóng khi bấm vào ảnh
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose(); // vuốt xuống là đóng
            }}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              cursor: 'zoom-out',
              userSelect: 'none',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
