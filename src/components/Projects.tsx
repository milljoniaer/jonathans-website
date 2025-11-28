import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImg1 from "@/assets/personal-website.png";
import projectImg2 from "@/assets/rate-it.svg";
import projectImg3 from "@/assets/artemis.png";

// TODO: Update project descriptions with real data
const projects = [
  {
    title: "Artemis UX Improvements",
    image: projectImg3,
    description: [
      "Bachelor's thesis focused on enhancing user experience of TUM's learning platform",
      "Conducted user research and usability testing with students and instructors",
      "Implemented interface improvements that increased task completion rates",
    ],
    technologies: ["UX Research", "Usability Testing", "Angular", "TypeScript"],
    github: "https://github.com/ls1intum/Artemis",
    demo: "https://artemis.tum.de"
  },
  {
    title: "RateIt – AI-powered outfit rating",
    image: projectImg2,
    description: [
      "Social platform for fashion enthusiasts to rate and discover outfit combinations",
      "Integrated AI-based image analysis for style recommendations",
      "Built web application with microservices architecture, browser add-on and mobile app",
    ],
    technologies: ["React", "Next.js", "AI/ML", "PostgreSQL"],
    github: "https://github.com/JustRateIt"},
  {
    title: "This Website",
    image: projectImg1,
    description: [
      "Experimental AI-generated project based on CV input (see lovable's website)",
      "I can only recommend trying it out yourself to see the results! 😄",
      "Explores the capabilities of AI in web development and replacing web devs...",
    ],
    technologies: ["Lovable", "React", "Vite", "Tailwind & Shadcn"],
    github: "https://github.com/milljoniaer/jonathans-website",
    demo: "https://jonathan.ostertage.de"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Selected projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of personal recent projects (besides professional projects).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-0 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in flex flex-col overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="w-full h-48 overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-accent/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Placeholder for links - TODO: Add real links */}
                <div className="flex gap-2 mt-6 pt-4 border-t">
                  {project.github && <a href={project.github} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </a>}
                  {project.demo && <a href={project.demo} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full"  disabled>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </a>
                  }
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
