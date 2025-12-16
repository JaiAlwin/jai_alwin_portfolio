const skills = [
  {
    name: "HTML5",
    icon: "🌐",
    color: "hsl(16, 100%, 50%)",
  },
  {
    name: "CSS3",
    icon: "🎨",
    color: "hsl(210, 100%, 50%)",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "hsl(50, 100%, 50%)",
  },
  {
    name: "React",
    icon: "⚛️",
    color: "hsl(190, 95%, 60%)",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "hsl(120, 55%, 45%)",
  },
  {
    name: "Express.js",
    icon: "🚀",
    color: "hsl(0, 0%, 60%)",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    color: "hsl(200, 100%, 45%)",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies I <span className="text-gradient">Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My toolkit for building modern, full-stack web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: `${skill.color}20` }}
                />
                
                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{skill.icon}</span>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-secondary/50 border border-border rounded-full px-6 py-3">
              <span className="text-muted-foreground">Also familiar with:</span>
              <span className="text-foreground font-medium">
                Git • REST APIs • TypeScript • Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
