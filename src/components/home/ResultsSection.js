import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInView from "../animations/FadeInView";

// Placeholder for the interactive slider. For now, it shows two images.
const BeforeAfterSlider = ({ before, after, alt }) => (
  <div className="grid grid-cols-2 gap-1">
    <div className="relative h-64">
      <Image
        src={before}
        alt={`Before - ${alt}`}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-l-lg"
      />
      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs font-bold uppercase px-2 py-1 rounded">
        Before
      </div>
    </div>
    <div className="relative h-64">
      <Image
        src={after}
        alt={`After - ${alt}`}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-r-lg"
      />
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs font-bold uppercase px-2 py-1 rounded">
        After
      </div>
    </div>
  </div>
);

const CaseStudyCard = ({ caseData, delay }) => (
  <FadeInView delay={delay}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start">
          <div className="w-1 bg-teal-400 self-stretch mr-4 shrink-0"></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {caseData.headline}
            </h3>
            <p className="mt-2 text-gray-600">{caseData.teaser}</p>
          </div>
        </div>
      </div>
      <BeforeAfterSlider
        before={caseData.beforeImg}
        after={caseData.afterImg}
        alt={caseData.headline}
      />
    </div>
  </FadeInView>
);

const ResultsSection = () => {
  const cases = [
    {
      headline: "Elias: Restoring Uniformity, Renewing Life.",
      teaser:
        "Struggled with generalized Vitiligo coverage for years. Achieved significant repigmentation and lasting skin uniformity through targeted light therapy.",
      beforeImg: "/images/testimonials/girl1.jpg",
      afterImg: "/images/testimonials/girl12.jpg",
    },
    {
      headline: "Amelia: Precision Pigment Correction.",
      teaser:
        "Complex Melasma dramatically lightened and managed using a multi-phase treatment protocol focused on cellular stabilization and long-term control.",
      beforeImg: "/images/testimonials/legs1.jpg",
      afterImg: "/images/testimonials/legs12.jpg",
    },
    {
      headline: "Daniel: Healing the Challenging Cases.",
      teaser:
        "Rare pigmentary disorder stabilized and improved through an aggressive, custom biological approach, restoring balance where previous treatments failed.",
      beforeImg: "/images/testimonials/legs2.jpg",
      afterImg: "/images/testimonials/legs22.jpg",
    },
  ];

  return (
    <section id="results" className="bg-neutral-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Transformation is Real. See What's Possible.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              For complex pigmentary challenges like Vitiligo and Melasma,
              traditional treatment often fails. Our approach combines advanced
              medical science with a personalized plan for achieving profound,
              lasting uniformity.
            </p>
          </div>
        </FadeInView>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cases.map((caseData, index) => (
            <CaseStudyCard
              key={index}
              caseData={caseData}
              delay={index * 0.1}
            />
          ))}
        </div>

        <FadeInView>
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="rounded-md bg-teal-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-colors"
            >
              Ready for your transformation? Schedule a Consultation
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default ResultsSection;
