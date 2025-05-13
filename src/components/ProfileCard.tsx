import { FaBirthdayCake, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function ProfileCard() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[rgb(var(--primary)/0.05)] rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-md">
      <img
        src="/images/avatar.jpg" // Thay bằng ảnh cá nhân thật
        alt="Bùi Hải Minh"
        className="w-32 h-32 rounded-full object-cover border-4 border-[rgb(var(--bg))] shadow"
      />

      <div className="flex-1 text-[rgb(var(--primary))]">
        <h1 className="text-2xl font-bold text-[rgb(var(--primary))]">Bùi Hải Minh</h1>
        <p className="text-base text-[rgb(var(--text))] mb-4">Chuyên viên IT</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[rgb(var(--text))]">
          <div className="flex items-center gap-2">
            <FaBirthdayCake className="text-[rgb(var(--primary))]" /> 15/10/2000
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-[rgb(var(--primary))]" /> Nam
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[rgb(var(--primary))]" /> 0945837510
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[rgb(var(--primary))]" /> buihai...@gmail.com
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <FaMapMarkerAlt className="text-[rgb(var(--primary))]" /> Tổ 9 Khu 3 Ngã 3 Hải Quân
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <FaGlobe className="text-[rgb(var(--primary))]" /> http://fb.com/haiminh1510
          </div>
        </div>
      </div>
    </div>
  );
}
