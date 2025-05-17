import {useTranslation} from "react-i18next";

interface Goals {
  shortTerm: string;
  longTerm: string;
}
export function GoalsSection({ goals }: { goals: Goals }) {
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <h3 className="text-[rgb(var(--primary))] font-bold uppercase border-b border-[rgb(var(--primary))] inline-block">
        🎯 {t('profile.goals') || 'Mục tiêu nghề nghiệp'}
      </h3>
      <div>
        <p className="font-medium text-[rgb(var(--primary))]">{t('profile.shortTerm') || 'Ngắn hạn'}:</p>
        <p className="text-sm text-[rgb(var(--text))]">{goals.shortTerm}</p>
      </div>
      <div>
        <p className="font-medium text-[rgb(var(--primary))]">{t('profile.longTerm') || 'Dài hạn'}:</p>
        <p className="text-sm text-[rgb(var(--text))]">{goals.longTerm}</p>
      </div>
    </section>
  );
}
