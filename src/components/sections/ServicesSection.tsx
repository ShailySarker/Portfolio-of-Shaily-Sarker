import { motion } from "framer-motion";
import AnimatedSection from "@/components/effects/AnimatedSection";
import MovingBorderButton from "@/components/effects/MovingBorderButton";
import {
  Globe,
  Server,
  ShieldCheck,
  Layout,
  Zap,
  Search,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-stack Web Development",
    description:
      "Complete web application development from frontend to backend, delivering production-ready solutions.",
    features: [
      "Production Ready",
      "Scalable Architecture",
      "Full Lifecycle",
      "End-to-end Solutions",
    ],
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    description:
      "Building responsive, performant interfaces with React & Next.js, focused on user experience.",
    features: [
      "React & Next.js",
      "Responsive Design",
      "Ultra Performance",
      "Framer Motion",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Server,
    title: "REST API & Backend",
    description:
      "Designing scalable REST APIs and robust backend architecture with Node.js and Express.",
    features: [
      "Node.js & Express",
      "Microservices",
      "Database Design",
      "API Security",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    description:
      "Implementing secure authentication systems with role-based access control and JWT.",
    features: [
      "JWT Auth",
      "RBAC Systems",
      "Data Encryption",
      "Secure Middleware",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "UI Implementation",
    description:
      "Converting Figma designs to pixel-perfect, responsive code with modern CSS frameworks.",
    features: [
      "Pixel Perfect",
      "Figma to Code",
      "Tailwind CSS",
      "Interactive UI",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "Performance & SEO",
    description:
      "Optimizing web applications for speed, accessibility, and search engine visibility.",
    features: [
      "Speed Optimization",
      "SEO Best Practices",
      "Accessibility",
      "Lighthouse 100",
    ],
    gradient: "from-teal-500 to-green-500",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 overflow-hidden bg-secondary/10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.05] dark:opacity-[0.1]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with
            modern technologies and best practices.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`}
                />

                <div className="relative h-full bg-card border border-border rounded-3xl p-6 lg:p-8 overflow-hidden">
                  {/* Background gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Card Button - Professional Indigo/Violet */}
                  <div className="mt-auto">
                    <MovingBorderButton
                      as="a"
                      href="#contact"
                      className="h-10 text-xs px-6 bg-indigo-600 text-white border-none hover:bg-indigo-700 transition-all font-semibold"
                      borderGlowColor="hsl(var(--primary))"
                      borderRadius="0.75rem"
                    >
                      Discuss Project
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </MovingBorderButton>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection
          className="flex flex-col items-center justify-center text-center mt-24 py-12 px-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden"
          delay={0.6}
        >
          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] -z-10" />

          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to build something extraordinary?
          </h3>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl">
            Let's collaborate to bring your vision to life with modern
            technologies and a focus on exceptional user experience.
          </p>

          <MovingBorderButton
            as="a"
            href="#contact"
            className="gap-3 bg-primary text-primary-foreground hover:opacity-90 border-none px-12 h-14 text-base shadow-xl shadow-primary/20 transition-all active:scale-95"
            borderGlowColor="hsl(var(--accent))"
          >
            <span className="font-bold mr-2">Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MovingBorderButton>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
