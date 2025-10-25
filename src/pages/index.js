import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import ResultsSection from '@/components/home/ResultsSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Expert Dermatology for Vitiligo & Pigmentary Disorders"
        description="Board-certified dermatology delivering stunning, lasting results for complex cases like Vitiligo and Melasma. Your skin's future is clear."
      />
      <HeroSection />
      <ResultsSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}