import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { GraduationCap, MapPin, Briefcase, Languages } from "lucide-react";
import workspaceImage from "@/assets/about-workspace.jpg";

export const About = () => {
  const { t } = useTranslation();
  
  const quickFacts = [
    {
      icon: MapPin,
      label: t("about.location"),
      value: t("about.locationValue"),
    },
    {
      icon: Briefcase,
      label: t("about.currentFocus"),
      value: t("about.currentFocusValue"),
    },
    {
      icon: GraduationCap,
      label: t("about.workingStyle"),
      value: t("about.workingStyleValue"),
    },
    {
      icon: Languages,
      label: t("about.languages"),
      value: t("about.languagesValue"),
    },
  ];
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          {t("about.title")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-medium animate-fade-in">
            <img
              src={workspaceImage}
              alt={t("about.imageAlt")}
              className="w-full h-64 md:h-96 object-cover object-[0%_17%]"
            />
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>

          {/* Quick facts grid */}
          <div className="pt-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t("about.quickFacts")}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <fact.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">
                        {fact.label}
                      </p>
                      <p className="text-foreground whitespace-pre-line">{fact.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
