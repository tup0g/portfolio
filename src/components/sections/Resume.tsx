import React from 'react';

export const Resume: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 fade-in-soft">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <h1 className="text-custom-cream text-5xl font-extrabold mb-8">
          My <span className="text-custom-accent">Resume</span>
        </h1>
        <p className="text-custom-gray text-lg leading-relaxed">
          Resume page content coming soon...
        </p>
      </div>
    </section>
  );
};
