import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Briefcase, Languages } from "lucide-react";

const quickFacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Munich, Germany", // TODO: verify location
  },
  {
    icon: Briefcase,
    label: "Current Focus",
    value: "AI-based information systems & frontend architecture",
  },
  {
    icon: GraduationCap,
    label: "Working Style",
    value: "Structured, communicative, pragmatic",
  },
  {
    icon: Languages,
    label: "Languages",
    value: "German (native), English (C1)",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          About me
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio paragraphs */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              I'm currently pursuing my Master's in Information Systems at the Technical 
              University of Munich (TUM), building on my bachelor's degree from the same 
              institution. From an early age, I've been fascinated by technology and how 
              it can solve real problems—not just technical ones, but challenges that 
              impact people's daily lives.
            </p>

            <p>
              My work sits at the intersection of strong technical skills and a deep 
              interest in user experience, IT governance, and collaboration. I describe 
              myself as a "people-oriented nerd" because I believe the best software 
              is built with and for humans, not just machines. Whether I'm leading a 
              small frontend team or working with clients on IT audit processes, I value 
              clear communication and effective teamwork.
            </p>

            <p>
              Right now, I'm particularly excited about AI-assisted developer tools, 
              data-driven decision-making, and clean frontend architecture. I love 
              exploring how emerging technologies can make development more efficient 
              while maintaining code quality and user-centered design.
              {/* TODO: verify or adjust current interests */}
            </p>
          </div>

          {/* Quick facts grid */}
          <div className="pt-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Quick facts</h3>
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
                      <p className="text-foreground">{fact.value}</p>
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
