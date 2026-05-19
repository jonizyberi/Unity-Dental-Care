"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGlobeEurope } from "react-icons/fa";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  const currentLang = i18n.language;

  const changeLanguage = (lng: string) => {
    if (lng === currentLang) return;
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  // ✅ Performant section detection
  useEffect(() => {
    const sections = ["home", "services", "lab", "tourism", "booking"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: t("navbar.home") },
    { id: "services", label: t("navbar.services") },
    { id: "lab", label: t("navbar.lab") },
    { id: "tourism", label: t("navbar.tourism") },
    { id: "booking", label: t("navbar.booking") }
  ];

  const languages = [
    { code: "sq", label: "SQ 🇦🇱" },
    { code: "en", label: "EN 🇬🇧" },
    { code: "it", label: "IT 🇮🇹" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#071A26]/80 backdrop-blur-md text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex flex-col leading-tight">
  <h1 className="text-2xl font-bold">
    Unity<span className="text-cyan-400">DentalCare</span>
  </h1>
  <span className="text-xs text-cyan-400 tracking-widest">
    Luxury Dental Clinic
  </span>
</div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium relative">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative transition ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              {item.label}

              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 -bottom-2 h-0.5 w-full bg-cyan-400"
                />
              )}
            </a>
          ))}
        </div>

        {/* LANGUAGE SWITCH */}
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <FaGlobeEurope className="text-cyan-400 text-lg" />

          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                currentLang === lang.code
                  ? "bg-cyan-400 text-black"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}