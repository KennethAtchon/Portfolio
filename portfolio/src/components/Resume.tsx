import { Calendar, MapPin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  const experience = [
    {
      title: 'Software Developer I',
      company: 'Amazon',
      location: 'Seattle, WA',
      period: 'November 2024 - Present',
      description: [
        'Work on the authentication team for Amazon\'s AtoZ app, a public-facing internal application',
        'Contribute significantly to React Native migration projects, modernizing legacy mobile applications',
        'Develop and maintain cross-platform mobile applications using React Native, Objective-C/Swift, and Java',
        'Collaborate with cross-functional teams to deliver high-quality mobile software solutions',
        'Implement automated testing and CI/CD pipelines improving deployment efficiency by 40%',
        'Optimize mobile application performance and user experience across iOS and Android platforms'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Prognostic Optimization Group',
      location: 'Remote',
      period: 'May 2024 – August 2024',
      description: [
        'Transformed Figma designs into responsive websites ensuring smooth user experience across devices',
        'Developed robust PostgreSQL database with advanced analytics enhancing user insights and site performance',
        'Sharpened skills in both front-end development and database management',
        'Implemented precise testing and optimization strategies'
      ]
    },
    {
      title: 'Software Developer - AI Trainer',
      company: 'DataAnnotation.tech',
      location: 'Remote',
      period: 'June 2023 – November 2024',
      description: [
        'Evaluated and graded the performance of AI systems to enhance their coding capabilities',
        'Provided detailed and nuanced feedback significantly improving AI accuracy and reliability',
        'Developed strong code review and comprehension skills',
        'Chose tasks that matched interests and expertise in AI system evaluation'
      ]
    },
    {
      title: 'Cloud Administrator Intern',
      company: 'Arpa-Cloud',
      location: 'Remote',
      period: 'May 2023 – Aug 2023',
      description: [
        'Supported senior Azure admins in developing and maintaining private and hybrid cloud infrastructures',
        'Established VNets and subnets, managed network routing and peering',
        'Deployed and configured IaaS components',
        'Updated IAM and resource policies for enhanced security'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Purdue University Calumet',
      location: 'Hammond, IN',
      period: '2021 - 2024',
      details: 'Graduated Magna Cum Laude (GPA: 3.87). Completed curriculum including Data Structures, Algorithms, Operating Systems, Database Management, and Software Engineering.'
    }
  ];

  const certifications = [
    'AWS Certified Developer - Associate',
    'Azure Cloud Administrator',
    'MongoDB Certified Developer'
  ];

  return (
    <section id="resume" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey, education, and achievements in software development.
          </p>
          <Button
            size="lg"
            className="glow-button bg-gradient-primary hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="/Resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card
                  key={exp.title}
                  className="glass-card p-6 hover:scale-[1.01] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
              {education.map((edu, index) => (
                <Card
                  key={edu.degree}
                  className="glass-card p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-1">{edu.school}</p>
                  <div className="text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Certifications</h3>
              <Card className="glass-card p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li
                      key={cert}
                      className="flex items-center text-muted-foreground"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ExternalLink className="w-4 h-4 mr-3 text-primary" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;