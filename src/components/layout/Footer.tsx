import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-custom-bg/90 backdrop-blur-md border-t border-custom-card/50 text-custom-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {/* Designer/Developer credit */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-custom-gray">
              Designed and developed by
            </p>
            <p className="text-lg font-semibold">Mykhailo Skrypkovskyi</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm md:text-base text-custom-gray">Copyright © {year}</p>
            <p className="text-lg font-semibold">MS Portfolio</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end">
            <ul className="flex list-none gap-4">
              <li>
                <a
                  href="https://github.com/tup0g"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-custom-accent/30 text-custom-cream transition-all duration-300 hover:border-custom-accent hover:text-custom-accent hover:shadow-custom-accent/20 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/михайло-скрипковський-2188b83a5/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-custom-accent/30 text-custom-cream transition-all duration-300 hover:border-custom-accent hover:text-custom-accent hover:shadow-custom-accent/20 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;