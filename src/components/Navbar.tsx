import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGlobe } from 'react-icons/fa';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isDetail = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language.startsWith('vi') ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`glass-navbar fixed top-4 left-4 right-4 z-50 px-6 py-3 flex items-center justify-between ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        {isDetail && (
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] transition-colors duration-200 cursor-pointer"
            aria-label="Back to portfolio list"
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>
        )}
        <h1
          className="text-xl font-bold cursor-pointer gradient-text"
          style={{ fontFamily: 'var(--font-heading)' }}
          onClick={() => navigate('/')}
        >
          {t('MyPortfolio')}
        </h1>
      </div>

      <button
        onClick={toggleLang}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
          text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]
          hover:bg-[rgb(var(--bg-surface)/0.5)] transition-all duration-200 cursor-pointer"
        aria-label="Toggle language"
      >
        <FaGlobe className="w-4 h-4" />
        <span>{i18n.language.startsWith('vi') ? 'EN' : 'VI'}</span>
      </button>
    </motion.nav>
  );
}
