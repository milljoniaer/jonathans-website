import { ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import portraitPlaceholder from "@/assets/portrait-1.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 section-padding relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover opacity-20 dark:opacity-10 dark:[filter:none] [filter:invert(1)_hue-rotate(180deg)]"
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                {t("hero.name")}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t("hero.title")}
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-hero text-primary-foreground hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.viewExperience")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("hero.getInTouch")}
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-full blur-3xl opacity-20"></div>
              <img
                src={portraitPlaceholder}
                alt={t("hero.name")}
                className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover object-[50%_20%] shadow-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
