import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SpecialtiesSection from '@/components/sections/SpecialtiesSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import CursorGlow from '@/components/effects/CursorGlow';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Custom Cursor Effect */}
      <CursorGlow />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <StatsSection />
        <ServicesSection />
        <SpecialtiesSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
