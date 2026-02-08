import React from "react";
import ProjectCards from "./projects/ProjectCards"; 
import { projectsData } from "./projects/ProjectsData"; 

export const Projects: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-custom-bg py-24 px-6" id="projects">
      
      {/* Background gradient blobs (для краси і глибини) */}
      <div className="pointer-events-none absolute top-20 right-0 z-0 h-100 w-100 rounded-full bg-custom-accent/10 blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-20 left-0 z-0 h-100 w-100 rounded-full bg-custom-accent/5 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-custom-cream md:text-5xl">
            My Recent <span className="text-custom-accent">Works</span>
          </h1>
          <p className="mt-4 text-custom-gray text-lg">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* Grid Layout замість Row/Col */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full" style={{ flex: '0 0 calc(33.333% - 1.5rem)', minWidth: '280px', maxWidth: '350px' }}>
              <ProjectCards
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                isBlog={project.isBlog}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};