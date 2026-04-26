import { useTranslation } from 'react-i18next';
import type { JobDescription } from '../model/TimeLineItem';
import { useState } from 'react';
import { resolveSkillIcon } from './SkillsIcon';
import ImageLightbox from './ImageLightbox';
import SkillBadge from './SkillBadge';

interface Props {
  item: JobDescription;
}

export default function JobItemDescription({ item }: Props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-start gap-4 rounded-xl overflow-hidden mt-2">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt="Project screenshot"
            className="w-24 h-24 object-cover rounded-lg flex-shrink-0 transition-all duration-300
              hover:scale-105 hidden sm:block cursor-pointer
              border border-[var(--glass-border)]"
            onClick={() => setOpen(true)}
          />
        )}

        <div className="flex-1 space-y-3 text-sm text-[rgb(var(--text-muted))]">
          {item.shortDescription && (
            <p className="text-[rgb(var(--text))]">{item.shortDescription}</p>
          )}

          {item.teamSize && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))]">
                {t('job.team')}:
              </span>
              <span className="text-sm">{item.teamSize} {t('people')}</span>
            </div>
          )}

          {item.tools && item.tools.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))]">
                {t('job.tools')}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs
                      bg-[rgb(var(--bg-surface)/0.6)] text-[rgb(var(--text-muted))]
                      border border-[var(--glass-border)]"
                  >
                    {resolveSkillIcon(tool)} {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))]">
                {t('job.tech')}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech, i) => (
                  <SkillBadge key={i} name={tech} />
                ))}
              </div>
            </div>
          )}

          {item.exp && (
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--primary))]">
                {t('job.detail')}
              </span>
              <div className="text-sm leading-relaxed">{item.exp}</div>
            </div>
          )}
        </div>
      </div>
      <ImageLightbox
        src={item.imageUrl || ''}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export const buildExpJSX = (exp: { title: string; content: string }[]) => (
  <div className="flex flex-col gap-2 text-sm text-[rgb(var(--text-muted))] leading-relaxed">
    {exp.map((item, idx) => (
      <div key={idx}>
        <span className="font-medium text-[rgb(var(--text))]">{item.title}:</span>{' '}
        {item.content}
      </div>
    ))}
  </div>
);