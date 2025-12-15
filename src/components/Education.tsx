import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const { t } = useTranslation();
  const education = t("education.degrees", { returnObjects: true }) as Array<{
    degree: string;
    institution: string;
    period: string;
    description: string;
  }>;
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          {t("education.title")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Scholarship highlight */}
          <Card className="p-6 md:p-8 gradient-accent text-white animate-scale-in">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {t("education.scholarship.title")}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {t("education.scholarship.description")}
                </p>
              </div>
            </div>
          </Card>

          {/* Education timeline */}
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground pl-9">{edu.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
