import React from "react";
import {TimelineItem} from "../components/TimelineItem.tsx";
const timelineData = [
  {
    title: "Bắt đầu dự án",
    description: "Tạo cấu trúc project với React và Tailwind.",
    date: "01/01/2025",
  },
  {
    title: "Thiết kế UI",
    description: "Lên mockup và tạo layout bằng Tailwind.",
    date: "05/01/2025",
  },
  {
    title: "Triển khai chức năng",
    description: "Kết nối API và xử lý logic frontend.",
    date: "10/01/2025",
  },
  {
    title: "Kiểm thử",
    description: "Thực hiện kiểm thử và sửa lỗi.",
    date: "15/01/2025",
  },
  {
    title: "Triển khai sản phẩm",
    description: "Đưa sản phẩm lên môi trường thực tế.",
    date: "20/01/2025",
  },
    ]
export default function PortfolioDetail() {
  return (
    // <div className="max-w-4xl mx-auto p-6 text-base space-y-6">
    //   {/* Thông tin cá nhân */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">👤 Thông tin cá nhân</h2>
    //     <ul className="list-disc pl-6">
    //       <li><strong>Họ và tên:</strong> Nguyễn Văn A</li>
    //       <li><strong>Ngày sinh:</strong> 01/01/1995</li>
    //       <li><strong>Giới tính:</strong> Nam</li>
    //       <li><strong>Email:</strong> nguyenvana@gmail.com</li>
    //       <li><strong>Điện thoại:</strong> 0909 123 456</li>
    //       <li><strong>Địa chỉ:</strong> 123 Lê Lợi, Q.1, TP.HCM</li>
    //       <li><strong>LinkedIn:</strong> linkedin.com/in/nguyenvana</li>
    //       <li><strong>Website:</strong> nguyenvana.dev</li>
    //     </ul>
    //   </section>
    //
    //   {/* Chứng chỉ bằng cấp */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">🎓 Chứng chỉ & Bằng cấp</h2>
    //     <table className="table-auto w-full border">
    //       <thead>
    //         <tr className="bg-gray-100">
    //           <th className="border px-4 py-2">Năm</th>
    //           <th className="border px-4 py-2">Chứng chỉ/Bằng cấp</th>
    //           <th className="border px-4 py-2">Đơn vị cấp</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td className="border px-4 py-2">2017</td>
    //           <td className="border px-4 py-2">Cử nhân CNTT</td>
    //           <td className="border px-4 py-2">ĐH Bách Khoa TP.HCM</td>
    //         </tr>
    //         <tr>
    //           <td className="border px-4 py-2">2020</td>
    //           <td className="border px-4 py-2">Chứng chỉ Web Fullstack</td>
    //           <td className="border px-4 py-2">FUNiX</td>
    //         </tr>
    //         <tr>
    //           <td className="border px-4 py-2">2022</td>
    //           <td className="border px-4 py-2">IELTS 7.5</td>
    //           <td className="border px-4 py-2">IDP Vietnam</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </section>
    //
    //   {/* Mục tiêu nghề nghiệp */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">🎯 Mục tiêu nghề nghiệp</h2>
    //     <p>
    //       Trở thành một chuyên gia phát triển phần mềm toàn diện (Fullstack Developer), đóng góp vào các dự án công nghệ có tác động tích cực đến xã hội. Trong 3 năm tới, hướng đến vai trò Leader nhóm phát triển sản phẩm trong lĩnh vực EdTech.
    //     </p>
    //   </section>
    //
    //   {/* Kinh nghiệm làm việc */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">🧩 Kinh nghiệm làm việc</h2>
    //     <div className="space-y-4">
    //       <div>
    //         <h3 className="font-semibold">Công ty ABC - Frontend Developer <span className="text-sm font-normal">(01/2022 – Hiện tại)</span></h3>
    //         <ul className="list-disc pl-6">
    //           <li>Phát triển UI bằng ReactJS, TailwindCSS</li>
    //           <li>Tối ưu hiệu suất tăng 35%</li>
    //           <li>Tích hợp RESTful API</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="font-semibold">Công ty XYZ - Intern Web Developer <span className="text-sm font-normal">(06/2021 – 12/2021)</span></h3>
    //         <ul className="list-disc pl-6">
    //           <li>Thực hành HTML, CSS, JS</li>
    //           <li>Viết landing page nội bộ</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </section>
    //
    //   {/* Giải thưởng */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">🏆 Giải thưởng</h2>
    //     <ul className="list-disc pl-6">
    //       <li>Giải Nhì Cuộc thi Web Design cấp Trường – 2019</li>
    //       <li>Nhân viên tiêu biểu quý 4 – Công ty ABC – 2023</li>
    //     </ul>
    //   </section>
    //
    //   {/* Kỹ năng */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">🛠️ Kỹ năng</h2>
    //     <ul className="list-disc pl-6 columns-2">
    //       <li>JavaScript / TypeScript</li>
    //       <li>ReactJS / NextJS / NodeJS</li>
    //       <li>MySQL / MongoDB</li>
    //       <li>Git / Figma / Postman</li>
    //       <li>Giao tiếp / Làm việc nhóm</li>
    //     </ul>
    //   </section>
    //
    //   {/* Người tham chiếu */}
    //   <section>
    //     <h2 className="text-xl font-bold mb-2">🧑‍💼 Người tham chiếu</h2>
    //     <ul className="list-disc pl-6">
    //       <li><strong>Ông Trần Văn B</strong> – Trưởng phòng Kỹ thuật – Công ty ABC – 0908 456 789 – tranvanb@abc.com</li>
    //       <li><strong>Cô Nguyễn Thị C</strong> – Giảng viên hướng dẫn – Đại học Bách Khoa – 0909 999 999 – nguyenthic@hcmut.edu.vn</li>
    //     </ul>
    //   </section>
    // </div>
      <div className="max-w-2xl mx-auto p-6">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>

  );
}
