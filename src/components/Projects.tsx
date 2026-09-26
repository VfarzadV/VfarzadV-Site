"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import ProjectModal from "./ProjectModal";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  fullDetails: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  border: string;
}

const projects: Project[] = [
  {
    title: "Premium Shop",
    description:
      "یک فروشگاه آنلاین مدرن با رابط کاربری جذاب، سبد خرید بهینه و تجربه کاربری روان برای خرید محصولات پرمیوم.",
    fullDetails:
      "این پروژه یک اپلیکیشن کامل تجارت الکترونیک (E-commerce) توسعه‌یافته با Next.js است که شامل بهینه‌سازی‌های Technical SEO (JSON-LD، Open Graph)، مدیریت استیت پیشرفته، کاتالوگ محصولات و استقرار موفق روی Vercel می‌شود.",
    tags: ["Next.js", "TailwindCSS", "React", "TypeScript"],
    liveUrl: "https://premium-shop-rho.vercel.app",
    githubUrl: "https://github.com/VfarzadV/premium-shop",
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Movie Explorer",
    description:
      "پلتفرمی جذاب برای جستجو، کشف و مشاهده اطلاعات فیلم‌ها و سریال‌ها با اتصال به API‌های معتبر سینمایی.",
    fullDetails:
      "مجموعه‌ای از ابزارها برای بررسی و جستجوی فیلم‌ها همراه با سیستم امتیازدهی ستاره‌ای، لیست علاقه‌مندی‌ها (Watchlist) با استفاده از React Context، و اتصال به TMDB API با ساختار بهینه و واکنش‌گرا.",
    tags: ["React", "TypeScript", "TMDB API", "Tailwind"],
    liveUrl: "",
    githubUrl: "https://github.com/VfarzadV/movie-explorer",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "My Gaming Site",
    description:
      "وب‌سایت اختصاصی گیمینگ با طراحی تاریک (Dark Mode) و فضایی کاملاً گیمرپسند برای معرفی بازی‌ها و اخبار.",
    fullDetails:
      "یک وب‌سایت تک‌صفحه‌ای (SPA) الهام‌گرفته از تم‌های مدرن گیمینگ با پیاده‌سازی انیمیشن‌های روان توسط Framer Motion، منوهای داینامیک و ریسپانسیو کامل.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/VfarzadV/my-gaming-site",
    gradient: "from-emerald-500/20 to-blue-500/20",
    border: "group-hover:border-emerald-500/50",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden transition-colors duration-300"
      dir="rtl"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              پروژه‌های{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                منتخب
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl font-light">
              نگاهی به برخی از جدیدترین و بهترین پروژه‌های متن‌باز من که در
              گیت‌هاب توسعه داده‌ام. (روی کارت‌ها کلیک کنید)
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://github.com/VfarzadV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-100 dark:bg-white/3 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 group whitespace-nowrap w-fit shadow-xs"
          >
            <GithubIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <span className="font-outfit font-medium tracking-wider">
              github.com/VfarzadV
            </span>
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className={`group relative p-6 rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-[#09090b]/50 border border-gray-200 dark:border-white/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full cursor-pointer shadow-lg dark:shadow-none ${project.border}`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`}
              />
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors">
                  <FolderGit2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="GitHub Repository"
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:border-white/10"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-outfit tracking-wide"
                dir="ltr"
              >
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 grow">
                {project.description}
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-outfit font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
