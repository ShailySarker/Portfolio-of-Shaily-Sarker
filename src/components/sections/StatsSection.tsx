import { motion } from "framer-motion";
import AnimatedSection from "@/components/effects/AnimatedSection";
import { Code, GitBranch, Coffee, Users, Star, Folder } from "lucide-react";

const stats = [
  { icon: Folder, value: "25+", label: "Projects Completed" },
  { icon: Code, value: "120K+", label: "Lines of Code" },
  { icon: GitBranch, value: "500+", label: "Git Commits" },
  { icon: Coffee, value: "80+", label: "Cups of Coffee" },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.05}>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div
                  className="inline-flex p-3 rounded-xl bg-card border border-border mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold gradient-text mb-1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
