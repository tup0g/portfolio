import React from "react";
import AboutCard from "./about/AboutCard";
import TechStack from "./about/TechStack";
import ToolStack from "./about/ToolStack";
import GitHub from "./about/GitHub";
import laptopImg from "../../assets/laptopImg.png";


export const About: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-custom-bg py-24 px-6 fade-in-soft" id="about">
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-125 w-125 rounded-full bg-custom-accent/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-125 w-125 rounded-full bg-custom-accent/5 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Intro Section */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <h1 className="mb-8 text-center text-4xl font-extrabold text-custom-cream lg:text-left md:text-5xl">
              Know Who <span className="text-custom-accent">I'M</span>
            </h1>
            <AboutCard />
          </div>

          {/* Image Column */}
          <div className="order-1 flex justify-center lg:order-2">
            <img 
              src={laptopImg} 
              alt="about" 
              className="max-w-[80%] md:max-w-100 lg:max-w-full drop-shadow-[0_0_20px_rgba(139,125,107,0.3)] animate-float"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <h1 className="mb-12 text-center text-4xl font-extrabold text-custom-cream">
          Professional <span className="text-custom-accent">Skillset</span>
        </h1>
        <TechStack />

        {/* Tools */}
        <h1 className="mb-12 text-center text-4xl font-extrabold text-custom-cream">
          <span className="text-custom-accent">Tools</span> I use
        </h1>
        <ToolStack />

        {/* Github Calendar */}
        <GitHub />
        
      </div>
    </section>
  );
};