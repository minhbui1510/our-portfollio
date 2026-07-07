import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaGlobe, FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate, FaBullseye } from 'react-icons/fa';

import { useTheme } from '../context/ThemeContext';
import { getMappedProfile } from '../service/profileMappedService';
import AnimatedAvatar from '../components/AnimatedAvatar';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import AnimatedProgressBar from '../components/AnimatedProgressBar';
import TechMarquee from '../components/TechMarquee';
import ImageLightbox from '../components/ImageLightbox';
import Footer from '../components/Footer';
import PrintableCV from '../components/PrintableCV';
import type { Skill } from '../model/Skill';

export default function PortfolioDetail() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<any>(null);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { id } = useParams();
  const { setTheme } = useTheme();

  const fetchData = async (lang: string) => {
    const normalizedLang = lang.startsWith('vi') ? 'vi' : 'en';
    try {
      const res = await getMappedProfile(id, normalizedLang);
      setData(res);
      setTheme(res.theme);
    } catch (e) {
      console.error('Failed to load profile:', e);
    }
  };

  useEffect(() => {
    fetchData(i18n.language);
  }, []);

  useEffect(() => {
    const handleLangChange = (lng: string) => fetchData(lng);
    i18n.on('languageChanged', handleLangChange);
    return () => { i18n.off('languageChanged', handleLangChange); };
  }, [i18n]);

  if (!data) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-8 h-8 border-2 border-[rgb(var(--primary))] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  // Collect all tech skills for marquee
  const allTechSkills: Skill[] = data.skillGroups
    .flatMap((group: any) => group.skills)
    .filter((s: Skill) => s.level >= 5);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-10 print:hidden"
      >
        {/* ── SECTION 1: Profile Hero ── */}
        <GlassCard className="!p-8" hover={false}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <AnimatedAvatar
              src={data.profile.avatarUrl || ''}
              alt={data.profile.name || ''}
              size="lg"
              onClick={() => {
                setLightboxSrc(data.profile.avatarUrl);
                setLightboxOpen(true);
              }}
            />

            <div className="flex-1 text-center sm:text-left">
              <h1
                className="text-3xl sm:text-4xl font-bold gradient-text mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {data.profile.name}
              </h1>
              <p
                className="text-lg text-[rgb(var(--text-muted))] mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {data.profile.title}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[rgb(var(--text))]">
                {data.profile.phone && (
                  <a href={`tel:${data.profile.phone}`} className="flex items-center gap-2.5 hover:text-[rgb(var(--accent))] transition-colors duration-200">
                    <FaPhoneAlt className="text-[rgb(var(--primary))] w-3.5 h-3.5 flex-shrink-0" />
                    <span>{data.profile.phone}</span>
                  </a>
                )}
                {data.profile.email && (
                  <a href={`mailto:${data.profile.email}`} className="flex items-center gap-2.5 hover:text-[rgb(var(--accent))] transition-colors duration-200">
                    <FaEnvelope className="text-[rgb(var(--primary))] w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{data.profile.email}</span>
                  </a>
                )}
                {data.profile.address && (
                  <div className="flex items-center gap-2.5 sm:col-span-2">
                    <FaMapMarkerAlt className="text-[rgb(var(--primary))] w-3.5 h-3.5 flex-shrink-0" />
                    <span>{data.profile.address}</span>
                  </div>
                )}
                {data.profile.website && (
                  <a href={data.profile.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-[rgb(var(--accent))] transition-colors duration-200 sm:col-span-2">
                    <FaGlobe className="text-[rgb(var(--primary))] w-3.5 h-3.5 flex-shrink-0" />
                    <span>{data.profile.website}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* ── SECTION 2: Tech Stack Marquee ── */}
        {allTechSkills.length > 0 && (
          <div>
            <TechMarquee skills={allTechSkills} />
          </div>
        )}

        {/* ── SECTION 3: Career Timeline ── */}
        <div>
          <SectionHeading title={t('profile.career') || 'Career Timeline'} icon={<FaBriefcase />} />
          <div className="space-y-4">
            {data.timelineData.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard hover={true} delay={0}>
                  <div className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                        style={{ background: item.bgColor || 'rgb(var(--primary))' }}
                      >
                        {item.icon || (item.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />)}
                      </div>
                      {index < data.timelineData.length - 1 && (
                        <div className="w-0.5 h-full min-h-[20px] bg-gradient-to-b from-[rgb(var(--accent))] to-[rgb(var(--primary)/0.2)] mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3
                          className="text-lg font-bold text-[rgb(var(--text))]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {item.title}
                        </h3>
                        <span className="text-xs text-[rgb(var(--text-muted))] px-2 py-0.5 rounded-full bg-[rgb(var(--bg-surface)/0.5)]">
                          {item.date}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-sm text-[rgb(var(--primary))] mb-2">{item.subtitle}</p>
                      )}
                      <div className="text-sm text-[rgb(var(--text-muted))]">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Bento Grid (Goals + Certs + Awards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Goals */}
          {data.term && (
            <GlassCard delay={0.1} className="sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaBullseye className="text-[rgb(var(--accent))] w-5 h-5" />
                <h3
                  className="text-lg font-bold text-[rgb(var(--text))]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t('profile.goals')}
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))] mb-1">
                    {t('profile.shortTerm')}
                  </p>
                  <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed">
                    {data.term.shortTerm}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))] mb-1">
                    {t('profile.longTerm')}
                  </p>
                  <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed">
                    {data.term.longTerm}
                  </p>
                </div>
              </div>
            </GlassCard>
          )}

          {/* Certificates */}
          {data.certificates && data.certificates.length > 0 && (
            <GlassCard delay={0.2} className="sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaCertificate className="text-[rgb(var(--accent))] w-5 h-5" />
                <h3
                  className="text-lg font-bold text-[rgb(var(--text))]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t('profile.certificates')}
                </h3>
              </div>
              <div className="space-y-3">
                {data.certificates.map((cert: any, i: number) => (
                  <div key={i}>
                    <p className="text-xs font-semibold text-[rgb(var(--primary))]">{cert.date}</p>
                    <p className="text-sm text-[rgb(var(--text-muted))] whitespace-pre-line leading-relaxed">
                      {cert.content}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}

          {/* Awards */}
          {data.awards && data.awards.length > 0 && (
            <GlassCard delay={0.3} className="sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaTrophy className="text-[rgb(var(--accent))] w-5 h-5" />
                <h3
                  className="text-lg font-bold text-[rgb(var(--text))]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t('profile.awards')}
                </h3>
              </div>
              <div className="space-y-3">
                {data.awards.map((award: any, i: number) => (
                  <div key={i}>
                    <p className="text-xs font-semibold text-[rgb(var(--primary))]">{award.date}</p>
                    <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed">
                      {award.content}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}
        </div>

        {/* ── SECTION 5: Skills ── */}
        <div>
          <SectionHeading title="Skills" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.skillGroups.map((group: any, gIndex: number) => (
              <GlassCard key={gIndex} delay={gIndex * 0.1}>
                <h3
                  className="text-lg font-bold text-[rgb(var(--text))] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t(group.titleKey)}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill: Skill, sIndex: number) => (
                    <AnimatedProgressBar
                      key={skill.name}
                      skill={skill}
                      index={sIndex}
                    />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* ── SECTION 6: Footer ── */}
        <Footer
          socials={{
            email: data.profile.email,
          }}
        />

        {/* Lightbox */}
        <ImageLightbox
          src={lightboxSrc}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </motion.div>

      {/* Printable version (hidden on screen, visible on print) */}
      <PrintableCV data={data} />
    </AnimatePresence>
  );
}
