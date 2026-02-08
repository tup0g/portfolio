import {GitHubCalendar} from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <h1 className="mb-8 text-3xl font-bold text-custom-cream">
        Days I <span className="text-custom-accent">Code</span>
      </h1>
      
      <div className="rounded-xl border border-custom-accent/20 bg-custom-card p-6 shadow-lg hover:border-custom-accent/50 transition-colors">
        <GitHubCalendar
          username="tup0g" // Твій нікнейм
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          fontSize={16}
          theme={{
            dark: ["#161b22", "#4a4036", "#8b7d6b", "#c5b49e", "#f5f5dc"], // Градієнт від темного до твого бежевого
          }}
        />
      </div>
    </div>
  );
}

export default Github;