import React, { useState, useEffect } from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineFileText,
} from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effect to make the header smoother when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemStyle =
    'flex items-center gap-2 text-custom-cream hover:text-custom-accent transition-all duration-300 px-4 py-2 font-medium text-base group relative';

  // Underline on hover
  const underlineStyle =
    'absolute bottom-0 left-0 w-0 h-0.5 bg-custom-accent transition-all duration-300 group-hover:w-full';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-[#121212]/70 backdrop-blur-md border-b border-custom-card/60 shadow-xl shadow-custom-accent/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-6">
        {/* Logo */}
        <div className="text-custom-cream text-3xl font-bold tracking-tight hover:text-custom-accent transition-colors duration-300 cursor-pointer">
          <span className="text-custom-accent">Sk</span>.
        </div>

        {/* Menu */}
        <div className="hidden flex-1 items-center justify-center gap-4 md:flex">
          <a href="#" className={navItemStyle}>
            <AiOutlineHome className="text-xl" />
            <span>Home</span>
            <span className={underlineStyle}></span>
          </a>

          <a href="#about" className={navItemStyle}>
            <AiOutlineUser className="text-xl" />
            <span>About</span>
            <span className={underlineStyle}></span>
          </a>

          <a href="#projects" className={navItemStyle}>
            <AiOutlineFundProjectionScreen className="text-xl" />
            <span>Projects</span>
            <span className={underlineStyle}></span>
          </a>

          <a href="#resume" className={navItemStyle}>
            <AiOutlineFileText className="text-xl" />
            <span>Resume</span>
            <span className={underlineStyle}></span>
          </a>
        </div>

        {/* GitHub Button */}
        <div className="hidden md:flex">
          <a
            href="https://github.com/tup0g"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-custom-card/80 border border-custom-accent/30 text-custom-cream hover:bg-custom-accent hover:text-custom-bg hover:border-custom-accent hover:shadow-lg hover:shadow-custom-accent/20 flex items-center gap-2.5 rounded-lg px-5 py-2.5 font-semibold transition-all duration-300 backdrop-blur-sm"
          >
            <CgGitFork className="text-lg" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
