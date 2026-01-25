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
} from "lucide-react";
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
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
    name: "Node.js",
    Icon: IconBrandNodejs,
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500/30",
  },
  {
    name: "TypeScript",
    Icon: IconBrandTypescript,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },
  {
    name: "MongoDB",
    Icon: IconBrandMongodb,
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    borderColor: "border-green-500/30",
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
    hoverColor:
      "hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    hoverColor: "hover:bg-[#0077B5] hover:text-white",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:shailysarker11@gmail.com",
    hoverColor: "hover:bg-[#EA4335] hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    hoverColor: "hover:bg-[#25D366] hover:text-white",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="gradient-text">Shaily Sarker</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12"
            >
              <TypewriterText words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Passionate full-stack developer with 2+ years of experience
              building scalable web applications. Specializing in React,
              Node.js, and modern web technologies.
            </motion.p>

            {/* Tech Badges with Icons and Labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {techBadges.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${tech.bgColor} ${tech.textColor} border ${tech.borderColor} text-sm font-medium`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <tech.Icon className="w-4 h-4" />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <MovingBorderButton
                as="a"
                href="/resume.pdf"
                download
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </MovingBorderButton>
              <MovingBorderButton
                as="a"
                href="https://drive.google.com/file/d/1RlfkJSrP-AtuI_-EiHmpj56AORwl58RL/view?usp=sharing"
                download
                className="gap-2"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </MovingBorderButton>
              {/* <MovingBorderButton as="a" href="#contact" className="gap-2">
                Get in Touch
              </MovingBorderButton> */}
              {/* <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Borders are cool
              </Button> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-secondary/80 border border-border text-muted-foreground transition-all duration-300 ${social.hoverColor}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Rotating Dotted Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Rotating Dashed Circle */}
              <RotatingDashedCircle
                size={320}
                strokeWidth={2}
                dashLength={15}
                gapLength={10}
                duration={20}
              />

              {/* Floating Tech Icons with proper icons */}
              {floatingTechIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`absolute ${tech.position} w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.bgGradient} flex items-center justify-center shadow-lg z-20`}
                  animate={{
                    y: tech.animateY ? [0, tech.animateY ? -8 : 0, 0] : 0,
                    x: tech.animateX ? [0, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay,
                  }}
                >
                  <tech.Icon className="w-7 h-7 text-white" />
                </motion.div>
              ))}

              {/* Profile Image */}
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl z-10">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>

              {/* Soft Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-3xl -z-10 scale-125" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
