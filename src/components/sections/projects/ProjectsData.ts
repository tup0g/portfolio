import menteerioImg from "../../../assets/menteerioInterface.jpg";
import campusActivityHub from "../../../assets/campusActivityHub.png";
interface Project {
    id: number;
    imgPath: string;
    title: string;
    description: string;
    ghLink: string;
    isBlog: boolean;
    demoLink?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        imgPath: menteerioImg,
        title: "Frontend for Menteerio AI App",
        description:
            "Frontend application for an AI-powered mentorship platform. Features include intelligent mentor matching, real-time communication, and an accessible user interface built with React and TypeScript.",
        ghLink: "https://github.com/tup0g/menteerio-ai-app-front.git",
        isBlog: false,
        
    },
    {
        id: 2,
        imgPath: campusActivityHub,
        title: "Campus Activity Hub",
        description:
            "Campus Activity Hub is a comprehensive web application designed to streamline the management and discovery of campus activities and events. Built with modern technologies, this platform serves as a central hub for students, faculty, and administrators to discover, create, manage, and register for various campus events.",
        ghLink: "https://github.com/tup0g/campus-activity-hub.git",
        isBlog: false,
    },
];
