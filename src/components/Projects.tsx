import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: Update project descriptions with real data
const projects = [
  {
    title: "Artemis UX Improvements",
    description: [
      "Bachelor's thesis focused on enhancing user experience of TUM's learning platform",
      "Conducted user research and usability testing with students and instructors",
      "Implemented interface improvements that increased task completion rates",
    ],
    technologies: ["UX Research", "Usability Testing", "Angular", "TypeScript"],
    placeholder: false, // This one is real based on CV
  },
  {
    title: "RateIt – AI-powered outfit rating",
    description: [
      "Social platform for fashion enthusiasts to rate and discover outfit combinations",
      "Integrated AI-based image analysis for style recommendations",
      "Built responsive web application with real-time updates",
    ],
    technologies: ["React", "Next.js", "AI/ML", "PostgreSQL"],
    placeholder: true, // TODO: confirm project details
  },
  {
    title: "MediaMind – News analysis microservices",
    description: [
      "Experimental microservices architecture for news aggregation and sentiment analysis",
      "Implemented Docker-based deployment with automated testing pipeline",
      "Explored scalability patterns and API design best practices",
    ],
    technologies: ["Python", "FastAPI", "Docker", "Microservices"],
    placeholder: true, // TODO: confirm project details
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
            Note: Some project descriptions are placeholders and can be updated with actual details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold flex items-center justify-between">
                    {project.title}
                    {project.placeholder && (
                      <Badge variant="secondary" className="text-xs">
                        Draft
                      </Badge>
                    )}
                  </h3>
                </div>

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
                <Button variant="outline" size="sm" className="flex-1" disabled>
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1" disabled>
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
