import { getProfileData } from './profileService';
import JobItemDescription, {buildExpJSX} from "../components/JobItemDescription.tsx";
import {getIcon} from "../util/iconUtils.tsx";

export const getMappedProfile = async (profile: any, lang = 'vi') => {
  const data = await getProfileData(profile,lang);
  console.log(data)
  const timelineData = data.timeline.map((item: any) => {
    const isWork = item.type === 'work' && typeof item.description === 'object';
    return {
      ...item,
      description: isWork ? (
        <JobItemDescription
          item={{
            ...item.description,
            exp: buildExpJSX(item.description.exp),
          }}
        />
      ) : item.description,
      icon: getIcon(item.icon),
    };
  });
  const jobDescriptionRaw = data.timeline.find((t: any) => t.type === 'work')?.description;
  const jobDescription = jobDescriptionRaw
    ? { ...jobDescriptionRaw, exp: buildExpJSX(jobDescriptionRaw.exp) }
    : null;

  const skillGroups = data.skills.map((group: any) => ({
    titleKey: group.titleKey,
    skills: group.skills.map((s: any) => ({
      ...s,
      icon: getIcon(s.icon),
    })),
  }));

  return {
    profile: data.profile,
    theme: data.theme,
    term: data.term,
    jobDescription,
    timelineData,
    awards: data.awards,
    certificates: data.certificates,
    skillGroups,
  };
};
