import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Briefcase, Languages } from "lucide-react";
import workspaceImage from "@/assets/about-workspace.jpg";

const quickFacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Munich, Germany \n (heart in munich, open for worldwide travel)",
  },
  {
    icon: Briefcase,
    label: "Current Focus",
    value: "Business Information Systems & Integrated Web Applications",
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
          {/* Hero image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-medium animate-fade-in">
            <img
              src={workspaceImage}
              alt="Collaborative workspace with team members working together on laptops"
              className="w-full h-64 md:h-96 object-cover object-[0%_17%]"
            />
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              Hi! I'm Jonathan. I was born and raised in Munich.
              I had the (most of the time) privilege of growing up with an older sister and two younger brothers.
              Besides technical interests, I am passionate about playing music (drums, keyboard, guitar & bass), sports, and spending time outdoors.
              I perceive myself as a humorful person, although my friends would probably disagree sometimes 😅.
            </p>

            <p>
              I'm currently pursuing my Master's in Information Systems at the Technical 
              University of Munich (TUM), building on my bachelor's degree from the same 
              institution. From an early age, I've been fascinated by technology and how 
              it can solve real problems—not just technical ones, but challenges that 
              impact people's daily lives.
              My work sits at the intersection of strong technical skills and a deep 
              interest in user experience, IT governance, and collaboration. I describe 
              myself as a "people-oriented nerd" because I believe the best software 
              is built with and for humans, not just machines. 
            </p>

            <p>
              Right now, I'm particularly excited about AI-assisted developer tools, 
              data-driven decision-making, and IT architecture. I love 
              exploring how emerging technologies can make industry more efficient 
              while maintaining quality and user-centered design.
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
