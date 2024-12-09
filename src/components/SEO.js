import Head from "next/head";

export default function SEO({
  title = "Sanjeevni Arogya Kendra - Dr. Ravi Pandey",
  description = "Expert dermatological care and treatments for vitiligo, psoriasis, and other skin conditions in Maksi and Ujjain.",
  keywords = "dermatologist, skin care, vitiligo treatment, psoriasis treatment, Maksi, Ujjain",
  ogImage = "/images/og-image.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
