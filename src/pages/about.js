import MainLayout from '@/components/layout/MainLayout';
import SEO from '@/components/SEO';
import AboutPage from '@/components/about/AboutPage';

export default function About() {
  return (
    <MainLayout>
      <SEO
        title="About Us | Dr. Ravi Pandey Dermatology"
        description="Learn about Dr. Ravi Pandey's commitment to decisive, compassionate care for complex skin conditions like Vitiligo and Melasma."
      />
      <AboutPage />
    </MainLayout>
  );
}