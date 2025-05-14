import { FaBirthdayCake, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProfileData {
  name: string;
  title: string;
  avatarUrl: string;
  birthday: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  website: string;
}
export default function ProfileCard({ data  }: { data?: ProfileData }) {
  const { t } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[rgb(var(--primary)/0.05)] rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-md">
      <img
        src={data.avatarUrl || 'https://via.placeholder.com/150'}
        alt={data.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-[rgb(var(--bg))] shadow"
      />

      <div className="flex-1 text-[rgb(var(--primary))]">
        <h1 className="text-2xl font-bold text-[rgb(var(--primary))]">{data?.name}</h1>
        <p className="text-base text-[rgb(var(--text))] mb-4">{data?.title}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[rgb(var(--text))]">
          <div className="flex items-center gap-2">
            <FaBirthdayCake className="text-[rgb(var(--primary))]" /> {data?.birthday}
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-[rgb(var(--primary))]" /> {data?.gender}
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[rgb(var(--primary))]" /> {data?.phone}
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[rgb(var(--primary))]" />  {data?.email}
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <FaMapMarkerAlt className="text-[rgb(var(--primary))]" /> {data?.address}
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <FaGlobe className="text-[rgb(var(--primary))]" /> {data?.website}
          </div>
        </div>
      </div>
    </div>
  );
}
