const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-lg font-bold font-mono text-gradient">
            &lt;Dev /&gt;
          </a>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} JAI ALWIN M. Built with React & Tailwind CSS.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
