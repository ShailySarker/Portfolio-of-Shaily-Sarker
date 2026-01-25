import { motion } from 'framer-motion';
import AnimatedSection from '@/components/effects/AnimatedSection';
import GlowCard from '@/components/effects/GlowCard';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    duration: "2018 - 2022",
    description: "Focused on software engineering, data structures, algorithms, and web development. Graduated with honors.",
    achievements: [
      "Dean's List - All Semesters",
      "Best Final Year Project Award",
      "GPA: 3.8/4.0",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "College Name",
    location: "City, Country",
    duration: "2016 - 2018",
    description: "Science stream with focus on Mathematics, Physics, and Computer Science.",
    achievements: [
      "Top 10 in Class",
      "Science Club President",
      "District Level Programming Competition Winner",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-2023",
  },
  {
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MONGO-DEV-2022",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey and certifications that have shaped my technical expertise.
          </p>
        </AnimatedSection>

        {/* Education Timeline */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <AnimatedSection key={edu.degree} delay={index * 0.1}>
                    <motion.div
                      className="relative pl-12"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-background" />
                      </motion.div>

                      <GlowCard>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-3">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1 rounded-full bg-secondary text-xs font-medium"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </GlowCard>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </AnimatedSection>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <AnimatedSection key={cert.name} delay={index * 0.1}>
                  <GlowCard className="relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full"
                      whileHover={{ scale: 1.2 }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                          <p className="text-primary font-medium">{cert.issuer}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
