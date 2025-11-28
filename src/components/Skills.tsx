import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Workflow } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Building modern, responsive user interfaces with attention to detail",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Next.js", "UI/UX principles"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Creating robust server-side solutions and RESTful services",
    skills: ["Java", "Spring Boot", "FastAPI", "REST APIs"],
  },
  {
    icon: Database,
    title: "Data & DevOps",
    description: "Managing data pipelines and streamlining deployment workflows",
    skills: ["MySQL", "PostgreSQL", "Docker", "GitHub Actions", "NumPy", "TensorFlow"],
  },
  {
    icon: Workflow,
    title: "Ways of Working",
    description: "Applying structured methodologies to deliver value efficiently",
    skills: ["Scrum", "Kanban", "IT Governance", "Requirements Engineering", "Architecture Basics"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Skills & tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-accent">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
