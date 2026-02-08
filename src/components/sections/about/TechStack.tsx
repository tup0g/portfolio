import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiVite, SiGit, SiPostgresql, SiDocker, SiHtml5 } from "react-icons/si";

function Techstack() {
  const icons = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiHtml5 />, name: "HTML5" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 pb-12 md:grid-cols-4 lg:grid-cols-6">
      {icons.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-custom-accent/20 bg-custom-card py-8 text-4xl text-custom-gray transition-all duration-300 hover:scale-110 hover:border-custom-accent hover:text-custom-accent hover:shadow-[0_0_15px_rgba(139,125,107,0.3)]"
        >
          {item.icon}
          <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;