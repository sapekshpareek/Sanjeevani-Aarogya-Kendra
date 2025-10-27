import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInView from "../animations/FadeInView";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <FadeInView>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl lg:h-[30rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.588320183936!2d76.1515162!3d23.282366099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396343215e9fafef%3A0x906b6004343f58de!2sSanjeevani%20Arogya%20Kendra!5e1!3m2!1sen!2sin!4v1761561385491!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanjeevani Arogya Kendra Location"
              ></iframe>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Begin Your Journey to Clear Skin
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Take the first step towards the results you deserve. Contact us
                to schedule your private consultation with Dr. Pandey.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <MapPinIcon className="h-6 w-6 text-teal-500" />
                  <span className="text-gray-700">
                    In Front of 96 Shop, Kanasiya Naka, Maksi, Madhya Pradesh -
                    465106
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 text-teal-500" />
                  <a
                    href="tel:+919993349816"
                    className="text-gray-700 hover:text-teal-500"
                  >
                    +91 9993349816, +91 9131170076
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-teal-500" />
                  <a
                    href="mailto:sanjeevaniarogyakendra@gmail.com"
                    className="text-gray-700 hover:text-teal-500"
                  >
                    sanjeevaniarogyakendra@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-teal-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-colors"
                >
                  Book a Consultation Online
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
