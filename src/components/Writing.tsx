import { Card } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";

// TODO: Replace with real articles once published
const articles = [
  {
    title: "From Frontend to Foundations: Why I Care About Testing and DevOps",
    summary:
      "Exploring how investing in testing infrastructure and CI/CD pipelines pays dividends in code quality, developer experience, and long-term maintainability.",
    date: "Draft",
    placeholder: true,
  },
  {
    title: "People-Oriented Engineering: Building Software with and for Humans",
    summary:
      "Reflections on balancing technical excellence with empathy, communication, and user-centered design—why the best engineers think about people, not just code.",
    date: "Draft",
    placeholder: true,
  },
  {
    title: "The Power of Pragmatism in Software Development",
    summary:
      "How choosing 'good enough' over 'perfect' can accelerate delivery without sacrificing quality—lessons from real-world projects and collaborative teams.",
    date: "Draft",
    placeholder: true,
  },
];

export const Writing = () => {
  return (
    <section id="writing" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Writing & thoughts
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article, index) => (
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

                {article.placeholder && (
                  <p className="text-xs text-muted-foreground italic pl-8">
                    Article placeholder – content to be added
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
