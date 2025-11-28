import { Card } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";

// TODO: Replace with real articles once published
const articles = [
  {
    title: "Bachelors Thesis: Improving the General Artemis User Experience",
    summary:
      "Scientific analysis, design & implementation of UX best practices to enhance the usability of TUM's learning platform Artemis, based on user research and Norman & Nielsen's studies.",
    date: "15. March 2024",
  },
  {
    title: "Building a gatsbyjs CD pipeline with Github Actions & Digital Ocean",
    summary:
      "Following Netlify's acquisition of Gatsby Cloud in February 2023, resulting in the discontinuation of Gatsby Cloud's services, we were forced to find an alternative solution to host one of our customer’s website. Read the following text to dive deeper into our journey toward our CD pipeline utilizing GitHub Actions, Digital Ocean Spaces, and self-hosted GitHub Runners.",
    date: "28. November 2023",
    link: "https://www.satellytes.com/blog/post/gatsbyjs-cd-pipeline-github-actions-digital-ocean/"
  }
];

export const Writing = () => {
  return (
    <section id="writing" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Writing & thoughts
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          {articles.map((article, index) => (
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
