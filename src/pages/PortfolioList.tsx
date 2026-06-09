import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import GlassCard from '../components/GlassCard';
import AnimatedAvatar from '../components/AnimatedAvatar';
import SkillBadge from '../components/SkillBadge';
import Footer from '../components/Footer';

export default function PortfolioList() {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setTheme('theme-dark');
  }, []);

  const people = [
    {
      name: 'Bùi Hải Minh',
      title: 'Fullstack Developer',
      avatar: '/avatar/haiminh.jpeg',
      skills: ['Angular', 'React', 'TypeScript', 'Node.js', 'Docker'],
      github: 'https://github.com/nguyenvana',
      linkedin: 'https://linkedin.com/in/nguyenvana',
      id: '@haiminh',
      theme: 'theme-docker',
    },
    {
      name: 'Nguyễn Ngọc Duy',
      title: 'DevOps',
      avatar: '/avatar/duynguyen.jpeg',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      github: 'https://github.com/tranthib',
      linkedin: 'https://linkedin.com/in/tranthib',
      id: '@ngocduy',
      theme: 'theme-aws',
    },
    {
      name: 'Đinh Xuân Khánh',
      title: 'Quản lý Dịch vụ Du thuyền',
      avatar: '/avatar/xuankhanh.jpg',
      skills: ['F&B Management', 'Cruise Ops', 'Tourism'],
      github: '#',
      linkedin: '#',
      id: '@xuankhanh',
      theme: 'theme-tourism',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center pt-8 sm:pt-0">
      {/* Hero Headline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1
          className="text-4xl sm:text-5xl font-bold shimmer-text mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('MyPortfolio')}
        </h1>
        <p className="text-[rgb(var(--text-muted))] text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          {t('description')}
        </p>
      </motion.div>

      {/* Developer Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        {people.map((person, index) => (
          <GlassCard
            key={person.id}
            delay={index * 0.15}
            onClick={() => navigate(`/${person.id}`)}
            className={person.theme}
          >
            <div className="flex flex-col items-center text-center gap-4">
              {/* Avatar */}
              <AnimatedAvatar
                src={person.avatar}
                alt={person.name}
                size="md"
              />

              {/* Name & Title */}
              <div>
                <h2
                  className="text-xl font-bold text-[rgb(var(--text))] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {person.name}
                </h2>
                <p className="text-sm text-[rgb(var(--text-muted))]">
                  {person.title}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2">
                {person.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>

              {/* Social Links & CTA */}
              <div className="flex items-center gap-4 mt-2">
                {person.github && person.github !== '#' && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))] transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${person.name} GitHub`}
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {person.linkedin && person.linkedin !== '#' && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${person.name} LinkedIn`}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
                {(person.github && person.github !== '#' || person.linkedin && person.linkedin !== '#') && (
                  <span className="w-px h-4 bg-[rgb(var(--border))]" />
                )}
                <span className="flex items-center gap-1 text-sm font-medium text-[rgb(var(--accent))] group">
                  View CV
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
