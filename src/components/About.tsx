import { Code, Zap, Users, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    'React Native', 'Objective-C', 'Swift', 'Java', 'Python', 'C++', 'JavaScript', 'React', 'Node.js', 'AWS', 
    'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'HTML/CSS', 'TypeScript', 'iOS', 'Android'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices and design patterns.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in cross-functional teams using Agile methodologies and modern tools.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analyzing complex requirements and delivering innovative solutions that exceed expectations.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with expertise in full-stack web development 
            and cloud-based solutions, dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Kenneth Atchon, a Software Engineer with expertise in full-stack web development, 
                mobile development, and cloud-based solutions. With a Bachelor's degree in Computer Science 
                from Purdue University Calumet, I've developed and deployed dynamic applications using 
                React JS, React Native, AWS, MySQL, and MongoDB.
              </p>
              <p>
                My experience includes improving AI training datasets, transforming Figma designs into 
                responsive websites, and optimizing cloud infrastructures. I'm passionate about leveraging 
                technology to solve complex problems, continuously learning, and delivering high-quality 
                solutions that drive user engagement and efficiency.
              </p>
              <p>
                As a Software Developer I at Amazon, I work on the authentication team for the AtoZ app, 
                a public-facing internal application. I contribute significantly to React Native migration projects and develop 
                cross-platform mobile applications using React Native, Objective-C/Swift, and Java. 
                I work on building scalable mobile solutions that impact millions of users worldwide 
                across iOS and Android platforms.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted/50 border border-glass-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                {highlight.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;