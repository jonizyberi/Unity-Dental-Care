"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#06141f] text-white border-t border-white/10 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* LOGO + INFO */}
        <div>
          <h2 className="text-2xl font-bold">
            Unity<span className="text-cyan-400">DentalCare</span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm">
            Luxury Dental Clinic & 3D Dental Laboratory in Albania.
          </p>

          <div className="flex gap-4 mt-6 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="https://www.instagram.com/unitydental.care/"><FaInstagram /></a>
            <a href="https://wa.me/355XXXXXXXXX">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Tirana, Albania
            </p>

            <p className="flex items-center gap-2">
              <FaPhone /> +355 XX XXX XXX
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope /> info@unitydentalcare.com
            </p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md bg-white/5 border border-white/10 w-full"
          />

          <button className="mt-3 bg-cyan-400 text-black py-2 rounded-md font-semibold w-full">
            Subscribe
          </button>
        </div>

        {/* MAP */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>

          <iframe
            src="https://maps.app.goo.gl/wyNpUfiSoQF9tJ7p7"
            className="w-full h-40 rounded-lg border border-white/10"
            loading="lazy"
          />
        </div>

      </div>

      <div className="text-center py-6 border-t border-white/10 text-gray-500 text-sm">
        © {new Date().getFullYear()} UnityDentalCare & 3DPrinterAL. All rights reserved.
      </div>
    </motion.footer>
  );
}