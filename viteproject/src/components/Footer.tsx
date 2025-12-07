import { Heart, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-tertiary border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold gradient-text">&lt;Kenneth /&gt;</h3>
            <p className="text-muted-foreground mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/KennethAtchon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:kenneth.atchon@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-end items-center text-sm text-muted-foreground">
          <p className="mt-2 md:mt-0">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;