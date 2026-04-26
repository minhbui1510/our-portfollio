import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface FooterProps {
  socials?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export default function Footer({ socials }: FooterProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetail = location.pathname !== '/';
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 pt-8 pb-6 border-t border-[rgb(var(--border)/0.3)]"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Back button (only on detail page) */}
        {isDetail && (
          <button
            onClick={() => navigate('/')}
            className="text-sm font-medium text-[rgb(var(--text-muted))]
              hover:text-[rgb(var(--accent))] transition-colors duration-200
              cursor-pointer flex items-center gap-2"
          >
            ← Back to Portfolio
          </button>
        )}

        {/* Social links */}
        {socials && (
          <div className="flex items-center gap-4">
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]
                  transition-colors duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))]
                  transition-colors duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
            {socials.email && (
              <a
                href={`mailto:${socials.email}`}
                className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))]
                  transition-colors duration-200 cursor-pointer"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            )}
          </div>
        )}

        {/* Credit line */}
        <p
          className="text-xs text-[rgb(var(--text-muted)/0.5)] flex items-center gap-1"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Built with <FaHeart className="w-3 h-3 text-red-400" /> using React & Tailwind
          <span className="mx-1">•</span>
          © {year}
        </p>
      </div>
    </motion.footer>
  );
}
