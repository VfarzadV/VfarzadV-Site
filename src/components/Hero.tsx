"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Code2, Sparkles, Terminal, Cpu, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-10 bg-gray-50 dark:bg-[#09090b] transition-colors duration-300"
      dir="rtl"
    >
      <style>{`
        @keyframes smoothFloat {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-16px) translateZ(0); }
        }
        .css-float-animation {
          animation: smoothFloat 4s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <motion.div
        animate={{ scale: 1.15, opacity: 0.35 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: 1.2, opacity: 0.25 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="container relative z-10 mx-auto px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-right"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-blue-500/10 border border-blue-500/20 text-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-300 font-medium">
              توسعه‌دهنده فرانت‌اند و نرم افزار
            </span>
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.2] text-gray-900 dark:text-white drop-shadow-lg">
            خلق رابط‌های <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              سریع، شیک و ماندگار
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl font-light">
            توسعه پروژه‌های وب با معماری بهینه، رابط‌های شیشه‌ای مدرن و تجربه‌ای
            روان با قدرت{" "}
            <span className="text-gray-900 dark:text-white font-medium">
              Next.js
            </span>{" "}
            و{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Tailwind CSS
            </span>
            .
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium flex items-center gap-2 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                مشاهده پروژه‌ها
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="#skills"
              className="px-7 py-3.5 rounded-2xl backdrop-blur-md bg-white/70 dark:bg-white/3 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-medium hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 flex items-center gap-2 group shadow-sm dark:shadow-none"
            >
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              مهارت‌های من
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
          dir="ltr"
        >
          <div className="css-float-animation w-full rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-[#09090b]/80 border border-gray-200 dark:border-white/10 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="flex items-center justify-between pb-5 border-b border-gray-200 dark:border-white/10 mb-5 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono flex items-center gap-1.5 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-none">
                <Terminal className="w-3.5 h-3.5" /> config.ts
              </span>
            </div>
            <div className="font-mono text-[15px] leading-loose space-y-1 text-left relative z-10">
              <p className="text-purple-600 dark:text-purple-400">
                <span className="text-pink-600 dark:text-pink-500">const</span>{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  developer
                </span>{" "}
                = &#123;
              </p>
              <p className="text-gray-700 dark:text-gray-300 pl-6">
                name:{" "}
                <span className="text-green-600 dark:text-green-400">
                  &apos;Farzad&apos;
                </span>
                ,
              </p>
              <p className="text-gray-700 dark:text-gray-300 pl-6">
                role:{" "}
                <span className="text-green-600 dark:text-green-400">
                  &apos;Front-End Engineer&apos;
                </span>
                ,
              </p>
              <p className="text-gray-700 dark:text-gray-300 pl-6">
                stack: [
                <span className="text-amber-600 dark:text-yellow-300">
                  &apos; React &apos;
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-yellow-300">
                  &apos; Next.js &apos;
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-yellow-300">
                  &apos; TypeScript &apos;
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-yellow-300">
                  &apos; Tailwind &apos;
                </span>
                ],
              </p>
              <p className="text-gray-700 dark:text-gray-300 pl-6 flex items-center gap-2">
                status:{" "}
                <span className="text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  &apos; Coding... &apos;
                </span>
              </p>
              <p className="text-purple-600 dark:text-purple-400">&#125;;</p>
            </div>
            <div
              className="grid grid-cols-2 gap-4 pt-6 mt-2 relative z-10"
              dir="rtl"
            >
              <div className="p-4 rounded-2xl bg-gray-50/50 dark:bg-white/2 border border-gray-200/60 dark:border-white/5 flex items-center gap-4 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 shrink-0">
                  <Zap className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">
                    پرفورمنس
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    100 / 100
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50/50 dark:bg-white/2 border border-gray-200/60 dark:border-white/5 flex items-center gap-4 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Cpu className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">
                    معماری
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Clean Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
