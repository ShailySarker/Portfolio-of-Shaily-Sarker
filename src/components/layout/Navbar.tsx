import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  SS
                </span>
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary to-accent opacity-30 blur-sm -z-10" />
            </div>
            <span className="font-bold text-xl hidden sm:block">
              Shaily<span className="gradient-text">Sarker</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          onAnimationStart={() => setIsMenuAnimating(true)}
          onAnimationComplete={() => setIsMenuAnimating(isOpen)}
          animate={
            isOpen ? { height: "auto", opacity: 1, y: 0 } : { height: 0, opacity: 0, y: -10 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="mx-4 mb-6 p-4 glass-card shadow-2xl space-y-2 ring-1 ring-primary/10 border-primary/20">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className={cn(
                  "block w-full text-left px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300",
                  activeSection === item.href.slice(1)
                    ? "bg-primary/15 text-primary shadow-sm ring-1 ring-primary/20 scale-[1.02]"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground hover:translate-x-1",
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="mobileActiveDot"
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
