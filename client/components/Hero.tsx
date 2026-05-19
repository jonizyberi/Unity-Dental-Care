"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ClinicServices from "@/components/ClinicServices";
import DentalLab from "@/components/DentalLab";
import DentalTourism from "@/components/DentalTourism";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#050A10] text-white">

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* SERVICES - SCROLL ANIMATED */}
      <section id="services" className="relative py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ClinicServices />
        </motion.div>
      </section>

      {/* 3D DENTAL LAB */}
      <section id="lab" className="relative py-24 px-6 overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[url('/lab-bg.jpg')] bg-cover bg-center bg-fixed opacity-10"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <DentalLab />
        </motion.div>
      </section>

      {/* DENTAL TOURISM */}
      <section id="tourism" className="relative py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <DentalTourism />
        </motion.div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 px-6 bg-[#071A26] border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Book Your Consultation</h2>
            <p className="text-gray-300 mb-8">
              Reserve your appointment online and our team will contact you shortly.
            </p>

            <form className="grid gap-4">
              <input type="text" placeholder="Full Name" className="p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none"/>
              <input type="email" placeholder="Email" className="p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none"/>
              <input type="tel" placeholder="Phone Number" className="p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none"/>
              <textarea placeholder="Message" rows={4} className="p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none"/>
              <button type="submit" className="bg-cyan-400 text-black font-semibold py-4 rounded-lg hover:scale-105 transition">Send Booking Request</button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <WhatsApp />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}