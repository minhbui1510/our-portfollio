import type {Skill} from "../model/Skill.ts";
import SkillCarousel from "./SkillCarousel.tsx";

export default function SkillBlock({ title, skills }: { title: string; skills: Skill[] }) {
  return (
   // Import SkillCarousel và truyền mảng skills vào:
      <>
     <div className="">
        <h3 className="text-[rgb(var(--primary))] font-bold uppercase tracking-wide mb-2 border-b-2 border-[rgb(var(--primary))] inline-block">
          {title}
        </h3>
        <div className="mt-4">
          <SkillCarousel skills={skills} />
        </div>
     </div>
      </>

  );
}
