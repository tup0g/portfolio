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
        imgPath: "/assets/project1.png",
        title: "Project Title 1",
        description:
            "Description of your first project. Explain what technologies were used, the problem it solves, and key features implemented.",
        ghLink: "https://github.com/yourusername/project1",
        isBlog: false,
        demoLink: "https://project1-demo.com",
    },
    {
        id: 2,
        imgPath: "/assets/project2.png",
        title: "Project Title 2",
        description:
            "Description of your second project. Share the technical stack, challenges overcome, and the impact of this project.",
        ghLink: "https://github.com/yourusername/project2",
        isBlog: false,
        demoLink: "https://project2-demo.com",
    },
    {
        id: 3,
        imgPath: "/assets/project3.png",
        title: "Technical Blog Article",
        description:
            "Write about a technical topic you're passionate about. Share your learnings, best practices, and insights from your projects.",
        ghLink: "https://yourblog.com/article",
        isBlog: true,
    },
    {
        id: 4,
        imgPath: "/assets/project4.png",
        title: "Project Title 4",
        description:
            "Another exciting project showcasing your skills. Describe the project goals, your role, and the outcomes achieved.",
        ghLink: "https://github.com/yourusername/project4",
        isBlog: false,
        demoLink: "https://project4-demo.com",
    },
];
