import type {ReactNode} from "react";

export interface TimelineItem {
    title: string;
    subtitle?: string;
    description: string | ReactNode;
    date: string;
    type?: 'work' | 'education' | 'custom';
    icon?: ReactNode;
    iconColor?: string;
    bgColor?: string;
}

export interface JobDescription {
    teamSize?: number;
    tools?: string[]; // VSCode, Git, Jira...
    technologies?: string[]; // Angular, Spring Boot...
    shortDescription?: string;
    exp?: ReactNode; // JSX mô tả chi tiết (nếu cần)
    imageUrl?: string; // URL của hình ảnh mô tả công việc
}

interface TimelineItem {
  date: string;
  content: string;
}

export interface SectionBlockProps {
  title: string;
  items: TimelineItem[];
}
