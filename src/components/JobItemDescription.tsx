// 📁 src/components/JobItemDescription.tsx
import {useTranslation} from 'react-i18next';
import {getToolIcon, getTechIcon} from './ToolTechIconMap';
import type {JobDescription} from "../model/TimeLineItem.ts";
import ImageLightbox from "./ImageLightbox.tsx";
import {useState} from "react";
import {resolveSkillIcon} from "./SkillsIcon.tsx";

interface Props {
    item: JobDescription;
}

export default function JobItemDescription({item}: Props) {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                className="flex items-start gap-4 rounded-lg overflow-hidden border border-[rgb(var(--border))] shadow-sm bg-[rgb(var(--bg))] p-4">
                {item.imageUrl && (
                    <img
                        src={item.imageUrl}
                        alt="Job illustration"
                        className="w-24 h-24 object-cover rounded-md flex-shrink-0 transition-transform duration-300 hover:scale-105 hidden sm:block cursor-pointer"
                        onClick={() => setOpen(true)}
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
                                        {resolveSkillIcon(tool)} {tool}
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
                                        {resolveSkillIcon(tech)} {tech}
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
            <ImageLightbox
                src={item.imageUrl}
                isOpen={open}
                onClose={() => setOpen(false)}/>
        </>
    );
}

export const buildExpJSX = (exp: { title: string; content: string }[]) => (
    <div className="flex flex-col gap-2 text-sm text-[rgb(var(--text))] leading-relaxed mt-2">
        {exp.map((item, idx) => (
            <div key={idx}>
                <span className="font-medium">{item.title}:</span> {item.content}
            </div>
        ))}
    </div>
);