import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <div className="text-custom-accent mb-8 h-20 font-mono text-4xl font-bold md:text-6xl">
      <Typewriter
        options={{
          strings: [
            'FrontEnd Developer',
            'Tea Lover',
            'React Native Beginner',
            'VibeCoding',
            'Student',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Type;
