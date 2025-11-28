import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:jonathan@ostertag.de", // TODO: verify email
    color: "text-accent",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/", // TODO: add real GitHub URL
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/", // TODO: add real LinkedIn URL
    color: "text-[#0A66C2]",
  },
  {
    icon: FileText,
    label: "Download CV",
    href: "#", // TODO: add CV download link
    color: "text-accent",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement actual form submission logic
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact form */}
            <Card className="p-6 md:p-8 animate-slide-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-hero text-primary-foreground hover:opacity-90"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Social links */}
            <div className="space-y-4 animate-scale-in" style={{ animationDelay: "100ms" }}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-accent/10 ${link.color}`}>
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">{link.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {link.href === "#" ? "Link to be added" : link.href}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
