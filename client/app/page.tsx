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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Jost:wght@300;400;500&display=swap');
 
        .hero-font { font-family: 'Cormorant Garamond', serif; }
        .body-font { font-family: 'Jost', sans-serif; }
 
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
 
        .float-anim { animation: float 8s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .fade-up-1 { animation: fadeUp 1s ease forwards; opacity: 0; }
        .fade-up-2 { animation: fadeUp 1s ease 0.2s forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 1s ease 0.4s forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 1s ease 0.6s forwards; opacity: 0; }
        .fade-in { animation: fadeIn 1.5s ease 0.3s forwards; opacity: 0; }
 
        .shimmer-text {
          background: linear-gradient(90deg, #67e8f9, #ffffff, #22d3ee, #ffffff, #67e8f9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
 
        .hero-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .hero-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .hero-btn:hover::before { left: 100%; }
        .hero-btn:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(34,211,238,0.3); }
 
        .logo-container {
          filter: drop-shadow(0 0 30px rgba(34,211,238,0.4));
          animation: float 6s ease-in-out infinite;
        }
 
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(34,211,238,0.15);
          animation: rotate-slow linear infinite;
        }
 
        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent);
          animation: scan 3s ease-in-out infinite;
        }
 
        .stat-card {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(34,211,238,0.15);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(34,211,238,0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
 
        .grid-bg {
          background-image: 
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
 
      {/* HERO */}
      <section
        id="home"
        className="h-screen flex items-center justify-center px-6 relative overflow-hidden grid-bg body-font"
      >
        {/* DEEP BACKGROUND */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 40%, #0a3d5c 0%, #071A26 45%, #030e18 100%)"
        }} />
 
        {/* ANIMATED RINGS */}
        <div className="ring" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animationDuration: '25s' }} />
        <div className="ring" style={{ width: 800, height: 800, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animationDuration: '35s', animationDirection: 'reverse' }} />
        <div className="ring" style={{ width: 1000, height: 1000, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animationDuration: '45s' }} />
 
        {/* GLOW BLOBS */}
        <div className="pulse-glow absolute rounded-full pointer-events-none" style={{
          width: 500, height: 500, top: '10%', left: '-10%',
          background: 'radial-gradient(circle, #0891b2, transparent)'
        }} />
        <div className="pulse-glow absolute rounded-full pointer-events-none" style={{
          width: 400, height: 400, bottom: '5%', right: '-5%',
          background: 'radial-gradient(circle, #164e63, transparent)',
          animationDelay: '2s'
        }} />
 
        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center text-white max-w-5xl mx-auto">
 
          {/* LOGO */}
          <div className="logo-container mb-10 fade-in">
            <div className="relative">
              <div className="scan-line" />
              <img
                src="/Images/logo.png.png"
                alt="Unity Dental Care"
                className="w-48 md:w-64 mx-auto"
                style={{ filter: 'brightness(1.1) contrast(1.05)' }}
              />
            </div>
          </div>
 
          {/* BADGE */}
          <div className="fade-up-1 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', color: '#67e8f9' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" style={{ animation: 'pulse-glow 2s infinite' }} />
              Tirana, Albania — Est. 2024
            </span>
          </div>
 
          {/* HEADLINE */}
          <div className="fade-up-2 mb-4">
            <h1 className="hero-font text-6xl md:text-8xl font-light tracking-tight leading-none">
              <span className="text-white/90">Unity</span>
              <span className="shimmer-text font-semibold"> Dental</span>
              <span className="text-white/90"> Care</span>
            </h1>
          </div>
 
          {/* DIVIDER */}
          <div className="fade-up-3 flex items-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5))' }} />
            <span className="text-cyan-400/60 text-xs tracking-widest uppercase">Luxury Dental Clinic</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.5), transparent)' }} />
          </div>
 
          {/* DESCRIPTION */}
          <p className="fade-up-3 text-white/50 text-lg max-w-md mb-10 font-light leading-relaxed">
            {t("home.description") || "Premium dental care with a personal touch. Your smile deserves the finest."}
          </p>
 
          {/* BUTTONS */}
          <div className="fade-up-4 flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#booking" className="hero-btn px-8 py-3.5 rounded-full font-medium text-black"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #0891b2)' }}>
              {t("home.cta") || "Book Appointment"}
            </a>
            <a href="#services" className="hero-btn px-8 py-3.5 rounded-full font-medium text-white"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>
              {t("home.services") || "Our Services"}
            </a>
          </div>
 
          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-lg" style={{ opacity: 1 }}>

            {[
              { num: "10+", label: t("home.stat1") || "Years Experience" },
              { num: "5K+", label: t("home.stat2") || "Happy Patients" },
              { num: "15+", label: t("home.stat3") || "Specialists" },
            ].map((s, i) => (
              <div key={i} className="stat-card rounded-2xl p-4 text-center"
                style={{ background: 'rgba(7,26,38,0.8)' }}>
                <div className="hero-font text-2xl font-semibold text-cyan-400">{s.num}</div>
                <div className="text-white/40 text-xs mt-1 font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
 
        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #071A26)' }} />
 
        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in">
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(34,211,238,0.5), transparent)' }} />
        </div>
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