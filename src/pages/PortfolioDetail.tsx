import React, { useEffect, useState } from "react";
import { Timeline } from "../components/TimelineItem.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import SectionBlock from "../components/SectionBlock.tsx";
import { useTranslation } from "react-i18next";
import SkillBlock from "../components/SkillsBlock.tsx";
import { getMappedProfile } from "../service/profileMappedService.tsx";
import {useParams} from "react-router-dom";
import {useTheme} from "../context/ThemeContext.tsx";
import {GoalsSection} from "../components/GoalsSection.tsx";

export default function PortfolioDetail() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<any>(null);
  const {id} = useParams();
  const { setTheme } = useTheme();
  const fetchData = async (lang: string) => {
    const normalizedLang = lang.startsWith("vi") ? "vi" : "en";
    try {
      const res = await getMappedProfile(id, normalizedLang);
      setData(res);
      console.log(res);
      setTheme(res.theme);
    } catch (e) {
      console.error("Failed to load profile:", e);
    }
  };

  // 🔁 Gọi lần đầu khi component mount
  useEffect(() => {
    fetchData(i18n.language);
  }, []);

  // 🔁 Lắng nghe sự kiện đổi ngôn ngữ (languageChanged)
  useEffect(() => {
    const handleLangChange = (lng: string) => {
      fetchData(lng);
    };

    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 gradiant-bg rounded">
      <ProfileCard data={data.profile} />
      <Timeline items={data.timelineData} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      <GoalsSection goals={data.term}/>
      <SectionBlock title={t("profile.certificates")} items={data.certificates} />
      <SectionBlock title={t("profile.awards")} items={data.awards} />

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {data.skillGroups.map((group: any, index: number) => (
          <SkillBlock key={index} title={t(group.titleKey)} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}
