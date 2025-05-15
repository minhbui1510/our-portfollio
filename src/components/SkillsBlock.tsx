import type {Skill} from "../model/Skill.ts";
import {resolveSkillIcon} from "./SkillsIcon.tsx";

export default function SkillBlock({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-[rgb(var(--primary))] mb-3">{title}</h4>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between items-center text-xs font-medium">
                { <span className="text-base flex gap-2 items-center text-[rgb(var(--primary))]">{resolveSkillIcon(skill.name)}
                 <span className="text-[rgb(var(--text))]">{skill.name}</span></span>}
              <span className="text-[rgb(var(--text))]">{skill.level}/10</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
              <div
                className="h-full rounded bg-[rgb(var(--primary))]"
                style={{ width: `${skill.level * 10}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
