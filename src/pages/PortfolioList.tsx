import {motion} from "framer-motion";
import {FaReact, FaNodeJs, FaVuejs, FaFigma, FaGithub, FaLinkedin} from "react-icons/fa";
import {JSX, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useTheme} from "../context/ThemeContext.tsx";
import {resolveSkillIcon} from "../components/SkillsIcon.tsx";

export default function PortfolioList() {
    const navigate = useNavigate();
    const {setTheme} = useTheme();
    useEffect(() => {
        setTheme('theme-light');
    }, []);
    const people = [
        {
            name: "Bùi Hải Minh",
            avatar: "https://i.pravatar.cc/150?img=1",
            skills: ["React", "Angular", "Figma"],
            github: "https://github.com/nguyenvana",
            linkedin: "https://linkedin.com/in/nguyenvana",
            id: '@haiminh'
        },
        {
            name: "Nguyễn Ngọc Duy",
            avatar: "https://i.pravatar.cc/150?img=2",
            skills: ["Vue", "Figma"],
            github: "https://github.com/tranthib",
            linkedin: "https://linkedin.com/in/tranthib",
            id: '@ngocduy'
        }
    ];
    // router detail by id



    return (
        <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {transition: {staggerChildren: 0.2}},
                hidden: {}
            }}
        >
            <> {people.map((person, index) => (
                <motion.div
                    key={index}
                    className="bg-[rgb(var(--primary)/0.2)] p-4 rounded-lg shadow-md"
                    variants={{
                        hidden: {opacity: 0, y: 30},
                        visible: {opacity: 1, y: 0}
                    }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                >
                    {/* Dòng 1: Avatar + Họ tên */}
                    <div className="flex items-center gap-3 mb-2">
                        <img
                            src={person.avatar}
                            alt={person.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <h2 className="text-lg font-semibold text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] cursor-pointer"
                            onClick={() => navigate(`/${person.id}`)} // Navigate to detail page
                        >
                            {person.name}
                        </h2>
                    </div>

                    {/* Dòng 2: Kỹ năng + icon */}
                    <div className="flex items-center gap-3 text-sm text-[rgb(var(--text))] mb-2">
                        {person.skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-1">
                                {resolveSkillIcon(skill) ?? null}
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>

                    {/* Dòng 3: Nút liên hệ */}
                    <div className="flex gap-3">
                        <a href={person.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-5 h-5 hover:text-[rgb(var(--primary))]"/>
                        </a>
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-5 h-5 hover:text-[rgb(var(--primary))]"/>
                        </a>
                    </div>
                </motion.div>
            ))}
            </>

        </motion.div>
    );
}
