import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>

          {/* Contact Info */}
          <div className="space-y-6 mb-10">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div className="text-left">
                <p className="text-muted-foreground text-sm">Email</p>
                <a
                  href="mailto:jaialwin17@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  jaialwin17@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div className="text-left">
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="text-foreground">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/JaiAlwin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jai-alwin-1a6709279/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;