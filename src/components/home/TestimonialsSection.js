import React from "react";
import Image from "next/image";
import FadeInView from "../animations/FadeInView";

const testimonials = [
  {
    quote:
      "After years of struggling with Vitiligo and getting no results, Dr. Pandey's approach was a game-changer. I finally have my confidence back.",
    name: "Deepak Sen",
    imageUrl: "/images/testimonials/patient1.jpg",
    condition: "Vitiligo Patient",
  },
  {
    quote:
      "The care and attention to detail here are unmatched. My complex skin condition is finally under control. I couldn't be more grateful.",
    name: "Laxmi Kumari",
    imageUrl: "/images/testimonials/patient2.jpg",
    condition: "Pigment Correction Patient",
  },
  {
    quote:
      "I had a rare condition that other doctors dismissed. Dr. Pandey not only diagnosed it correctly but created a treatment that worked. Truly life-changing.",
    name: "Fhool Kuwar Bai",
    imageUrl: "/images/testimonials/patient3.jpg",
    condition: "Rare Disorder Patient",
  },
];

const TestimonialCard = ({ testimonial, delay }) => (
  <FadeInView delay={delay}>
    <figure className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
      <blockquote className="text-gray-700 flex-grow">
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-gray-600 text-sm">{testimonial.condition}</div>
        </div>
      </figcaption>
    </figure>
  </FadeInView>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-neutral-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Changing Lives, One Patient at a Time
            </h2>
          </div>
        </FadeInView>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
