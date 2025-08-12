import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              With 2 years of hands-on experience in web development, I specialize
              in building responsive, accessible, and high-performance web
              applications using modern front-end technologies.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy solving complex front-end challenges with clean, scalable
              code, while continuously learning to stay current in today’s
              fast-moving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center">
              <a
                href="#contact"
                className="cosmic-button bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Get In Touch
              </a>

              <a
                href="WebAfsanaKeya_CV.pdf"
                download="WebAfsanaKeya_CV.pdf"
                className="px-8 py-4 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center text-lg font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                icon: <Code className="h-7 w-7 text-primary" />,
                title: "Web Development",
                desc: "Creating responsive websites and web applications with modern frameworks.",
              },
              {
                icon: <User className="h-7 w-7 text-primary" />,
                title: "UI/UX Design",
                desc: "Designing intuitive user interfaces and seamless user experiences.",
              },
              {
                icon: <Briefcase className="h-7 w-7 text-primary" />,
                title: "Project Management",
                desc: "Leading projects from conception to completion with agile methodologies.",
              },
            ].map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="gradient-border p-6 rounded-xl bg-gray-800 bg-opacity-40 shadow-lg hover:shadow-primary transition-shadow duration-300 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-full bg-primary/20 flex items-center justify-center">
                    {icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl">{title}</h4>
                    <p className="text-gray-300 mt-1">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
