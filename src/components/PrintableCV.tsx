import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import type { Skill } from '../model/Skill';

interface Props {
  data: any;
}

export default function PrintableCV({ data }: Props) {
  const { t } = useTranslation();

  if (!data) return null;

  const { profile, term, timelineData, awards, certificates, skillGroups } = data;

  const workExperience = timelineData.filter((item: any) => item.type === 'work');
  const education = timelineData.filter((item: any) => item.type === 'education');

  return (
    <div
      className="w-full leading-relaxed printable-cv text-[10pt] print:block hidden max-w-5xl mx-auto px-8 py-10 text-[rgb(var(--text))]"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {/* Header */}
      <div className="flex items-center border-b-[3px] pb-4 mb-6" style={{ borderColor: 'rgb(var(--primary))' }}>
        {profile.avatarUrl && (
          <img src={profile.avatarUrl} alt={profile.name} className="w-24 h-24 object-cover rounded-full mr-6 border-2" style={{ borderColor: 'rgb(var(--primary))' }} />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'rgb(var(--primary))' }}>{profile.name}</h1>
          <h2 className="text-sm font-semibold text-[rgb(var(--text-muted))] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{profile.title}</h2>
          
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[rgb(var(--text-muted))]">
            {profile.phone && (
              <div className="flex items-center gap-1.5">
                <FaPhoneAlt className="w-3 h-3" style={{ color: 'rgb(var(--accent))' }} />
                <span>{profile.phone}</span>
              </div>
            )}
            {profile.email && (
              <div className="flex items-center gap-1.5">
                <FaEnvelope className="w-3 h-3" style={{ color: 'rgb(var(--accent))' }} />
                <span>{profile.email}</span>
              </div>
            )}
            {profile.address && (
              <div className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="w-3 h-3" style={{ color: 'rgb(var(--accent))' }} />
                <span>{profile.address}</span>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center gap-1.5">
                <FaGlobe className="w-3 h-3" style={{ color: 'rgb(var(--accent))' }} />
                <span>{profile.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2-Column Layout */}
      <div className="flex gap-8">
        
        {/* Sidebar (35%) */}
        <div className="w-[35%] space-y-6">
          
          {/* Goals */}
          {term && (
            <section>
              <h3 className="text-sm font-bold uppercase border-b-2 pb-1 mb-3" style={{ color: 'rgb(var(--primary))', borderColor: 'rgb(var(--primary))', fontFamily: 'var(--font-heading)' }}>
                {t('profile.goals')}
              </h3>
              <div className="text-xs space-y-2 text-[rgb(var(--text-muted))]">
                {term.shortTerm && (
                  <div>
                    <strong className="block text-[rgb(var(--text))] mb-0.5">{t('profile.shortTerm')}:</strong>
                    <p>{term.shortTerm}</p>
                  </div>
                )}
                {term.longTerm && (
                  <div>
                    <strong className="block text-[rgb(var(--text))] mb-0.5">{t('profile.longTerm')}:</strong>
                    <p>{term.longTerm}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Skills */}
          {skillGroups && skillGroups.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase border-b-2 pb-1 mb-3" style={{ color: 'rgb(var(--primary))', borderColor: 'rgb(var(--primary))', fontFamily: 'var(--font-heading)' }}>
                {t('skills') || 'Skills'}
              </h3>
              <div className="space-y-4">
                {skillGroups.map((group: any, idx: number) => (
                  <div key={idx}>
                    <h4 className="text-xs font-semibold text-[rgb(var(--text))] mb-2">{t(group.titleKey)}</h4>
                    <div className="space-y-3 text-[11px]">
                      {group.skills.map((skill: Skill, sIdx: number) => (
                        <div key={sIdx}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[rgb(var(--text-muted))] font-medium">{skill.name}</span>
                            <span className="text-xs font-bold" style={{ color: 'rgb(var(--primary))' }}>{skill.level * 10}%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full skill-progress-track overflow-hidden">
                            <div 
                              className="h-full skill-progress-bar rounded-full" 
                              style={{ width: `${skill.level * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certificates */}
          {certificates && certificates.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase border-b-2 pb-1 mb-3" style={{ color: 'rgb(var(--primary))', borderColor: 'rgb(var(--primary))', fontFamily: 'var(--font-heading)' }}>
                {t('profile.certificates')}
              </h3>
              <div className="space-y-3 text-xs text-[rgb(var(--text-muted))]">
                {certificates.map((cert: any, i: number) => (
                  <div key={i}>
                    <span className="font-semibold text-[rgb(var(--text))] block mb-0.5">{cert.date}</span>
                    <span className="whitespace-pre-line">{cert.content}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards */}
          {awards && awards.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase border-b-2 pb-1 mb-3" style={{ color: 'rgb(var(--primary))', borderColor: 'rgb(var(--primary))', fontFamily: 'var(--font-heading)' }}>
                {t('profile.awards')}
              </h3>
              <div className="space-y-3 text-xs text-[rgb(var(--text-muted))]">
                {awards.map((award: any, i: number) => (
                  <div key={i}>
                    <span className="font-semibold text-[rgb(var(--text))] block mb-0.5">{award.date}</span>
                    <span className="whitespace-pre-line">{award.content}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Main Content (65%) */}
        <div className="w-[65%] space-y-6">
          
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section>
              <h3 className="text-[15px] font-bold uppercase border-b-2 pb-1 mb-4" style={{ color: 'rgb(var(--primary))', borderColor: 'rgb(var(--primary))', fontFamily: 'var(--font-heading)' }}>
                {t('profile.career') || 'Experience'}
              </h3>
              <div className="space-y-5">
                {workExperience.map((job: any, i: number) => {
                  const jobDescRaw = job.description?.props?.item || job.description;
                  const shortDesc = jobDescRaw?.shortDescription || (typeof jobDescRaw === 'string' ? jobDescRaw : '');
                  const expArray = jobDescRaw?.exp?.props?.children || [];

                  return (
                    <div key={i} className="page-break-avoid">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-[13px] font-bold uppercase tracking-wide" style={{ color: 'rgb(var(--primary))' }}>{job.title}</h4>
                        <span className="text-xs font-semibold text-[rgb(var(--text-muted))] whitespace-nowrap ml-2">{job.date}</span>
                      </div>
                      <div className="text-xs font-semibold text-[rgb(var(--text))] mb-1.5">{job.subtitle}</div>
                      {shortDesc && <div className="text-[11.5px] text-[rgb(var(--text-muted))] mb-2 italic border-l-2 pl-2" style={{ borderColor: 'rgb(var(--accent))' }}>{shortDesc}</div>}
                      
                      {expArray && expArray.length > 0 && (
                        <ul className="list-disc list-outside ml-4 text-[11.5px] text-[rgb(var(--text-muted))] space-y-1">
                          {expArray.map((expItem: any, eIdx: number) => {
                            const title = expItem?.props?.children?.[0]?.props?.children || '';
                            const content = expItem?.props?.children?.[2] || '';
                            return (
                              <li key={eIdx}>
                                {title && <strong className="text-[rgb(var(--text))]">{title}</strong>}
                                {title && content ? ' ' : ''}{content}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3 className="text-[15px] font-bold uppercase border-b-2 pb-1 mb-4" style={{ color: 'rgb(var(--primary))', borderColor: 'rgb(var(--primary))', fontFamily: 'var(--font-heading)' }}>
                {t('profile.education') || 'Education'}
              </h3>
              <div className="space-y-4">
                {education.map((edu: any, i: number) => (
                  <div key={i} className="page-break-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-[13px] font-bold" style={{ color: 'rgb(var(--primary))' }}>{edu.title}</h4>
                      <span className="text-xs font-semibold text-[rgb(var(--text-muted))] whitespace-nowrap ml-2">{edu.date}</span>
                    </div>
                    <div className="text-xs font-medium text-[rgb(var(--text))] mb-1">{edu.subtitle}</div>
                    <div className="text-[11.5px] text-[rgb(var(--text-muted))]">{edu.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

      </div>
    </div>
  );
}
