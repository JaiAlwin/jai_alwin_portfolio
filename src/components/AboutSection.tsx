import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that scales.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient development process with modern tools and practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great communicator who thrives in team environments.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a Full Stack Web Developer with a passion for building 
                modern web applications. With expertise in both frontend and 
                backend technologies, I create seamless, end-to-end solutions 
                that deliver real value.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                My journey in web development started with a curiosity about how 
                things work on the internet. Today, I specialize in the MERN stack 
                and love working with React, Node.js, and MySQL to build scalable 
                applications.
              </p>

              {/* Code Block Style Info */}
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">developer</span> = {"{"}
                  <br />
                  <span className="ml-4">location:</span>{" "}
                  <span className="text-green-400">"TAMIL NADU"</span>,
                  <br />
                  <span className="ml-4">experience:</span>{" "}
                  <span className="text-accent">"1+ years"</span>,
                  <br />
                  <span className="ml-4">passion:</span>{" "}
                  <span className="text-green-400">"Building things"</span>
                  <br />
                  {"}"};
                </code>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
