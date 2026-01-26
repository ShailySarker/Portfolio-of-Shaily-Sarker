import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/effects/AnimatedSection";
import MovingBorderButton from "@/components/effects/MovingBorderButton";
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  Layers,
  ArrowRight,
} from "lucide-react";
import joinMyTrip from "../../assets/images/join-my-trip.png";
import digiWallet from "../../assets/images/digi-wallet.png";
import stylishFashion from "../../assets/images/stylish-faction.png";
import prepeat from "../../assets/images/prepeat.png";
import taxax from "../../assets/images/texax.png";
import softinvo from "../../assets/images/softinvo.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Join My Trip",
    shortDescription:
      "A travel platform that helps users find companions, plan trips, and connect with people going to similar destinations.",
    fullDescription:
      "Join My Trip is a full-stack web application designed to connect travelers based on destination, interests, and schedules. Users can create trips, explore others’ travel plans, send join requests, and chat before traveling. The platform focuses on building a social travel experience with secure authentication, dynamic dashboards, and responsive design. It also includes profile management, filtering, and real-time interaction features to improve engagement.",
    image: joinMyTrip,
    technologies: [
      "Next.js",
      "TypeScript",
      "Redis",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
      "JWT",
      "Cron Jobs",
      "Node.js",
      "Express.js",
      "Redis",
      "Cloudinary",
      "Multer",
      "Passport.js",
      "Mongoose",
      "MongoDB",
      "Stripe",
    ],
    liveUrl: "https://join-my-trip-client-side.vercel.app",
    githubUrl: "https://github.com/ShailySarker/Join-My-Trip-Client-Side",
    challenges: [
      "Managing multiple user based secure authentication",
      "Designing a scalable APIs and database schema for travelers and trips",
      "Handling complex filtering logic for trips,travelers, booking, reviews, and comments",
      "Integrating payment gateways with fallback mechanisms",
    ],
    improvements: [
      "Add AI-powered AI-based travel and travel buddy matching",
      "Implement real-time chat using WebSockets",
      "Add real-time notification system",
    ],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Digi Wallet",
    shortDescription:
      "A digital wallet system for managing balance, transactions, and secure payments.",
    fullDescription:
      "Digi Wallet is a secure financial web application that allows users to create accounts, add funds, transfer money, and view transaction history. The platform focuses on security, performance, and accurate data handling. It includes authentication, wallet balance tracking, transaction logs, and role-based access for users and admins.",
    image: digiWallet,
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "React Hook Form",
      "Axios",
      "Zod",
      "Redux",
      "RTK Query",
      "Node.js",
      "Express.js",
      "JWT",
      "Passport.js",
      "Cloudinary",
      "Multer",
      "Redis",
      "Mongoose",
      "MongoDB",
    ],
    liveUrl: "https://digital-wallet-system-frontend-side.vercel.app/",
    githubUrl:
      "https://github.com/ShailySarker/Digital-Wallet-System-Frontend-Side",
    challenges: [
      "Handling sensitive data securely",
      "Maintaining transaction consistency",
      "Preventing duplicate or invalid transactions",
    ],
    improvements: [
      "Add subscription plans and billing system",
      "Implement real-time notification system",
      "Add reviews and ratings for agents",
    ],
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Stylish Fashion",
    shortDescription:
      "A modern e-commerce fashion platform with product browsing, cart, and secure checkout.",
    fullDescription:
      "Stylish Fashion is a responsive fashion e-commerce application where users can browse products, filter collections, manage carts, and place orders. It includes authentication, wishlist, order tracking, and an admin dashboard for managing products and inventory. The focus was on UI/UX, performance, and smooth shopping flow.",
    image: stylishFashion,
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "JOI",
      "Redux",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "JWT",
      "Firebase",
      "Multer",
      "Stripe",
      "Mongoose",
      "MongoDB",
    ],
    liveUrl: "https://stylish-fashion-client-side.vercel.app",
    githubUrl: "https://github.com/ShailySarker/Stylish-Fashion-Client-Side",
    challenges: [
      "Handled multiple user based secure authentication system",
      "Built efficient filtering and sorting for finding products",
      "Built efficient filtering and sorting for finding products",
    ],
    improvements: [
      "Add AI-powered product suggestions",
      "Implement real-time notification system",
      "Add reviews and ratings for websites",
    ],
    category: "Full Stack",
  },
  {
    id: 4,
    title: "PrepEat",
    shortDescription:
      "A food service platform offering tiffin services and chef booking.",
    fullDescription:
      "PrepEat connects users with home-style meal services and professional chefs. Users can browse menus, book services, schedule deliveries, and manage subscriptions. The platform includes user dashboards, service provider profiles, and order management. It was built with a strong focus on usability and mobile responsiveness.",
    image: prepeat,
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "Axios",
      "JOI",
      "Redux",
      "RTK Query",
      "Node.js",
      "Express.js",
      "JWT",
      "Cloudinary",
      "Passport.js",
      "Razorpay",
      "Mongoose",
      "MongoDB",
    ],
    liveUrl: "https://prepeat.in/",
    challenges: [
      "Managing booking logic of each particular tiffin service",
      "Building scalable website infrastructure",
      "Implementing secure payment gateways",
    ],
    improvements: [
      "Add real-time notification features",
      "Implement live order tracking",
      "Add AI-powered chef recommendations",
      "Implement laundry service and homemaker service",
    ],
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Global Textile Axis",
    shortDescription:
      "A professional product-based company website for showcasing textile products and business services.",
    fullDescription:
      "GlobalTextileAxis is a corporate website developed to present products, company services, and global business presence. It includes product catalogs, inquiry forms, admin-managed content, and SEO-optimized pages. The goal was to build a fast, professional, and scalable web presence.",
    image: taxax,
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Axios",
      "JOI",
      "Redux",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "JWT",
      "Cloudfile",
      "Razorpay",
      "Mongoose",
      "MongoDB",
    ],
    liveUrl: "https://texax.in",
    challenges: [
      "Implementing most complex seller based product adding catalog",
      "Building variations based product catalog",
      "Visualizing dynamic product management",
    ],
    improvements: [
      "Add AI-powered product recommendations",
      "Integrate real-time chat using WebSockets",
      "Integrate real-time notification system",
    ],
    category: "Full Stack",
  },
  {
    id: 6,
    title: "SoftInvo",
    shortDescription:
      "A business and invoicing platform for managing clients, services, and invoices.",
    fullDescription:
      "SoftInvo is a SaaS-style application for generating invoices, managing clients, tracking payments, and monitoring business operations. It includes authentication, role-based dashboards, invoice generation, and report management. Built to help small businesses automate billing workflows.",
    image: softinvo,
    technologies: ["React", "React Router", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://www.softinvo.in",
    challenges: [
      "Fine-tuned ui design for better user experience",
      "Implemented usage-based billing system",
      "Built content moderation system",
    ],
    improvements: [
      "Implement user based authentication system with JWT",
      "Build AI-powered chat system",
      "Add real-time notification system",
      "Implement usage-based billing system",
      "Build AI powered service recommendation system",
    ],
    category: "Frontend",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building great software.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedSection delay={index * 0.1}>
                  <motion.div
                    className="group relative h-full"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient border on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                    <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col">
                      {/* Project Image with scroll effect */}
                      <div className="relative h-48 overflow-hidden group-hover:cursor-pointer">
                        <motion.div
                          className="absolute top-0 left-0 w-full"
                          initial={{ y: 0 }}
                          whileHover={{ y: "calc(-100% + 192px)" }}
                          transition={{
                            duration: 5,
                            ease: "easeInOut",
                          }}
                          style={{
                            height: "auto",
                            minHeight: "100%",
                          }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full object-cover"
                          />
                        </motion.div>

                        {/* Category badge overlay */}
                        <div className="absolute top-[150px] left-4 z-10">
                          <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium border border-border">
                            {project.category}
                          </span>
                        </div>
                        <Link to={project.liveUrl} target="_blank">
                          <div className="absolute top-4 right-4 z-20">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md">
                              <ExternalLink className="w-4 h-4" />
                            </span>
                          </div>
                        </Link>
                        {project.githubUrl && (
                          <Link to={project.githubUrl} target="_blank">
                            <div className="absolute top-4 right-[52px] z-20">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md">
                                <Github className="w-4 h-4" />
                              </span>
                            </div>
                          </Link>
                        )}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {project.shortDescription}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <MovingBorderButton
                          onClick={() => setSelectedProject(project)}
                          containerClassName="w-full"
                          className="w-full justify-center gap-2 text-sm"
                        >
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </MovingBorderButton>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <AnimatedSection
          className="flex justify-center text-center mt-12"
          delay={0.4}
        >
          <MovingBorderButton
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            <Layers className="w-4 h-4" />
            {showAll ? "Show Less" : "View All Projects"}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </MovingBorderButton>
        </AnimatedSection>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-3xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-8 -mt-16 relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-bold">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">
                    About the Project
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl bg-secondary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">
                    Challenges & Solutions
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">
                    Future Improvements
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.improvements.map((improvement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <MovingBorderButton
                    as="a"
                    href={selectedProject.liveUrl}
                    containerClassName="flex-1"
                    className="w-full justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </MovingBorderButton>
                  {selectedProject.githubUrl && (
                    <MovingBorderButton
                      as="a"
                      href={selectedProject.githubUrl}
                      containerClassName="flex-1"
                      className="w-full justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </MovingBorderButton>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
