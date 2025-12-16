import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import resumePDF from "../assets/RESUME.pdf"; 

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Available for work
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">JAI ALWIN M</span>
          </h1>

          <div
            className="flex items-center justify-center gap-2 mb-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {"<"}
            </span>
            <span className="font-mono text-xl md:text-2xl text-primary">
              Full Stack Web Developer
            </span>
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {"/>"}
            </span>
          </div>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            I build modern, scalable web applications with clean code and intuitive user experiences. 
            Passionate about turning complex problems into elegant solutions.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <a href={resumePDF} download="Resume.pdf">
                <Download size={20} />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://github.com/JaiAlwin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jai-alwin-1a6709279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jaialwin17@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
