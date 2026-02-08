import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="h-full w-full rounded-2xl bg-custom-card/50 border border-gray-800 p-8 shadow-xl backdrop-blur-sm transition-all hover:border-custom-accent/30">
      <blockquote className="relative text-lg text-custom-gray">
        <p className="mb-6 text-justify leading-relaxed">
          Hi Everyone, I am <span className="font-bold text-custom-accent">Mykhailo Skrypkovskyi</span>
          <br /> from <span className="font-bold text-custom-cream">Kyiv, Ukraine.</span>
          <br /><br />
          I am currently working as a Software Engineer at Menteerio.
          <br />
          I enjoy building user-centric applications and exploring new web technologies.
          <br /><br />
          Apart from coding, some other activities that I love to do!
        </p>

        <ul className="mb-6 space-y-3 pl-4">
          <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
            <ImPointRight className="text-custom-accent" /> Watching Anime
          </li>
          <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
            <ImPointRight className="text-custom-accent" /> Playing Games
          </li>
          <li className="flex items-center gap-3 transition-transform hover:translate-x-2">
            <ImPointRight className="text-custom-accent" /> Traveling
          </li>
        </ul>

        <p className="mt-8 italic text-custom-accent/80">
          "luck must be earned"
        </p>
        <footer className="mt-2 text-sm text-gray-500">— My friend's trainer</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;