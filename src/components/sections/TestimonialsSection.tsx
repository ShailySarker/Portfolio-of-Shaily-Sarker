import { motion } from 'framer-motion';
import AnimatedSection from '@/components/effects/AnimatedSection';
import GlowCard from '@/components/effects/GlowCard';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Smith",
    role: "CTO at TechCorp",
    content: "One of the most talented developers I've worked with. Their attention to detail and ability to deliver complex features on time is remarkable.",
    avatar: "👨‍💼",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "Working with them was a pleasure. They understood our requirements perfectly and delivered a solution that exceeded our expectations.",
    avatar: "👩‍💻",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: "Their full-stack expertise helped us launch our MVP in record time. Highly recommend for any challenging project.",
    avatar: "👨‍🚀",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure of working with.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <GlowCard className="h-full">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground flex-grow mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
