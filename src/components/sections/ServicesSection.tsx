import { motion } from 'framer-motion';
import AnimatedSection from '@/components/effects/AnimatedSection';
import MovingBorderButton from '@/components/effects/MovingBorderButton';
import { 
  Globe, 
  Server, 
  Zap, 
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive, high-performance web applications using modern technologies like React, Next.js, and TypeScript.',
    features: ['Custom Web Apps', 'E-commerce Solutions', 'Progressive Web Apps', 'CMS Integration'],
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust, scalable server-side solutions with Node.js, Express, and various database technologies.',
    features: ['RESTful APIs', 'GraphQL APIs', 'Database Design', 'Cloud Deployment'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Analyzing and optimizing application performance for faster load times and better user experience.',
    features: ['Speed Optimization', 'SEO Enhancement', 'Code Splitting', 'Caching Strategies'],
    gradient: 'from-teal-500 to-green-500',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

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
            Comprehensive development services to bring your ideas to life with modern technologies and best practices.
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
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`} />
                
                <div className="relative h-full bg-card border border-border rounded-3xl p-6 lg:p-8 overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
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
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.6}>
          <p className="text-muted-foreground mb-6">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
          <MovingBorderButton
            as="a"
            href="#contact"
            className="gap-2"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </MovingBorderButton>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
