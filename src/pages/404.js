import Link from "next/link";
<<<<<<< HEAD
=======
import FadeInView from "@/components/animations/FadeInView";
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6

export default function Custom404() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
<<<<<<< HEAD
      <div className="text-center">
        <p className="text-base font-semibold text-teal-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-teal-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
          >
            Go back home
          </Link>
        </div>
      </div>
=======
      <FadeInView>
        <div className="text-center">
          <p className="text-base font-semibold text-teal-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-teal-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </FadeInView>
>>>>>>> 62b2f899d10dfea855abc97411fc1999da10c8b6
    </main>
  );
}
