import { useState } from "react";
import { motion } from "framer-motion";
import type { Skill } from "../model/Skill.ts";
import { resolveSkillIcon } from "./SkillsIcon.tsx";

export default function SkillCarousel({ skills }: { skills: Skill[] }) {
  const [active, setActive] = useState(0);

  // Lấy 3 skill: trước, giữa, sau (loop circular)
  const getSkill = (offset: number) => {
    const len = skills.length;
    return skills[(active + offset + len) % len];
  };

  // Hiển thị 3 item: trước, giữa, sau
  const displayItems = [-1, 0, 1].map(offset => {
    const skill = getSkill(offset);
    const isActive = offset === 0;
    return (
      <motion.div
        key={skill.name}
        className="flex flex-col items-center mx-2"
        animate={{
          scale: isActive ? 1.2 : 0.8,
          opacity: isActive ? 1 : 0.38,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <span className="text-5xl md:text-6xl text-[rgb(var(--primary))] mb-2 drop-shadow-md">
          {resolveSkillIcon(skill.name)}
        </span>
        <span className={`mt-2 font-semibold text-base md:text-lg text-white text-center ${isActive ? "" : "opacity-70"}`}>
          {skill.name}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="w-full flex justify-center items-center gap-3">
      {/* Prev Arrow */}
      <button
        className="text-3xl md:text-4xl flex-shrink-0 rounded-full p-2 hover:bg-white/10 transition"
        onClick={() => setActive((prev) => (prev - 1 + skills.length) % skills.length)}
        aria-label="Previous"
      >
        &#8592;
      </button>

      {/* Carousel items: flex không giới hạn width */}
      <div className="flex items-center justify-center flex-grow">
        {displayItems}
      </div>

      {/* Next Arrow */}
      <button
        className="text-3xl md:text-4xl flex-shrink-0 rounded-full p-2 hover:bg-white/10 transition"
        onClick={() => setActive((prev) => (prev + 1) % skills.length)}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}
