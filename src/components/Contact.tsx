import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Mail,
      label: t("contact.email"),
      href: "mailto:jonathan@ostertage.de",
      color: "text-accent",
    },
    {
      icon: Github,
      label: t("contact.github"),
      href: "https://github.com/milljoniaer",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      href: "https://www.linkedin.com/in/jonathanostertag/",
      color: "text-[#0A66C2]",
    },
    {
      icon: FileText,
      label: t("contact.downloadCV"),
      href: `/2025-JonathanOstertag-CV-en.pdf`,
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 animate-scale-in" style={{ animationDelay: "100ms" }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="block min-w-0"
              >
                <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-accent/10 ${link.color}`}>
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium">{link.label}</p>
                      <p className="text-sm text-muted-foreground break-all">
                        {link.href}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
