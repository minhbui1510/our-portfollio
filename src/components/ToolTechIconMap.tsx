import { FaWrench, FaLaptopCode } from 'react-icons/fa';
import {
  SiGit,
  SiJirasoftware,
  SiAngular,
  SiSpring,
  SiOracle
} from 'react-icons/si';
import type {JSX} from "react";

export const toolTechIconMap: Record<string, JSX.Element> = {
  // VSCode: <SiVisualstudiocode className="text-[rgb(var(--text))]" />,
  Git: <SiGit className="text-[rgb(var(--text))]" />,
  Jira: <SiJirasoftware className="text-[rgb(var(--text))]" />,
  Angular: <SiAngular className="text-[rgb(var(--text))]" />,
  'Angular 16': <SiAngular className="text-[rgb(var(--text))]" />,
  'Spring Boot': <SiSpring className="text-[rgb(var(--text))]" />,
  Oracle: <SiOracle className="text-[rgb(var(--text))]" />,
};

export const getToolIcon = (name: string) => toolTechIconMap[name] || <FaWrench className="text-[rgb(var(--text))]" />;
export const getTechIcon = (name: string) => toolTechIconMap[name] || <FaLaptopCode className="text-[rgb(var(--text))]" />;

