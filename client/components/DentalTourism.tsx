"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaComments,
  FaCalendarCheck
} from "react-icons/fa";

const icons = [
  FaComments,
  FaPlane,
  FaHotel,
  FaComments,
  FaCalendarCheck,
  FaMapMarkedAlt
];

export default function DentalTourism() {
  const { t } = useTranslation();

  const services = t("tourism.services", { returnObjects: true }) as any[];

  return (
    <section className="py-24 px-6 bg-[#06141f] text-white">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          {t("tourism.title")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(services) &&
            services.map((service, idx) => {
              const Icon = icons[idx];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-cyan-400 text-2xl">
                      <Icon />
                    </span>

                    <h3 className="text-white text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    {service.items.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
        </div>

      </div>
    </section>
  );
}