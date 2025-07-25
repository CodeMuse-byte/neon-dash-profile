
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import ProfileSidebar from '../components/ProfileSidebar';
import SettingsPanel from '../components/SettingsPanel';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: true,
      easing: 'ease-out-quart',
      offset: 50,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  // Listen for sidebar state changes
  useEffect(() => {
    const handleSidebarToggle = () => {
      setSidebarOpen(prev => !prev);
    };

    // Listen for custom event from sidebar
    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => window.removeEventListener('sidebarToggle', handleSidebarToggle);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-all duration-500 ease-out">
      <ProfileSidebar />
      
      {/* Main Content Wrapper */}
      <div className={`transition-all duration-500 ease-out will-change-transform ${
        sidebarOpen ? 'transform translate-x-[200px]' : 'transform translate-x-0'
      }`}>
        <HeroSection />
        
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      
      <SettingsPanel />
    </div>
  );
};

export default Index;
