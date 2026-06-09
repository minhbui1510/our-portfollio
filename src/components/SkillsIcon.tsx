import {
    // Frontend
    FaReact, FaVuejs, FaAngular, FaCubes, FaBootstrap,
    // Backend
    FaNodeJs, FaPhp, FaJava, FaPython,
    // Design
    FaFigma, FaSketch,
    // Database
    FaDatabase, FaServer,
    // Fallback / General
    FaCode, FaTerminal, FaCodeBranch, FaAws,
    // Tourism
    FaUtensils, FaShip, FaMapMarkedAlt
} from 'react-icons/fa';

import {
    // Frontend Techs
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    // Backend Techs
    SiSpring,
    // Database Techs
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiOracle,
    // Tools & IDEs
    SiWebstorm,
    SiIntellijidea,
    SiPhpstorm,
    SiPycharm,
    SiRider,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiPostman,
    SiPrimeng,
    SiGit, SiGithub, SiGitlab, SiBitbucket, SiDotnet, SiExpress, SiJest, SiApachekafka, SiNestjs, SiRabbitmq, SiTypeorm
} from 'react-icons/si';
import {DiRedis, DiVisualstudio} from "react-icons/di";

export function resolveSkillIcon(name: string): any | null {
    const clean = name.toLowerCase();

    // Frontend
    if (clean.includes('angular')) return <FaAngular className="text-red-600"/>;
    if (clean.includes('vue')) return <FaVuejs className="text-emerald-500"/>;
    if (clean.includes('react')) return <FaReact className="text-sky-400"/>;
    if (clean.includes('typescript')) return <SiTypescript className="text-blue-600"/>;
    if (clean.includes('javascript')) return <SiJavascript className="text-yellow-400"/>;
    if (clean.includes('tailwind')) return <SiTailwindcss className="text-cyan-400"/>;
    if (clean.includes('micro')) return <FaCubes className="text-purple-500"/>;
    if (clean.includes('bootstrap')) return <FaBootstrap className="text-indigo-600"/>;
    if (clean.includes('html')) return <FaCode className="text-orange-600"/>;
    if (clean.includes('css')) return <FaCode className="text-blue-600"/>;
    if (clean.includes('scss')) return <FaCode className="text-pink-600"/>;
    if (clean.includes('sass')) return <FaCode className="text-pink-600"/>;

    // lib UI
    if (clean.includes('primeng')) return <SiPrimeng className="text-red-600"/>;


    // Backend
    if (clean.includes('node')) return <FaNodeJs className="text-green-600"/>;
    if (clean.includes('php')) return <FaPhp className="text-indigo-700"/>;
    if (clean.includes('java')) return <FaJava className="text-orange-600"/>;
    if (clean.includes('python')) return <FaPython className="text-yellow-500"/>;
    if (clean.includes('spring')) return <SiSpring className="text-green-600"/>;

    // Design
    if (clean.includes('figma')) return <FaFigma className="text-pink-500"/>;
    if (clean.includes('sketch')) return <FaSketch className="text-orange-300"/>;

    // Database
    if (clean.includes('mongo')) return <SiMongodb className="text-green-500"/>;
    if (clean.includes('mysql')) return <SiMysql className="text-blue-500"/>;
    if (clean.includes('postgre')) return <SiPostgresql className="text-indigo-500"/>;
    if (clean.includes('firebase')) return <SiFirebase className="text-yellow-400"/>;
    if (clean.includes('oracle')) return <SiOracle className="text-orange-500"/>;
    if (clean.includes('server')) return <FaServer className="text-gray-600"/>;
    if (clean.includes('database')) return <FaDatabase className="text-gray-400"/>;

    // Tools / IDEs
    if (clean.includes('vscode') || clean.includes('visual studio code')) return <DiVisualstudio
        className="text-blue-500"/>;
    if (clean.includes('terminal')) return <FaTerminal className="text-gray-500"/>;
    if (clean.includes('docker')) return <SiDocker className="text-blue-500"/>;
    if (clean.includes('kubernetes')) return <SiKubernetes className="text-indigo-500"/>;
    if (clean.includes('jenkins')) return <SiJenkins className="text-red-500"/>;
    if (clean.includes('aws') || clean.includes('amazon')) return <FaAws className="text-orange-500"/>;
    if (clean.includes('postman')) return <SiPostman className="text-orange-400"/>;
    if (clean.includes('sts4')) return <FaJava className="text-orange-600"/>;
    if (clean.includes('datagrid')) return <FaCubes className="text-teal-500"/>;
    if (clean.includes('webstorm')) return <SiWebstorm className="text-blue-400"/>;
    if (clean.includes('intellij')) return <SiIntellijidea className="text-purple-500"/>;
    if (clean.includes('phpstorm')) return <SiPhpstorm className="text-purple-400"/>;
    if (clean.includes('pycharm')) return <SiPycharm className="text-green-500"/>;
    if (clean.includes('rider')) return <SiRider className="text-red-500"/>;

    if (clean.includes('git')) return <SiGit className="text-orange-500"/>;
    if (clean.includes('github')) return <SiGithub className="text-gray-800"/>;
    if (clean.includes('gitlab')) return <SiGitlab className="text-orange-600"/>;
    if (clean.includes('bitbucket')) return <SiBitbucket className="text-blue-600"/>;
    if (clean.includes('svn')) return <FaCodeBranch className="text-gray-500"/>;
    if (clean.includes('c#')) return <FaCode className="text-blue-700"/>;
    if (clean.includes('.net')) return <SiDotnet className="text-purple-700"/>;
    if (clean.includes('express')) return <SiExpress className="text-gray-800"/>;
    if (clean.includes('jest')) return <SiJest className="text-red-500"/>;
    if (clean.includes('kafka')) return <SiApachekafka className="text-orange-600"/>;
    if (clean.includes('nestjs')) return <SiNestjs className="text-red-600"/>;
    if (clean.includes('rabbitmq')) return <SiRabbitmq className="text-orange-500"/>;
    if (clean.includes('redis')) return <DiRedis className="text-red-600"/>;
    if (clean.includes('typeorm')) return <SiTypeorm className="text-purple-600"/>;
    if (clean.includes('entity framework')) return <FaDatabase className="text-blue-600"/>;
    if (clean.includes('prisma')) return <FaDatabase className="text-indigo-400"/>;
    if (clean.includes('discord')) return <FaCode className="text-indigo-500"/>;
    if (clean.includes('vite')) return <FaCode className="text-purple-400"/>;
    if (clean.includes('framer')) return <FaCode className="text-pink-500"/>;
    if (clean.includes('i18n')) return <FaCode className="text-sky-400"/>;
    if (clean.includes('self') || clean.includes('tự học')) return <FaCode className="text-yellow-500"/>;

    // Tourism & F&B
    if (clean.includes('f&b') || clean.includes('restaurant')) return <FaUtensils className="text-orange-500"/>;
    if (clean.includes('cruise') || clean.includes('ship')) return <FaShip className="text-blue-500"/>;
    if (clean.includes('tourism') || clean.includes('travel')) return <FaMapMarkedAlt className="text-green-500"/>;


    return <FaCode className="text-gray-400"/>;
}