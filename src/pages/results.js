import React from "react";
import SEO from "@/components/SEO";
import FadeInView from "@/components/animations/FadeInView";
const ResultsPage = () => {
  // You can replace this with your actual YouTube video embed link and title
  const videoUrl =
    "https://www.youtube.com/embed/x5-r7vsIQ3s?si=SEpc0RcCxJRX9Fk2";
  const videoTitle = "Transformative Results: A Patient's Journey";

  return (
    <>
      <SEO
        title="Our Results | Patient Success Stories | Sanjeevani Aarogya Kendra"
        description="See the life-changing results achieved at Sanjeevani Aarogya Kendra. Watch patient stories and see the effectiveness of our treatments for vitiligo, psoriasis, and more."
        canonical={
          process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/result`
            : undefined
        }
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeInView>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                See the Difference We Make
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We are proud to share the success stories of our patients. The
                following video highlights the transformative journey and
                positive outcomes achieved through our dedicated care and
                advanced treatments.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="mx-auto mt-16 max-w-4xl">
              <h2 className="text-center text-2xl font-semibold leading-8 text-gray-800 mb-6">
                {videoTitle}
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src={videoUrl}
                  title={videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
