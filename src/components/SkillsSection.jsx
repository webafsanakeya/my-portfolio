import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-12 md:px-20 bg-gray-900 text-white relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-primary transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-xl">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-3 rounded-full origin-left transition-all duration-1500 ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-2">
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
