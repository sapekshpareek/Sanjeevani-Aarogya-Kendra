import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInView from "../animations/FadeInView";

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <FadeInView>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Your Skin’s Future is Clear.
              </h1>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Board-Certified Dermatology for Complex Cases. We deliver the
                stunning, lasting results others couldn't—because your skin
                deserves{" "}
                <span className="text-teal-500 font-semibold">decisive</span>{" "}
                expertise.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="#results"
                  className="rounded-md bg-teal-400 px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-colors"
                >
                  See Our Transformations
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
                >
                  Book Consultation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeInView>
          </div>
          <div className="flex justify-center">
            <FadeInView delay={0.3}>
              <div className="relative h-96 w-96 overflow-hidden rounded-lg shadow-xl lg:h-[28rem] lg:w-[28rem]">
                <Image
                  src="/images/hero2.jpg"
                  alt="Dr. Ravi Pandey - Dermatology Expert"
                  fill
                  style={{ objectFit: "cover" }}
                  background="black"
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
