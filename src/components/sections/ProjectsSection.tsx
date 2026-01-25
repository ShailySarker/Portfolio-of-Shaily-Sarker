import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/effects/AnimatedSection';
import MovingBorderButton from '@/components/effects/MovingBorderButton';
import { ExternalLink, Github, X, ChevronRight, Layers, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "A full-featured e-commerce solution with real-time inventory management.",
    fullDescription: "Built a comprehensive e-commerce platform that handles everything from product listings to payment processing. Features include user authentication, shopping cart, wishlist, order tracking, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges: [
      "Implemented real-time inventory updates across multiple concurrent users",
      "Designed a scalable database schema for millions of products",
      "Integrated multiple payment gateways with fallback mechanisms",
    ],
    improvements: [
      "Add AI-powered product recommendations",
      "Implement progressive web app (PWA) features",
      "Add multi-vendor marketplace support",
    ],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Project Management Tool",
    shortDescription: "Collaborative project management with real-time updates and analytics.",
    fullDescription: "Developed a comprehensive project management solution inspired by tools like Jira and Trello. Features drag-and-drop task boards, time tracking, team collaboration, and detailed analytics dashboards.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1200&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges: [
      "Built real-time synchronization for collaborative editing",
      "Implemented complex permission systems for team hierarchies",
      "Created performant drag-and-drop with optimistic updates",
    ],
    improvements: [
      "Add Gantt chart visualization",
      "Implement AI-powered task estimation",
      "Add integration with popular third-party tools",
    ],
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    shortDescription: "Analytics dashboard for managing multiple social media accounts.",
    fullDescription: "Created a unified dashboard for social media managers to track performance across platforms. Features include scheduled posting, engagement analytics, audience insights, and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop",
    technologies: ["React", "Express.js", "Redis", "Chart.js", "OAuth2.0"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges: [
      "Handled rate limiting across multiple API integrations",
      "Built efficient caching strategies for analytics data",
      "Implemented secure OAuth flows for multiple platforms",
    ],
    improvements: [
      "Add AI-powered content suggestions",
      "Implement competitor analysis features",
      "Add more platform integrations",
    ],
    category: "Frontend",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    shortDescription: "Scalable messaging platform with end-to-end encryption.",
    fullDescription: "Built a modern chat application supporting one-on-one and group conversations. Features include message encryption, file sharing, voice messages, and real-time presence indicators.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=1200&fit=crop",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges: [
      "Implemented end-to-end encryption for secure messaging",
      "Built scalable WebSocket infrastructure",
      "Optimized for low-latency message delivery",
    ],
    improvements: [
      "Add video calling features",
      "Implement message translation",
      "Add AI chatbot integration",
    ],
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    shortDescription: "Comprehensive fitness app with workout plans and progress tracking.",
    fullDescription: "Developed a fitness application that helps users track workouts, nutrition, and progress. Features include custom workout plans, exercise library, progress charts, and social features.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=1200&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges: [
      "Created intuitive UI for workout tracking during exercise",
      "Implemented offline-first architecture",
      "Built complex progress visualization charts",
    ],
    improvements: [
      "Add AI-powered workout recommendations",
      "Integrate with wearable devices",
      "Add social challenges and leaderboards",
    ],
    category: "Mobile",
  },
  {
    id: 6,
    title: "AI Content Generator",
    shortDescription: "AI-powered tool for generating marketing content and copy.",
    fullDescription: "Created an AI-powered content generation platform that helps marketers create blog posts, social media content, and ad copy. Features include template library, tone adjustment, and multi-language support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=1200&fit=crop",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    challenges: [
      "Fine-tuned AI prompts for consistent quality output",
      "Implemented usage-based billing system",
      "Built content moderation system",
    ],
    improvements: [
      "Add image generation capabilities",
      "Implement team collaboration features",
      "Add content scheduling and publishing",
    ],
    category: "AI/ML",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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
            A selection of projects that showcase my skills and passion for building great software.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
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
                      <div className="relative h-48 overflow-hidden">
                        <motion.div
                          className="absolute inset-0 w-full"
                          style={{ height: '300%' }}
                          whileHover={{ y: '-66.67%' }}
                          transition={{ duration: 3, ease: 'easeInOut' }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        {/* Category badge overlay */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium border border-border">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
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
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <MovingBorderButton 
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            <Layers className="w-4 h-4" />
            {showAll ? 'Show Less' : 'View All Projects'}
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
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">About the Project</h4>
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
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
                  <h4 className="text-lg font-semibold mb-3">Challenges & Solutions</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Future Improvements</h4>
                  <ul className="space-y-2">
                    {selectedProject.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
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
                  <MovingBorderButton
                    as="a"
                    href={selectedProject.githubUrl}
                    containerClassName="flex-1"
                    className="w-full justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </MovingBorderButton>
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
