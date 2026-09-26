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
  title: "فرزاد | توسعه‌دهنده فرانت‌اند و ری‌اکت",
  description:
    "پورتفولیو شخصی فرزاد، توسعه‌دهنده وب متخصص در React، Next.js، TypeScript و Tailwind CSS",
  keywords: [
    "Front-end Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "فرزاد",
    "برنامه‌نویس وب",
  ],
  authors: [{ name: "VfarzadV" }],
  openGraph: {
    title: "فرزاد | پورتفولیو توسعه‌دهنده فرانت‌اند",
    description: "نمونه‌کارها و مهارت‌های تخصصی در حوزه وب مدرن",
    url: "https://domain.com",
    siteName: "VfarzadV Portfolio",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${outfit.variable}`}
    >
      <body className="font-vazirmatn bg-white text-gray-900 dark:bg-[#09090b] dark:text-white antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
