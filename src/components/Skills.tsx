import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Code2, Server, Database, Workflow } from "lucide-react";
import skillsIllustration from "@/assets/skills-illustration.jpg";

export const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      icon: Workflow,
      title: t("skills.waysOfWorking.title"),
      description: t("skills.waysOfWorking.description"),
      skills: t("skills.waysOfWorking.skills", { returnObjects: true }) as string[],
    },
    {
      icon: Database,
      title: t("skills.dataDevOps.title"),
      description: t("skills.dataDevOps.description"),
      skills: t("skills.dataDevOps.skills", { returnObjects: true }) as string[],
    },
    {
      icon: Code2,
      title: t("skills.frontend.title"),
      description: t("skills.frontend.description"),
      skills: t("skills.frontend.skills", { returnObjects: true }) as string[],
    },
    {
      icon: Server,
      title: t("skills.backend.title"),
      description: t("skills.backend.description"),
      skills: t("skills.backend.skills", { returnObjects: true }) as string[],
    },
  ];
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
          {t("skills.title")}
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
