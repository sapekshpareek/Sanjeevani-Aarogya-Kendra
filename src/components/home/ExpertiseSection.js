import React from 'react';
import FadeInView from '../animations/FadeInView';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const expertiseData = [
  {
    title: "Precision Diagnosis",
    description: "We start with deep diagnostics, not guesswork. Utilizing advanced tools to understand the root cause of your condition.",
  },
  {
    title: "Personalized Protocol",
    description: "Your treatment plan is engineered just for you. No templates, only tailored therapies for lasting outcomes.",
  },
  {
    title: "Advanced Technology",
    description: "Access to the latest medical and cosmetic innovations, from state-of-the-art lasers to regenerative procedures.",
  },
  {
    title: "Aesthetic Excellence",
    description: "From rejuvenating treatments to precision cosmetic procedures, we blend medical necessity with subtle, natural beauty.",
  },
];

const ExpertiseCard = ({ title, description, delay }) => (
  <FadeInView delay={delay}>
    <div className="bg-neutral-50 rounded-lg p-8 shadow-md h-full transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <CheckCircleIcon className="h-8 w-8 text-teal-500 mr-4" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </FadeInView>
);


const ExpertiseSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Higher Standard of Skin Health.
            </h2>
          </div>
        </FadeInView>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} title={item.title} description={item.description} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;