import { motion } from 'framer-motion';
import AnimatedSection from '@/components/effects/AnimatedSection';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Router", level: 90 },
      { name: "ShadCN UI", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 92 },
      { name: "Mongoose", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma", level: 85 },
    ],
  },
  {
    title: "Auth, APIs & Payments",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    skills: [
      { name: "JWT & NextAuth", level: 90 },
      { name: "Passport.js", level: 80 },
      { name: "Axios & React Hook Form", level: 85 },
      { name: "Redux Toolkit", level: 85 },
      { name: "RTK Query", level: 90 },
      { name: "Stripe / Razorpay / SSL Commerz", level: 80 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Netlify / Vercel / Render", level: 95 },
      { name: "Cloudinary", level: 90 },
      { name: "Firebase", level: 75 },
    ],
  },
];

const otherTechnologies = [
  "JavaScript",
  "TypeScript",
  "Vite",
  "Bootstrap",
  "Daisy UI",
  "Hyper UI",
  "Material UI",
  "Aceternity UI",
  "Framer Motion",
  "Context API",
  "Redis",
  "VS Code",
  "Chrome DevTools",
  "Redux DevTools",
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-20 lg:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the
            technologies I work with daily.
          </p>
        </AnimatedSection>

        {/* Skills Grid - New Hexagonal-inspired Design */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              delay={categoryIndex * 0.1}
              direction="up"
            >
              <motion.div
                className="relative group h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Background with gradient border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                />
                
                <div className="relative h-full bg-card border border-border rounded-3xl p-6 lg:p-8 overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.bgGradient} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2`}
                  />
                  
                  {/* Header */}
                  <div className="relative flex items-center gap-4 mb-8">
                    <motion.div 
                      className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="relative space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-2.5 bg-secondary rounded-full overflow-hidden">
                          {/* Background glow on hover */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-20 transition-opacity blur-sm`}
                          />
                          
                          <motion.div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.08,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            viewport={{ once: true }}
                          />
                          
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ left: "-20%" }}
                            whileInView={{ left: "120%" }}
                            transition={{ 
                              duration: 1.5, 
                              delay:
                                categoryIndex * 0.1 + skillIndex * 0.08 + 0.5,
                              ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <AnimatedSection className="mt-16" delay={0.4}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Other Technologies</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {otherTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-5 py-2.5 rounded-2xl bg-card border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
