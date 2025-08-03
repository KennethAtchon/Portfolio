import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'POG AI - Prognostic Optimization Group',
      description: 'Transformed Figma designs into a responsive website with robust PostgreSQL database and advanced analytics. Enhanced user insights and site performance through precise implementation and testing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'PostgreSQL', 'Figma', 'JavaScript', 'CSS'],
      github: 'https://github.com/KennethAtchon',
      demo: '#',
      featured: true
    },
    {
      title: 'DataAnnotation AI Training',
      description: 'Evaluated and graded AI system performance to enhance coding capabilities. Provided detailed feedback improving AI accuracy and reliability while developing strong code review skills.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['AI/ML', 'Code Review', 'Python', 'Data Analysis'],
      github: 'https://github.com/KennethAtchon',
      demo: '#'
    },
    {
      title: 'Broovie - Movie Application',
      description: 'Full-stack movie application with user authentication, movie database integration, and responsive design. Features include search, ratings, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1489599735734-79b4169c4388?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'API Integration'],
      github: 'https://github.com/KennethAtchon',
      demo: '#'
    },
    {
      title: 'Trivowear - E-commerce Platform',
      description: 'Complete e-commerce solution with user authentication, payment processing, and inventory management. Built with modern web technologies and responsive design.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'AWS'],
      github: 'https://github.com/KennethAtchon',
      demo: '#'
    },
    {
      title: 'Bug Tracker - Project Management',
      description: 'Comprehensive bug tracking and project management tool with team collaboration features, issue tracking, and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/KennethAtchon',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Notable Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development,
            AI integration, and scalable architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    project.featured ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="glow-button bg-gradient-primary"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted/50 text-foreground border border-glass-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-glass-border hover:bg-muted/50"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-glass-border bg-glass backdrop-blur-sm hover:bg-glass-border"
            asChild
          >
            <a href="https://github.com/KennethAtchon" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;