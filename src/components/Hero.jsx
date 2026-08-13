// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/backgrounds/bg1.jpg";

export default function Hero() {
  return (
    <header
      className="relative w-full min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            UrbanTech Offices
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-100 drop-shadow-md">
            Premium commercial office spaces in <strong>Bangalore</strong> — flexible leases & plug-and-play setups.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://wa.me/917892758647"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-emerald-400 text-slate-900 rounded-full font-semibold shadow-lg hover:bg-emerald-300 transition"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#featured"
              className="inline-block px-6 py-3 border border-slate-200 rounded-full text-slate-200 hover:bg-white/10 transition"
            >
              View Spaces
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
