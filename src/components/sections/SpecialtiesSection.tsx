import { motion } from "framer-motion";
import AnimatedSection from "@/components/effects/AnimatedSection";
import {
  Code2,
  Layers,
  Shield,
  Gauge,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import MovingBorderButton from "../effects/MovingBorderButton";

const specialties = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Writing modular, maintainable code following SOLID principles and industry best practices.",
    highlights: [
      "Component-Based Design",
      "Reusable Code Patterns",
      "Clear Documentation",
    ],
  },
  {
    icon: Layers,
    title: "Full Stack Expertise",
    description:
      "Seamless integration between frontend and backend, delivering complete end-to-end solutions.",
    highlights: ["API Design", "Database Optimization", "State Management"],
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Implementing robust security measures to protect applications and user data.",
    highlights: [
      "Authentication Systems",
      "Data Encryption",
      "Security Audits",
    ],
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description:
      "Building lightning-fast applications optimized for the best user experience.",
    highlights: [
      "Load Time Optimization",
      "Code Splitting",
      "Caching Strategies",
    ],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Experience working in agile teams, code reviews, and mentoring junior developers.",
    highlights: ["Agile/Scrum", "Code Reviews", "Knowledge Sharing"],
  },
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    description:
      "Creating visually stunning, accessible interfaces with smooth animations.",
    highlights: [
      "Responsive Design",
      "Micro-Interactions",
      "Accessibility (WCAG)",
    ],
  },
];

const SpecialtiesSection = () => {
  return (
    <section
      id="specialties"
      className="relative py-20 lg:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Excel At</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core competencies and areas of expertise that set me apart as a
            developer.
          </p>
        </AnimatedSection>

        {/* Specialties Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <AnimatedSection key={specialty.title} delay={index * 0.1}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full bg-card border border-border rounded-2xl p-6 overflow-hidden hover:border-primary/50 transition-colors">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <motion.div
                    className="relative inline-flex p-3 rounded-xl bg-primary/10 mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <specialty.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {specialty.highlights.map((highlight, i) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground/80">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-16" delay={0.6}>
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

            <div className="relative px-8 py-12 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Let's create something extraordinary
                together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  className="rounded-full font-medium hover:border-primary/50 transition-colors bg-secondary/50 border-primary/20 hover:bg-secondary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MovingBorderButton as="a" href="#projects">
                    View My Work
                  </MovingBorderButton>
                </motion.a>

                <motion.a
                  className="rounded-full"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MovingBorderButton
                    as="a"
                    href="#contact"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 border-none"
                    borderClassName="bg-[radial-gradient(hsl(var(--accent))_40%,transparent_60%)]"
                  >
                    Let's Talk
                  </MovingBorderButton>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
