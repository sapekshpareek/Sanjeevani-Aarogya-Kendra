import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeInView from '../animations/FadeInView';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <FadeInView>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/clinic.jpg"
                alt="Clinic Location"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Begin Your Journey to Clear Skin
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Take the first step towards the results you deserve. Contact us to schedule your private consultation with Dr. Pandey.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <MapPinIcon className="h-6 w-6 text-teal-500" />
                  <span className="text-gray-700">123 Health St, Wellness City, 45678</span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 text-teal-500" />
                  <a href="tel:+1234567890" className="text-gray-700 hover:text-teal-500">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-teal-500" />
                  <a href="mailto:consult@drpandey.com" className="text-gray-700 hover:text-teal-500">consult@drpandey.com</a>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/contact" className="rounded-md bg-teal-400 px-5 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-colors">
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