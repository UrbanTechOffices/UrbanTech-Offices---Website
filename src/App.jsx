// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import LocationPage from "./pages/LocationPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <div className="min-h-screen w-full relative">
      <ScrollToTop />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
        </Routes>
      </main>

      <footer className="w-full py-8 bg-gradient-to-b from-[#0b1220] to-black border-t border-emerald-400/10 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <strong className="text-lg text-emerald-400">UrbanTech Offices</strong>
            <div className="text-sm text-slate-400">Bangalore • Commercial Office Spaces</div>
          </div>
          <div className="text-sm text-slate-400 flex flex-col md:flex-row md:gap-6 text-center md:text-right">
            <a href="tel:+917892758647" className="hover:text-emerald-400 transition-colors">+91 78927 58647</a>
            <a href="mailto:urbantechoffices@urbantechoffices.com" className="hover:text-emerald-400 transition-colors">urbantechoffices@urbantechoffices.com</a>
            <span>© {new Date().getFullYear()} UrbanTech Offices</span>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
