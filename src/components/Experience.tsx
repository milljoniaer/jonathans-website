import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Team Lead (Student)",
    company: "TUM @ CSEE GmbH / EUTOP",
    period: "2025",
    description: [
      "Leading small frontend team for AI-based internal business information system",
      "Managing customer interactions and technical architecture decisions",
      "Coordinating development workflows and code quality standards",
    ],
    technologies: ["React", "TypeScript", "AI Integration", "Team Leadership"],
  },
  {
    role: "Working Student",
    company: "PricewaterhouseCoopers (Technical Process Risk)",
    period: "2024–2025",
    description: [
      "Supporting IT audit teams with governance and risk assessment",
      "Creating presentations and analysis documentation in PowerPoint and Excel",
      "Communicating directly with clients on technical audit matters",
      "Contributing to IT process and control evaluations",
    ],
    technologies: ["IT Governance", "Audit Support", "Client Communication", "Excel/PowerPoint"],
  },
  {
    role: "Junior Frontend Engineer",
    company: "Satellytes (Projects @ Allianz, MediaMarktSaturn, ADAC Motorsport)",
    period: "2021–2024",
    description: [
      "Built internal tools for actuaries with complex data visualization",
      "Developed campaign websites and content management systems",
      "Maintained large-scale production websites with high traffic",
      "Improved CI/CD pipelines and worked in cross-functional agile teams",
    ],
    technologies: ["React", "Angular", "TypeScript", "CI/CD", "Agile", "CMS"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-accent/30 text-accent"
                    >
                      {tech}
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
