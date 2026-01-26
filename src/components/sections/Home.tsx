import React from 'react';
import Type from '../Type';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const Home: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16 fade-in-soft">
      {/* Background gradient blobs for depth */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-custom-accent/25 via-custom-accent/10 to-transparent blur-[120px] opacity-90"></div>
      <div className="pointer-events-none absolute bottom-1/5 right-1/4 z-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tl from-custom-accent/18 via-custom-accent/8 to-transparent blur-[110px] opacity-80"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Greeting with animated hand */}
        <div className="mb-8 flex items-center justify-center gap-3 fade-up-soft">
          <h2 className="text-custom-cream text-xl font-normal tracking-wide md:text-4xl">Hi There</h2>
          <span className="wave text-2xl md:text-3xl" role="img" aria-label="wave">
            👋🏻
          </span>
        </div>

        {/* Main heading - Massive and Bold */}
        <h1 className="text-custom-cream mb-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl fade-up-delay-1">
          I'm <span className="text-custom-accent bg-gradient-to-r from-custom-accent to-custom-cream bg-clip-text text-transparent">Mykhailo Skrypkovskyi</span>
        </h1>

        {/* Typewriter effect - Prominent with monospace */}
        <div className="mb-16 flex justify-center fade-up-delay-2">
          <div className="font-mono text-2xl font-semibold text-custom-accent md:text-3xl lg:text-4xl">
            <Type />
          </div>
        </div>

        {/* Description Section */}
        <div className="mx-auto mb-16 max-w-3xl space-y-8">
          <h2 className="text-custom-cream text-2xl font-bold tracking-wide md:text-3xl">
            LET ME <span className="text-custom-accent">INTRODUCE</span> MYSELF
          </h2>
          
          <p className="text-custom-gray text-lg leading-relaxed md:text-xl md:leading-relaxed">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products at <span className="text-custom-cream font-semibold">Menteerio</span>.
          </p>
          
          <p className="text-custom-gray text-lg leading-relaxed md:text-xl md:leading-relaxed">
            I'm a beginner in{' '}
            <span className="text-custom-accent font-semibold">JavaScript</span>,{' '}
            <span className="text-custom-accent font-semibold">TypeScript</span>,{' '}
            <span className="text-custom-accent font-semibold">React</span>, and{' '}
            <span className="text-custom-accent font-semibold">React Native</span>
            {' '}— and I enjoy learning to work across both backend and frontend stacks.
          </p>
          
          <p className="text-custom-gray text-lg leading-relaxed md:text-xl md:leading-relaxed">
            My key areas of interest include developing{' '}
            <span className="text-custom-accent font-semibold">Web Applications</span>,{' '}
            <span className="text-custom-accent font-semibold">Mobile Apps</span>, 
            and exploring new modern technologies and frameworks.
          </p>
        </div>

        {/* CTA Buttons - Modern with glow effects */}
        <div className="flex flex-col justify-center gap-5 sm:flex-row">
          <a
            href="#projects"
            className="group relative overflow-hidden border-2 border-custom-accent text-custom-accent hover:text-custom-bg flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-custom-accent/30"
          >
            <span className="absolute inset-0 bg-custom-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <AiFillGithub className="relative z-10 text-2xl" /> 
            <span className="relative z-10">Check my work</span>
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden bg-custom-accent text-custom-bg hover:text-custom-bg flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-custom-cream/20"
          >
            <span className="absolute inset-0 bg-custom-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <MdEmail className="relative z-10 text-2xl" /> 
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};
