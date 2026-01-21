import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImg0 from "@/assets/job-aggregator.png";
import projectImg1 from "@/assets/personal-website.png";
import projectImg2 from "@/assets/rate-it.svg";
import projectImg3 from "@/assets/artemis.png";

interface Project {
  title: string; // see translation files
  description: string[]; // see translation files
  technologies: string[]; // see translation files

  image: string;
  github: string;
  demo?: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const projectItems = t("projects.items", { returnObjects: true }) as Array<{
    title: string;
    description: string[];
    technologies: string[];
  }>;
  
  const projects: Project[] = [
    {
      ...projectItems[0],
      image: projectImg3,
      github: "https://github.com/ls1intum/Artemis",
      demo: "https://artemis.tum.de"
    },
    {
      ...projectItems[1],
      image: projectImg2,
      github: "https://github.com/JustRateIt"
    },
    {
      ...projectItems[2],
      image: projectImg1,
      github: "https://github.com/milljoniaer/jonathans-website",
      demo: "https://jonathan.ostertage.de"
    },
    {
      ...projectItems[3], // TODO
      image: projectImg0,
      github: "https://github.com/milljoniaer/job-search-aggregator",
      demo: "https://milljoniaer.github.io/job-search-aggregator/"
    }
  ];
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center justify-between">
                      {project.title}
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
                  {project.github && <a href={project.github} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      <Github className="h-4 w-4 mr-1" />
                      {t("projects.code")}
                    </Button>
                  </a>}
                  {project.demo && <a href={project.demo} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full"  disabled>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t("projects.demo")}
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
