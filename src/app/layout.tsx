import { Vazirmatn, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ThemeInitializer from "@/components/ThemeInitializer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vfarzad-v-site.vercel.app/"),
  title: {
    default: "VfarzadV profile | (Front-End Developer)",
    template: "%s | VfarzadV profile",
  },
  description:
    "VfarzadV profile، توسعه‌دهنده فرانت‌اند در تهران با تخصص در ساخت برنامه‌های وب مدرن با React, Next.js, TypeScript و Tailwind CSS.",
  keywords: [
    "VfarzadV",
    "توسعه‌دهنده فرانت‌اند",
    "برنامه‌نویس وب",
    "Front-end Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Tehran",
  ],
  authors: [{ name: "VfarzadV", url: "https://github.com/VfarzadV" }],
  creator: "Farzad",
  openGraph: {
    title: "VfarzadV | Front-end Developer",
    description: "نمونه کارها و پروژه‌های وب من با محوریت React و Next.js",
    url: "https://vfarzad-v-site.vercel.app/",
    siteName: "VfarzadV Portfolio",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "VfarzadV Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VfarzadV | Front-end Developer",
    description: "توسعه‌دهنده رابط کاربری با تخصص در React و Next.js",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://vfarzad-v-site.vercel.app//#website",
        url: "https://vfarzad-v-site.vercel.app/",
        name: "VfarzadV Portfolio",
        description: "نمونه کارها و مهارت‌های توسعه وب",
        inLanguage: "fa-IR",
      },
      {
        "@type": "Person",
        "@id": "https://vfarzad-v-site.vercel.app//#person",
        name: "VfarzadV",
        url: "https://vfarzad-v-site.vercel.app/",
        jobTitle: "Front-end Developer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tehran",
          addressCountry: "IR",
        },
        knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        sameAs: ["https://github.com/VfarzadV", "https://t.me/VfarzadV"],
      },
    ],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${outfit.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-vazirmatn bg-white text-gray-900 dark:bg-[#09090b] dark:text-white antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
