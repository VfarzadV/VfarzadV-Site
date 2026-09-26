"use client";

import { motion } from "framer-motion";
import { Layout, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "زبان‌ها و فریم‌ورک‌ها",
    icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "HTML",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Three.js",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "استایل‌دهی و طراحی",
    icon: <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    skills: [
      "CSS",
      "Flex & Grid",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "Less",
      "Figma",
      "Adobe XD",
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "ابزارها، استیت و معماری",
    icon: <Wrench className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    skills: [
      "Zustand",
      "Redux",
      "RESTful API",
      "SEO",
      "Unit Test",
      "Git",
      "NPM",
      "Webpack",
      "VS Code",
      "Emmet",
    ],
    gradient: "from-emerald-500/10 to-green-500/10",
    border: "group-hover:border-emerald-500/50",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden transition-colors duration-300"
      dir="rtl"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              مهارت‌ها و{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                تخصص‌های من
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-light">
              مجموعه‌ای از تکنولوژی‌ها و ابزارهایی که برای توسعه رابط‌های کاربری
              مدرن و بهینه به کار می‌برم.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative p-8 rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-white/2 border border-gray-200 dark:border-white/15 transition-all duration-500 hover:-translate-y-1 shadow-lg dark:shadow-none ${category.border} flex flex-col`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`}
              />
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 text-sm font-outfit font-medium rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all cursor-default"
                    dir="ltr"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
