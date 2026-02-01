import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  isBlog: boolean;
  demoLink?: string;
}

function ProjectCards(props: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-custom-card border border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-custom-accent/50 hover:shadow-custom-accent/20">
      
      {/* Container for Image with overflow hidden */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={props.imgPath}
          alt="card-img"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-custom-cream group-hover:text-custom-accent transition-colors">
          {props.title}
        </h3>
        
        <p className="mb-6 flex-1 text-justify text-sm leading-relaxed text-custom-gray">
          {props.description}
        </p>

        {/* Buttons Area */}
        <div className="mt-auto flex gap-4">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-custom-accent px-4 py-2 text-sm font-semibold text-custom-bg transition-all hover:bg-custom-cream hover:text-custom-bg"
          >
            <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-custom-accent px-4 py-2 text-sm font-semibold text-custom-accent transition-all hover:bg-custom-accent hover:text-custom-bg"
            >
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;