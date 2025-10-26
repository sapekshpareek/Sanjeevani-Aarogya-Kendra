import React from "react";
import Image from "next/image";
import FadeInView from "../animations/FadeInView";

const AboutPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <FadeInView>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Commitment to Decisive, Compassionate Care
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                At our core, we believe that everyone deserves to feel confident
                and comfortable in their own skin. We were founded on the
                principle that complex dermatological conditions require more
                than just standard treatments—they require a dedicated partner
                who combines deep expertise with genuine compassion.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Dr. Ravi Pandey, a board-certified dermatologist, has dedicated
                his career to tackling the most challenging cases in pigmentary
                disorders and medical dermatology. His approach is rooted in a
                relentless pursuit of knowledge and a commitment to personalized
                protocols. We don't just treat symptoms; we dive deep to
                understand the cellular basis of your condition to deliver
                results that are not only visible but also lasting.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Our clinic is a space of hope and healing, equipped with
                advanced technology and designed for your comfort. We are here
                to listen, to understand, and to guide you on your journey to
                healthier skin.
              </p>
            </FadeInView>
          </div>
          <FadeInView delay={0.2}>
            <div className="relative h-[32rem] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/dr-ravi-pandey.jpg"
                alt="Dr. Ravi Pandey"
                fill
                style={{ objectFit: "cover" }}
                className="object-top"
              />
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
