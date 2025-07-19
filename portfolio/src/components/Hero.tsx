import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Kenneth Atchon</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Software Developer I at <span className="text-primary font-medium">Amazon</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Working on the authentication team for Amazon's AtoZ app, developing mobile solutions with React Native, 
            Objective-C/Swift, and Java. Contributing to React Native migrations and building scalable applications 
            that impact millions of users across iOS and Android platforms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="glow-button bg-gradient-primary hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-medium"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-glass-border bg-glass backdrop-blur-sm hover:bg-glass-border hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/KennethAtchon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:kenneth.atchon@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;