import Head from "next/head";

/**
 * SEO component
 * Props:
 * - title: string
 * - description: string
 * - keywords: string | string[]
 * - canonical: string (absolute URL)
 * - ogImage: string (absolute or relative)
 * - noindex: boolean (default false)
 * - jsonLd: object | object[] (structured data to embed)
 */
export default function SEO({
  title = "Sanjeevani Aarogya Kendra - Dr. Ravi Pandey",
  description =
    "Expert dermatology for vitiligo, psoriasis, pigmentary disorders and comprehensive skin care in Maksi, Ujjain, Indore, Dewas and Shajapur.",
  keywords = [
    "Dr. Ravi Pandey",
    "Sanjeevani Aarogya Kendra",
    "skin doctor near me",
    "dermatologist",
    "vitiligo doctor",
    "psoriasis treatment",
    "safed daag doctor",
    "सफेद दाग डॉक्टर",
    "त्वचा रोग विशेषज्ञ",
    "त्वचा डॉक्टर",
    "Maksi",
    "Ujjain",
    "Indore",
    "Dewas",
    "Shajapur",
  ],
  canonical,
  ogImage = "/images/og-image.jpg",
  noindex = false,
  jsonLd,
}) {
  const keywordsContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Sanjeevani Aarogya Kendra" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]),
          }}
        />
      )}
    </Head>
  );
}
