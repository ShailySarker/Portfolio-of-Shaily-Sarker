import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/effects/AnimatedSection";
import GlowCard from "@/components/effects/GlowCard";
import MovingBorderButton from "@/components/effects/MovingBorderButton";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shailysarkerofficial@gmail.com",
    href: "mailto:shailysarkerofficial@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1730465918",
    href: "tel:+8801730465918",
  },
  {
    icon: IconBrandWhatsapp,
    label: "WhatsApp",
    value: "+880 1730465918",
    href: "https://wa.me/8801730465918",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Barisal, Bangladesh",
    href: "#",
  },
];

const socialLinks = [
  // { icon: IconPhone, href: "tel:+8801730465918", label: "Phone" },
  // { icon: Mail, href: "mailto:shailysarkerofficial@gmail.com", label: "Gmail" },
  // {
  //   icon: IconBrandWhatsapp,
  //   href: "https://wa.me/8801730465918",
  //   label: "WhatsApp",
  // },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shaily-sarker",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/ShailySarker", label: "GitHub" },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  subject: z
    .string()
    .trim()
    .min(5, { message: "Subject must be at least 5 characters" })
    .max(200),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000),
});

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);

      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY,
        );
      } else {
        // Fallback or error if formRef is null
        throw new Error("Form reference is missing");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error("EmailJS Error:", error);
        toast.error(
          "Failed to send message. Please try again or email directly.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Let's create
                  something amazing together!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <GlowCard>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${errors.name ? "border-destructive" : "border-border"} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${errors.email ? "border-destructive" : "border-border"} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${errors.subject ? "border-destructive" : "border-border"} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                    placeholder="Job Opportunity / Collaboration / Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${errors.message ? "border-destructive" : "border-border"} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <MovingBorderButton
                  onClick={() => {}}
                  containerClassName="w-full"
                  className="w-full justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </MovingBorderButton>
              </form>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
