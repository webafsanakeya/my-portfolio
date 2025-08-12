import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="font-extrabold tracking-tight text-white text-5xl sm:text-6xl md:text-7xl leading-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I am</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Afsana
            </span>
            <span className="block text-gradient ml-0 sm:ml-2 opacity-0 animate-fade-in-delay-2">
              Keya
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-in-delay-3">
            I craft sleek, high-performance web interfaces using modern front-end
            technologies. My focus: clean design, intuitive UX, and reliable code.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2 tracking-wide uppercase">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
