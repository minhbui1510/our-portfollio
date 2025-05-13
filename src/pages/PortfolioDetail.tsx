import React, {ReactNode} from "react";
import {Timeline} from "../components/TimelineItem.tsx";
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";
import type {JobDescription} from "../model/TimeLineItem.ts";
import JobItemDescription from "../components/JobItemDescription.tsx";
import ProfileCard from "../components/ProfileCard.tsx";

const mbRebootDescription: JobDescription = {
    teamSize: 10,
    tools: ['VSCode', 'Git', 'Jira'],
    technologies: ['Angular 16', 'Micro Frontend', 'Spring Boot', 'Oracle'],
    shortDescription: 'Phát triển hệ thống giao dịch doanh nghiệp MB.',
    exp: (
        <div className="flex flex-col gap-2 text-sm text-[rgb(var(--text))] leading-relaxed mt-2">
            <div>
                <span className="font-medium">Phối hợp xử lý:</span> luồng chuyển tiền ngoại tệ giữa các phân hệ ngân
                hàng.
            </div>
            <div>
                <span className="font-medium">Tối ưu giao diện:</span> cải thiện trải nghiệm bằng component reuse và
                lazy loading.
            </div>
        </div>
    ),
    imageUrl: 'public/project/MB_biz.png', // URL của hình ảnh mô tả công việc
};
const timelineData = [
    {
        title: 'Học đại học',
        subtitle: 'Trường CNTT Hà Nội',
        description: 'Chuyên ngành CNTT',
        date: '2015 - 2019',
        type: 'education',
        icon: <FaGraduationCap/>,
        bgColor: '#0ea5e9',
    },
    {
        title: 'Làm việc tại ABC',
        subtitle: 'Front-end Developer',
        description: <JobItemDescription item={mbRebootDescription}/>,
        date: '2020 - Hiện tại',
        type: 'work',
        icon: <FaBriefcase/>,
        bgColor: '#f97316',
    },
];

export default function PortfolioDetail() {
    return (
        <>
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-[rgb(var(--bg))]">
                <ProfileCard/>
                <Timeline items={timelineData}/>
            </section>

        </>

    );
}
