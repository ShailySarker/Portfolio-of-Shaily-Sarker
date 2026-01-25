import { motion } from 'framer-motion';
import AnimatedSection from '@/components/effects/AnimatedSection';
import TextReveal from '@/components/effects/TextReveal';
import GlowCard from '@/components/effects/GlowCard';
import { Code, Lightbulb, Rocket, Heart } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Clean Code', description: 'Writing maintainable, scalable code' },
  { icon: Lightbulb, label: 'Problem Solver', description: 'Creative solutions to complex challenges' },
  { icon: Rocket, label: 'Performance', description: 'Optimized for speed and efficiency' },
  { icon: Heart, label: 'Passion', description: 'Love for continuous learning' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Code Window */}
                <div className="absolute inset-0 rounded-3xl bg-card border border-border overflow-hidden shadow-2xl">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">about-me.tsx</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-purple-500">const</span>{' '}
                      <span className="text-primary">developer</span>{' '}
                      <span className="text-muted-foreground">=</span>{' '}
                      <span className="text-yellow-500">{'{'}</span>
                      <br />
                      <span className="ml-4 text-muted-foreground">name:</span>{' '}
                      <span className="text-green-500">"Your Name"</span>,
                      <br />
                      <span className="ml-4 text-muted-foreground">role:</span>{' '}
                      <span className="text-green-500">"Full Stack Developer"</span>,
                      <br />
                      <span className="ml-4 text-muted-foreground">experience:</span>{' '}
                      <span className="text-orange-500">"2+ years"</span>,
                      <br />
                      <span className="ml-4 text-muted-foreground">passion:</span>{' '}
                      <span className="text-green-500">"Building amazing web apps"</span>,
                      <br />
                      <span className="ml-4 text-muted-foreground">skills:</span>{' '}
                      <span className="text-yellow-500">[</span>
                      <span className="text-green-500">"React"</span>,{' '}
                      <span className="text-green-500">"Node.js"</span>,{' '}
                      <span className="text-green-500">"..."</span>
                      <span className="text-yellow-500">]</span>,
                      <br />
                      <span className="text-yellow-500">{'}'}</span>;
                    </motion.div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  2+ Years Experience
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div className="space-y-8">
            <AnimatedSection>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Crafting Digital Experiences with{' '}
                <span className="gradient-text">Passion & Precision</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <TextReveal
                text="I'm a passionate full-stack developer who transforms ideas into powerful, scalable web applications. My journey started with curiosity about how websites work, and it has evolved into a deep expertise in modern web technologies."
                className="text-lg text-muted-foreground leading-relaxed"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                With over 2 years of professional experience, I specialize in building responsive, 
                user-centric applications using the MERN stack. I believe in writing clean, 
                maintainable code that not only works but is a joy to read and extend.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                excited to take on new challenges and grow as a developer.
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
