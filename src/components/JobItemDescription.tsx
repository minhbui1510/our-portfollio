// 📁 src/components/JobItemDescription.tsx
import {useTranslation} from 'react-i18next';
import {getToolIcon, getTechIcon} from './ToolTechIconMap';
import type {JobDescription} from "../model/TimeLineItem.ts";

interface Props {
    item: JobDescription;
}

export default function JobItemDescription({item}: Props) {
    const {t} = useTranslation();

    return (
        <div
            className="flex items-start gap-4 rounded-lg overflow-hidden border border-[rgb(var(--border))] shadow-sm bg-[rgb(var(--bg))] p-4">
            {item.imageUrl && (
                <img
                    src={item.imageUrl}
                    alt="Job illustration"
                    className="w-24 h-24 object-cover rounded-md flex-shrink-0 transition-transform duration-300 hover:scale-105 hidden sm:block"
                />
            )}

            <div className="flex-1 space-y-2 text-sm text-[rgb(var(--text))]">
                {item.shortDescription && (
                    <div className="flex gap-1">
                        <strong>{t('job.description')}:</strong>
                        <span className="text-left">{item.shortDescription}</span>
                    </div>
                )}
                {item.teamSize && (
                    <div className="flex gap-1">
                        <strong>{t('job.team')}:</strong>
                        <span>{item.teamSize} {t('people')}</span>
                    </div>
                )}
                {item.tools && (
                    <div className="space-y-1">
                        <div className="font-medium text-sm">{t('job.tools')}:</div>
                        <div className="flex flex-wrap gap-2">
                            {item.tools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-1 bg-[rgb(var(--accent)/0.15)] px-2 py-1 rounded text-xs"
                                >
                                    {getToolIcon(tool)} {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {item.technologies && (
                    <div className="space-y-1">
                        <div className="font-medium text-sm">{t('job.tech')}:</div>
                        <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-1 bg-[rgb(var(--accent)/0.15)] px-2 py-1 rounded text-xs"
                                >
                                    {getTechIcon(tech)} {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                {item.exp && (
                    <div className="space-y-1">
                        <div className="font-medium text-sm">{t('job.detail')}:</div>
                        <div>{item.exp}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
