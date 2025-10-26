<<<<<<< HEAD
import MainLayout from "@/components/layout/MainLayout";
=======
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6
import SEO from "@/components/SEO";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us | Schedule a Consultation"
        description="Contact Dr. Ravi Pandey's clinic to schedule your consultation for expert dermatological care."
      />
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                We're here to help you on your journey to better skin. Reach out
                to schedule your appointment or ask any questions you may have.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd className="flex">
                    <MapPinIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
<<<<<<< HEAD
                      In Front of 96 Shop, Kanasiya Naka, Maksi, Madhya Pradesh
                      - 465106
=======
                      In front of 96 dukan, Kanasiya Naka, Sanjeevani Arogya
                      Kendra, Maksi Dist. Shajapur 465106
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6
                    </span>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
<<<<<<< HEAD
                    <span className="ml-3">+91 9993349816, +91 9131170076</span>
=======
                    <span className="ml-3">+919993349816, +919131170076</span>
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
<<<<<<< HEAD
                      sanjeevaniarogyakendra@gmail.com
=======
                      Sanjeevaniarogyakendra@gmail.com
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              {isSubmitted ? (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Thank you!
                      </h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>
                          Your message has been sent successfully. We will get
                          back to you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-y-6"
                >
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder="Phone (Optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder="Message"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-teal-400 py-3 px-6 text-base font-medium text-gray-900 shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
