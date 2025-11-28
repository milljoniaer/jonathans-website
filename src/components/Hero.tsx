import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitPlaceholder from "@/assets/portrait-placeholder.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 section-padding"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Jonathan Ostertag
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Software Engineer & Information Systems M.Sc. Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm a people-oriented nerd who loves building elegant, pragmatic software 
              solutions. Currently studying Information Systems at TUM in Munich, 
              I work at the intersection of modern web engineering, data analytics, 
              and IT governance—always with a focus on collaboration and real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-hero text-primary-foreground hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Experience
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-full blur-3xl opacity-20"></div>
              <img
                src={portraitPlaceholder}
                alt="Jonathan Ostertag - Replace with real photo"
                className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-medium"
              />
              {/* TODO: Replace with real photo of Jonathan */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
