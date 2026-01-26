import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
  Facebook,
  Download,
  ChevronDown,
  Eye,
  Rocket,
  Briefcase,
} from "lucide-react";
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconPhone,
} from "@tabler/icons-react";
import TypewriterText from "@/components/effects/TypewriterText";
import MovingBorderButton from "@/components/effects/MovingBorderButton";
import ParticleBackground from "@/components/effects/ParticleBackground";
import RotatingDashedCircle from "@/components/effects/RotatingDashedCircle";

const roles = [
  "2+ Years Experience",
  "React Expert",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
  "Next.js Developer",
  // "PERN Stack Developer",
  "Node.js Developer",
];

// Tech badges with proper icons and labels
const techBadges = [
  {
    name: "React",
    Icon: IconBrandReact,
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-500",
    borderColor: "border-sky-500/30",
  },
  {
    name: "Next.js",
    Icon: IconBrandNextjs,
    bgColor: "bg-slate-500/10",
    textColor: "text-slate-500",
    borderColor: "border-slate-500/30",
  },
  {
    name: "TypeScript",
    Icon: IconBrandTypescript,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Node.js",
    Icon: IconBrandNodejs,
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500/30",
  },
  {
    name: "MongoDB",
    Icon: IconBrandMongodb,
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    borderColor: "border-green-500/30",
  },
  {
    name: "PostgreSQL",
    Icon: IconBrandMongodb,
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-500",
    borderColor: "border-indigo-500/30",
  },
];

// Floating tech icons for around the photo
const floatingTechIcons = [
  {
    name: "React",
    Icon: IconBrandReact,
    position: "-top-2 -right-2",
    bgGradient: "from-sky-400 to-cyan-500",
    delay: 0,
    animateY: true,
  },
  {
    name: "Node.js",
    Icon: IconBrandNodejs,
    position: "-bottom-2 -left-2",
    bgGradient: "from-emerald-400 to-green-500",
    delay: 0.5,
    animateY: true,
  },
  {
    name: "TypeScript",
    Icon: IconBrandTypescript,
    position: "top-1/2 -right-6",
    bgGradient: "from-blue-400 to-blue-600",
    delay: 1,
    animateX: true,
  },
  {
    name: "MongoDB",
    Icon: IconBrandMongodb,
    position: "-top-4 left-8",
    bgGradient: "from-green-400 to-emerald-600",
    delay: 0.7,
    animateY: true,
    animateX: true,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ShailySarker",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shaily-sarker-905757387",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:shailysarker11@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/8801730465918",
  },
  {
    name: "Phone",
    icon: IconPhone,
    href: "tel:+8801730465918",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background Effects */}
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight whitespace-nowrap"
            >
              Hi, I'm <span className="gradient-text">Shaily Sarker</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12 text-foreground/90"
            >
              <TypewriterText words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate full-stack developer with 2+ years of experience
              building scalable web applications. Specializing in React,
              Node.js, and modern web architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <MovingBorderButton
                as="a"
                href="/resume.pdf"
                download="Shaily_Sarker_Resume.pdf"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 border-none"
                borderClassName="bg-[radial-gradient(hsl(var(--accent))_40%,transparent_60%)]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </MovingBorderButton>
              <MovingBorderButton
                as="a"
                href="https://drive.google.com/file/d/1RlfkJSrP-AtuI_-EiHmpj56AORwl58RL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 bg-secondary/50 border-primary/20 hover:bg-secondary"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </MovingBorderButton>
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary shadow-sm"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image with Ring and Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Rotating Dashed Circle */}
              <RotatingDashedCircle
                size={340}
                strokeWidth={2}
                dashLength={8}
                gapLength={8}
                duration={30}
              />

              {/* Integrated Experience Badge */}
              <motion.div
                className="absolute bottom-4 -right-4 p-4 rounded-2xl bg-card/90 border border-primary/30 shadow-2xl z-30 flex items-center gap-3 backdrop-blur-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="p-2.5 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Years of</p>
                  <p className="text-sm font-bold text-foreground">2+ Experience</p>
                </div>
              </motion.div>

              {/* Integrated Projects Badge */}
              <motion.div
                className="absolute -top-4 -left-4 p-4 rounded-2xl bg-card/90 border border-accent/30 shadow-2xl z-30 flex items-center gap-3 backdrop-blur-md"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="p-2.5 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Completed</p>
                  <p className="text-sm font-bold text-foreground">25+ Projects</p>
                </div>
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl z-10 bg-background">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                    👨‍💻
                  </span>
                </div>
              </div>

              {/* Enhanced Soft Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-[80px] -z-10 scale-125" />
            </div>
          </motion.div>
        </div>

        {/* Tech Logos with Text Row (The "Outside" Logos) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 pt-12 border-t border-border/30"
        >
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-8">
            Specialized Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {techBadges.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-3 group"
                whileHover={{ y: -5, opacity: 1 }}
              >
                <div
                  className={`p-4 rounded-2xl ${tech.bgColor} border ${tech.borderColor} group-hover:border-primary/50 transition-all duration-300`}
                >
                  <tech.Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold tracking-wider group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Discovery
          </span>
          <ChevronDown className="w-4 h-4 group-hover:scale-125 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
