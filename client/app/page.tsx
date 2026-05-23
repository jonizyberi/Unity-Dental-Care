"use client";

import { useTranslation } from "react-i18next";
import WhatsApp from "@/components/WhatsApp";
import ClinicServices from "@/components/ClinicServices";
import DentalLab from "@/components/DentalLab";
import DentalTourism from "@/components/DentalTourism";
import Footer from "@/components/Footer";
import BookingSystem from "@/components/BookingSystem";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="pt-24">

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-100"
          style={{
            backgroundImage: "url('/Images/background.jpeg.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-linear-to-b from-cyan-500/10 via-transparent to-black" />
      </section>

      {/* SERVICES */}
      <section id="services">
        <ClinicServices />
      </section>

      {/* LAB */}
      <section id="lab">
        <DentalLab />
      </section>

      {/* TOURISM */}
      <section id="tourism">
        <DentalTourism />
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 bg-[#0B2233]">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("booking.title")}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <BookingSystem />
        </div>
      </section>

      <WhatsApp />
      <Footer />
    </main>
  );
}