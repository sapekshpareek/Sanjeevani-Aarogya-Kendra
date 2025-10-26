import React from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = {
  solutions: [
    { name: "Results", href: "#results" },
    { name: "Services", href: "#services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="h-10 w-auto"
                src="/images/logo2.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-2xl text-white">
                Sanjeevani Aarogya Kendra
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Delivering stunning, lasting results for complex skin conditions.
            </p>
            {/* Social media links can go here */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-teal-400"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-teal-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Contact Us
                </h3>
                <div className="mt-6 space-y-4 text-sm text-gray-300">
                  <p>
                    In Front of 96 Dukan, Kanasiya Naka, Sanjeevani Arogya
                    Kendra, Maksi Dist. Shajapur 465106
                  </p>
                  <p>
                    <a
                      href="tel: +919993349816, +919131170076"
                      className="hover:text-teal-400"
                    >
                      +919993349816, +919131170076
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto: Sanjeevaniarogyakendra@gmail.com"
                      className="hover:text-teal-400"
                    >
                      sanjeevaniarogyakendra@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Dr. Ravi Pandey. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
