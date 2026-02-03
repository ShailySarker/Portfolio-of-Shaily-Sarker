import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/effects/AnimatedSection";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Firstricoz Private Limited",
    location: "Remote",
    duration: "Oct 2024 - Feb 2025",
    type: "Full-time",
    description:
      "Leading development of enterprise-grade web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
    responsibilities: [
      "Architected and developed scalable multi-user web applications using React and Node.js",
      "Collaborated with cross-functional teams to design and implement new features",
      "Optimized application performance through code refactoring and performance tuning",
      "Participated in code reviews and knowledge sharing sessions",
      "Lead a team of 4 developers in delivering critical features on time",
      "Reduced application load time by 40% through performance optimization",
      "Implemented payment gateways and user authentication using JWT and Passport.js",
    ],
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "Passport.js",
      "Cloudinary",
      "Mongoose",
      "MongoDB",
      "Redux",
      "RTK Query",
      "Razorpay",
    ],
  },
  {
    role: "React.js Developer",
    company: "Firstricoz Private Limited",
    location: "Remote",
    duration: "Feb 2024 - Oct 2024",
    type: "Full-time",
    description:
      "Built and maintained multiple web applications for B2B clients. Collaborated closely with design and product teams.",
    responsibilities: [
      "Built dynamic and responsive user interfaces using React.js, enhancing user engagement and experience",
      "Developed RESTful APIs serving 10k+ client applications",
      "Built responsive dashboards improving user engagement and experience",
      "Optimized application performance through code refactoring and performance tuning",
      "Integrated third-party payment gateways processing secure transactions",
      "Participated in code reviews and knowledge sharing sessions",
    ],
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "Redux",
      "RTK Query",
      "Razorpay",
      "Cloudinary",
      "Firebase",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "FirstStore",
    location: "Remote",
    duration: "Oct 2023 - Feb 2024",
    type: "Internship",
    description:
      "Focused on creating pixel-perfect, responsive user interfaces for various client projects.",
    responsibilities: [
      "Converted 5+ Figma designs into responsive React components",
      "Optimized code for maximum performance and accessibility",
      "Implemented complex animations using Framer Motion",
      "Collaborated with backend teams on API integration",
      "Participated in code reviews and knowledge sharing sessions",
      "Implemented complex animations using Framer Motion",
      "Collaborated with backend teams on API integration",
    ],
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Daisy UI",
      "JavaScript",
      "Redux",
      "RTK Query",
      "Razorpay",
      "Cloudinary",
    ],
  },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="relative py-20 lg:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career path and the impactful work I've done at various
            organizations.
          </p>
        </AnimatedSection>

        {/* Experience Timeline */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Fixed visible background with animated fill */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 lg:-translate-x-1/2">
            {/* Background line (always visible) */}
            <div className="absolute w-1 h-full bg-border rounded-full" />
            {/* Animated fill line */}
            <motion.div
              className="absolute w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"
              style={{ height: lineHeight }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full blur-sm opacity-60"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.role} delay={index * 0.15}>
                <div
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Timeline Icon - Outside the line */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute lg:w-16 w-12 lg:h-16 h-12 rounded-full bg-primary/20"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Icon container */}
                    <motion.div
                      className="relative lg:w-12 w-10 lg:h-12 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg border-4 border-background"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    >
                      <Briefcase className="lg:w-5 w-4 lg:h-5 h-4 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-20 lg:ml-0 lg:w-[calc(52%-40px)] ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                  >
                    <motion.div
                      className="relative group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient border on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                      <div className="relative bg-card border border-border rounded-2xl p-6 shadow-lg">
                        {/* Header badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold mb-3">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 shrink-0" />
                                {resp}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-secondary text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            className="absolute left-8 lg:left-1/2 -translate-x-1/2 -bottom-4 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
