import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/SEO";
import AboutPage from "@/components/about/AboutPage";

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Dr. Ravi Pandey Dermatology"
        description="Learn about Dr. Ravi Pandey and Sanjeevani Aarogya Kendra—decisive, compassionate dermatology in Maksi, Ujjain, Indore, Dewas & Shajapur."
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/about` : undefined}
      />
      <AboutPage />
    </>
  );
}
