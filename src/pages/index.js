import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ResultsSection from "@/components/home/ResultsSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Expert Dermatology for Vitiligo & Pigmentary Disorders"
        description="Board-certified dermatology in Maksi, Ujjain, Indore, Dewas & Shajapur. Specialized care for Vitiligo, Psoriasis, Melasma and complex skin conditions."
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/` : undefined}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Physician',
          name: 'Sanjeevani Aarogya Kendra - Dr. Ravi Pandey',
          description:
            'Expert dermatology for vitiligo, psoriasis and pigmentary disorders in Maksi, Ujjain, Indore, Dewas & Shajapur',
          areaServed: ['Maksi', 'Ujjain', 'Indore', 'Dewas', 'Shajapur'],
          url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
          telephone: '+91 9993349816',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'In Front of 96 Shop, Kanasiya Naka',
            addressLocality: 'Maksi',
            addressRegion: 'Madhya Pradesh',
            postalCode: '465106',
            addressCountry: 'IN',
          },
        }}
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
