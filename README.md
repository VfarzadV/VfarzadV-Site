<div align="center">
  <img src="src/app/favicon.ico" alt="Portfolio Logo" width="70" />
  
  # 🌐 پورتفولیو و وب‌سایت شخصی (VfarzadV Portfolio)
  
  **تجربه‌ای مدرن از توسعه وب با المان‌های سه‌بعدی تعاملی و رابط کاربری مینیمال.**
  
  [![Deploy with Vercel](https://vercelbadge.vercel.app/api/VfarzadV/VfarzadV-Site)](https://vercel.com/new/clone?repository-url=https://github.com/VfarzadV/VfarzadV-Site)
  <br />
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](#)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#)

  ### 🚀 [**مشاهده نسخه زنده (Live Demo)**](https://vfarzad-v-site.vercel.app/)
</div>

---

## 📋 فهرست مطالب
- [درباره پروژه](#-درباره-پروژه)
- [ویژگی‌های کلیدی](#-ویژگیهای-کلیدی)
- [معماری و فنی](#-معماری-و-فنی)
- [تکنولوژی‌های استفاده شده](#-تکنولوژیهای-استفاده-شده)
- [ساختار پوشه‌ها](#-ساختار-پوشهها)
- [راه‌اندازی پروژه](#-راهاندازی-پروژه)
- [نقشه راه](#-نقشه-راه)
- [توسعه‌دهنده](#-توسعهدهنده)

---

## 📖 درباره پروژه

**وب‌سایت شخصی و پورتفولیو** فرزاد وطن‌دوست، یک فضای دیجیتال حرفه‌ای برای نمایش پروژه‌ها، مهارت‌ها و نمونه‌کارهاست که با استفاده از **Next.js (App Router)** و ابزارهای مدرن فرانت‌اند توسعه یافته است. این پلتفرم با هدف ارائه تجربه‌ای روان، سریع و تعاملی طراحی شده و تلفیقی از طراحی مینیمال، المان‌های گرافیکی سه‌بعدی و بهینه‌سازی فنی بالا (SEO & Performance) را به نمایش می‌گذارد.

---

## ✨ ویژگی‌های کلیدی

- **🧊 المان‌ها و ویترین سه‌بعدی:** استفاده از مدل‌های تعاملی و جذاب سه‌بعدی با کمک `React Three Fiber` و `Three.js` مستقیم در مرورگر.
- **🎨 طراحی واکنش‌گرا و مدرن (Mobile-First):** رابط کاربری کاملاً ریسپانسیو که در تمامی دستگاه‌ها (موبایل، تبلت و دسکتاپ) به بهترین شکل نمایش داده می‌شود.
- **⚡ پرفورمنس بالا:** بهره‌گیری از قابلیت‌های رندرینگ سرور (SSR/RSC) در Next.js برای بارگذاری فوق‌العاده سریع صفحات.
- **🌓 حالت تاریک و روشن (Dark/Light Mode):** سازگاری کامل با تم‌های مختلف برای راحتی چشم کاربر در ساعات مختلف شبانه‌روز.
- **🔍 بهینه‌سازی سئو (Technical SEO):** تنظیم متاتگ‌های پیشرفته و ساختار بهینه برای موتورهای جستجو.

---

## 🧠 معماری و نکات فنی (Under The Hood)

* **استفاده از اپ‌روتر (App Router):** ساختاردهی مدرن برای مدیریت بهتر مسیرها، لایه‌ها و بهینه‌سازی بارگذاری کامپوننت‌ها.
* **تفکیک Server & Client:** رعایت دقیق اصول معماری Next.js جهت کاهش حجم جاوااسکریپت ارسالی به کلاینت و افزایش سرعت تعامل.
* **تایپ‌پشتیبانی کامل (TypeScript):** توسعه ایمن و بدون خطا با استفاده از تایپ‌های ساختاریافته.

---

## 💻 تکنولوژی‌های استفاده شده (Tech Stack)

- **فریم‌ورک اصلی:** Next.js (App Router)
- **کتابخانه پایه:** React, TypeScript
- **استایل‌دهی:** Tailwind CSS
- **گرافیک 3D:** Three.js, @react-three/fiber, @react-three/drei
- **آیکون‌ها:** Lucide React

---

## 📂 ساختار پوشه‌ها (Folder Structure)

```text
src/
├── app/              # مسیرها و صفحات اصلی پروژه (App Router)
├── components/       # کامپوننت‌های قابل استفاده مجدد (UI Components & 3D Models)
├── public/           # فایل‌های استاتیک (تصاویر، مدل‌های 3D و فونت‌ها)
└── utils/            # توابع کمکی و ابزارهای جانبی

🚀 راه‌اندازی پروژه

برای نصب و اجرای این پروژه روی سیستم لوکال خود، مراحل زیر را دنبال کنید:
پیش‌نیازها

    نصب بودن Node.js (نسخه 18 به بالا)

    پکیج‌منجر npm یا yarn

مراحل نصب:

    کلون کردن ریپازیتوری:
    Bash

    git clone [https://github.com/VfarzadV/VfarzadV-Site.git](https://github.com/VfarzadV/VfarzadV-Site.git)

    ورود به پوشه پروژه:
    Bash

    cd VfarzadV-Site

    نصب وابستگی‌ها:
    Bash

    npm install

    اجرای سرور توسعه:
    Bash

    npm run dev

مرورگر خود را باز کرده و آدرس http://localhost:3000 را وارد کنید.
🗺️ نقشه راه (Roadmap)

    [x] راه‌اندازی اولیه و ساختاردهی با Next.js

    [x] طراحی رابط کاربری و ریسپانسیو کردن صفحات

    [x] یکپارچه‌سازی مدل‌ها و ویترین‌های سه‌بعدی

    [ ] افزودن بخش وبلاگ و مقالات تخصصی

👤 توسعه‌دهنده

فرزاد وطن‌دوست (توسعه‌دهنده فرانت‌اند)

    گیت‌هاب: @VfarzadV

    ایمیل: farzadvatandoust.ps@gmail.com
