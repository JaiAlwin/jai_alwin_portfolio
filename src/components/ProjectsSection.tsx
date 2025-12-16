import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Digital Election Management System",
    description:
      "Full-stack development of a secure, two-tier (Admin/Public) election platform. Implemented robust authentication and auditable vote logging for enhanced election integrity and management..",
    tech: ["React", "Node.js", "MySQL", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "News Bias Indicator",
    description:
      "An AI-powered application designed to analyze news articles and detect ideological leaning. It utilizes Machine Learning algorithms to classify text bias and presents detailed supporting indicators through an interactive dashboard.",
    tech: ["React", "Python", "Flask", "Machine Learning"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "An analytics dashboard for tracking portfolio performance with interactive charts and data visualization.",
    tech: ["React", "JavaScript", "CSS", "Node.js"],
    github: "https://github.com/JaiAlwin/full-stack-portfolio",
    live: "#",
  },
  {
    title: "Insatnt News Web App",
    description:
      "Instant News is a React-based web app that delivers real-time international news via the News API. It categorizes news into Entertainment, Sports, Business, and Health for quick access",
    tech: ["React", "JavaScript", "CSS", "News API"],
    github: "https://github.com/JaiAlwin/React_Instand_News__NEWS-API",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gradient-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(180_70%_50%/0.15)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Folder className="text-primary" size={24} />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="p-6 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12" >
            <a href="https://github.com/JaiAlwin" target="_blank"><Button variant="outline" size="lg" >
              <Github className="mr-2" size={18} />
              View More on GitHub
            </Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
