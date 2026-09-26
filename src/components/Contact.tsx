"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

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

const contactMethods = [
  {
    title: "ایمیل",
    value: "farzadvatandoust.ps@gmail.com",
    icon: <Mail className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
    href: "mailto:farzadvatandoust.ps@gmail.com",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "hover:border-rose-500/50",
  },
  {
    title: "تلگرام",
    value: "@VfarzadV",
    icon: (
      <MessageCircle className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    ),
    href: "https://t.me/VfarzadV",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-500/50",
  },
  {
    title: "گیت‌هاب",
    value: "VfarzadV",
    icon: <GithubIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    href: "https://github.com/VfarzadV",
    gradient: "from-gray-500/10 to-slate-500/10",
    border: "hover:border-gray-400/50",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-24 pb-8 px-6 overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            ارتباط با{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-purple-500 dark:from-rose-400 dark:to-purple-400">
              من
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            برای پیشنهاد همکاری، توسعه پروژه‌های جدید یا صرفاً یک گپ دوستانه، از
            طریق راه‌های زیر با من در تماس باشید.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative p-6 rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-white/2 border border-gray-200/80 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 ${method.border} flex flex-col items-center text-center shadow-sm dark:shadow-none`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-b ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`}
              />
              <div className="p-4 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors mb-4 inline-flex items-center justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {method.title}
              </h3>
              <p
                className="text-gray-500 dark:text-gray-400 font-outfit text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                dir="ltr"
              >
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-white/10 gap-4"
        >
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <span>توسعه داده شده با</span>
            <span className="text-rose-500 animate-pulse">❤️</span>
            <span>توسط</span>
            <span className="text-gray-900 dark:text-white font-bold">
              VfarzadV
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>تهران</span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
