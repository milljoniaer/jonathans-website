import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { BookOpen, Calendar } from "lucide-react";

export const Writing = () => {
  const { t } = useTranslation();
  const articles = t("writing.articles", { returnObjects: true }) as Array<{
    title: string;
    summary: string;
    date: string;
    link?: string;
  }>;
  
  const articlesWithLinks = [
    { ...articles[0] },
    { ...articles[1], link: "https://www.satellytes.com/blog/post/gatsbyjs-cd-pipeline-github-actions-digital-ocean/" }
  ];

  return (
    <section id="writing" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          {t("writing.title")}
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          {articlesWithLinks.map((article, index) => (
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold flex items-start gap-2">
                      <BookOpen className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <span>{article.title}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {article.summary}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
