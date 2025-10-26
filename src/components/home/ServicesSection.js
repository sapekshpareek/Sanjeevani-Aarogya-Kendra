import React from "react";
import ServiceCard from "../services/ServiceCard";
import FadeInView from "../animations/FadeInView";
import Link from "next/link";

const services = [
  {
    id: "vitiligo",
    name: "Vitiligo & Pigmentary Disorders",
    description:
      "Advanced treatments for Vitiligo, Melasma, and other pigmentary issues, focusing on lasting repigmentation.",
    imageUrl: "/images/services/vitiligo.jpg",
  },
  {
    id: "psoriasis",
    name: "Psoriasis Care",
    description:
      "Comprehensive management of Psoriasis using biologics and targeted therapies to achieve clear skin.",
    imageUrl: "/images/services/psoriasis.png",
  },
  {
    id: "skin-disease",
    name: "General Skin Diseases",
    description:
      "Expert diagnosis and treatment for a wide range of common and complex skin conditions.",
    imageUrl: "/images/services/skin-disease.jpg",
  },
  {
    id: "womens-health",
<<<<<<< HEAD
    name: "Women's Dermatological Health",
=======
    name: "Female Infertility Care",
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6
    description:
      "Specialized care for skin conditions related to hormonal changes, pregnancy, and women's health.",
    imageUrl: "/images/services/womens-health.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeInView>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of dermatological services,
              blending medical expertise with a commitment to aesthetic
              excellence.
            </p>
          </div>
        </FadeInView>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeInView key={service.id} delay={index * 0.1}>
              <ServiceCard
                name={service.name}
                description={service.description}
                imageUrl={service.imageUrl}
                link={`/services/${service.id}`}
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
