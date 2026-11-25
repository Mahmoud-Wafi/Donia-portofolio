import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";
import { SiteProvider } from "@/components/SiteProvider";
import { dict, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: dict.en.meta.title,
  description: dict.en.meta.description,
  openGraph: {
    title: dict.en.meta.title,
    description: dict.en.meta.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1322" },
  ],
};

// Runs before first paint so the saved theme and direction never flash.
const earlyScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;if(localStorage.getItem('lang')==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl'}}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Web Developer",
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  sameAs: [SITE.instagram],
  knowsLanguage: ["Arabic", "English"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
