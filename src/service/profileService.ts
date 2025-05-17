// Đọc dữ liệu JSON (vi/en)
export type Lang = 'vi' | 'en';

export const getProfileData = async (profile: string,lang: string) => {
  const res = await fetch(`/locales/${lang}/${profile}.${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load profile: ${lang}`);
  return res.json();
};
