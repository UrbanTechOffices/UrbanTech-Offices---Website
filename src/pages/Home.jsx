// src/pages/Home.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { LOCATIONS } from "../data/locations";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import TimeSlotPicker from "../components/TimeSlotPicker";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Wifi,
  Users,
  Clock,
  Zap,
  Camera,
  ParkingCircle,
  Mail,
  Wind,
  Coffee,
  Sofa,
  Archive,
  Building2,
} from "lucide-react";
import CurvedDivider from "../components/CurvedDivider";
import bg1 from "../assets/backgrounds/bg1.jpg";
import bg2 from "../assets/backgrounds/bg2.jpg";
import bg3 from "../assets/backgrounds/bg3.jpg";
import bg4 from "../assets/backgrounds/bg4.jpg";

const AMENITIES = [
  { label: "High-Speed Internet", icon: Wifi },
  { label: "Meeting Rooms", icon: Users },
  { label: "24/7 Access", icon: Clock },
  { label: "Power Backup", icon: Zap },
  { label: "CCTV Security", icon: Camera },
  { label: "Parking", icon: ParkingCircle },
  { label: "Mail Handling", icon: Mail },
  { label: "Air Conditioning", icon: Wind },
  { label: "Breakout Zones", icon: Building2 },
  { label: "Free Beverages", icon: Coffee },
  { label: "Lounge Areas", icon: Sofa },
  { label: "Storage Units", icon: Archive },
];

const revealUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerParent = (stagger = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

/**
 * A section-scoped parallax background layer.
 * - Sized bigger than its section (top:-10%, height:120%) so it always
 *   has slack to move through without exposing an edge.
 * - Its own useScroll/useTransform, driven by ITS OWN ref, so the
 *   animation range is identical no matter where the section sits
 *   on the page.
 * - Content/dividers are rendered as siblings elsewhere, so they never move.
 */
function ParallaxLayer({ sectionRef, image, range }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.5 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{
          y,
          top: `calc(-10% - ${range}px)`,
          height: `calc(120% + ${range * 2}px)`,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute left-0 w-full"
      />
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const amenRef = useRef(null);
  const statsRef = useRef(null);
  const exploreRef = useRef(null);
  const consultRef = useRef(null);

  const {
    formData,
    formStatus,
    formError,
    handleFormChange,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  } = useEnquiryForm();

  return (
    <div className="overflow-x-hidden text-white bg-[#0b1220]">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col justify-center text-center overflow-hidden"
      >
        <ParallaxLayer sectionRef={heroRef} image={bg1} range={70} />

        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
            UrbanTech Offices
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-slate-200">
            Premium commercial office spaces in <strong>Bangalore</strong>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917892758647"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-slate-900 rounded-full font-semibold shadow-md transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="#explore"
              className="px-8 py-3 border border-white hover:bg-white hover:text-slate-900 rounded-full font-semibold transition"
            >
              View Spaces
            </a>
          </div>
        </motion.div>

        <CurvedDivider color="#0b1220" />
      </section>

      {/* AMENITIES */}
      <section
        ref={amenRef}
        className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden py-24"
      >
        <ParallaxLayer sectionRef={amenRef} image={bg2} range={50} />

        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
          className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-semibold mb-4">
            Everything You Need — No Extra Charge
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            Every UrbanTech workspace comes fully loaded with the essentials
            your team relies on daily.
          </p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerParent(0.08)}
          >
            {AMENITIES.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={i}
                variants={revealUp}
                whileHover={{ scale: 1.05, borderColor: "rgba(52,211,153,0.6)" }}
                className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg shadow-black/20 transition-colors flex flex-col items-center gap-3"
              >
                <div className="p-3 rounded-full bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-slate-100">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <CurvedDivider color="#0b1220" flip />
      </section>

      {/* STATS */}
      <section
        ref={statsRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24"
      >
        <ParallaxLayer sectionRef={statsRef} image={bg3} range={50} />

        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealUp}
          className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6"
        >
          {[
            { num: 10, label: "Years in Business" },
            { num: 3500, label: "Happy Clients" },
            { num: 2000, label: "Projects Completed" },
            { num: 50, label: "Team Members" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/10 text-center"
            >
              <h3 className="text-4xl font-bold text-emerald-400 mb-2">
                <CountUp end={stat.num} duration={3} />+
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <CurvedDivider color="#000000" />
      </section>

      {/* EXPLORE */}
      <section
        id="explore"
        ref={exploreRef}
        className="relative bg-black text-white py-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
            className="text-4xl font-semibold text-center mb-12"
          >
            Explore Office Spaces Across Bangalore
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerParent(0.12)}
          >
            {LOCATIONS.map((loc) => (
              <motion.div key={loc.slug} variants={revealUp}>
                <Link
                  to={`/locations/${loc.slug}`}
                  className="group block rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5 bg-black/60">
                    <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">
                      {loc.name}
                    </h3>

                    <p className="text-slate-300 text-sm mt-2 line-clamp-3">
                      {loc.about.slice(0, 110)}...
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CurvedDivider color="#0b1220" flip />
      </section>

      {/* CONSULTATION */}
      <section
        ref={consultRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden py-24"
      >
        <ParallaxLayer sectionRef={consultRef} image={bg4} range={50} />

        <div className="absolute inset-0 bg-black/70 z-[1]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent(0.15)}
          className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: quote */}
          <motion.div variants={revealUp}>
            <p className="text-emerald-400 uppercase tracking-widest text-sm font-semibold mb-4">
              Talk To Us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              &ldquo;The right office isn&rsquo;t just a location — it&rsquo;s
              a decision that shapes how your team works, grows and
              wins.&rdquo;
            </h2>
            <p className="text-slate-300 max-w-md">
              Book a free consultation and our team will help you find the
              perfect UrbanTech space for your business, at the right price
              and in the right location.
            </p>
          </motion.div>

          {/* Right: glass form */}
          <motion.form
            variants={revealUp}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-8 shadow-2xl shadow-black/30 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <select
              name="area"
              value={formData.area}
              onChange={handleFormChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="" disabled className="text-slate-500">
                Preferred Area
              </option>
              {LOCATIONS.map((loc) => (
                <option key={loc.slug} value={loc.slug} className="text-slate-900">
                  {loc.name}
                </option>
              ))}
            </select>
            <TimeSlotPicker
              variant="dark"
              date={formData.preferred_date}
              time={formData.preferred_time}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
            />
            <textarea
              name="message"
              placeholder="Anything else you'd like us to know? (optional)"
              value={formData.message}
              onChange={handleFormChange}
              rows={3}
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            {formStatus === "error" && (
              <p className="text-red-400 text-sm">{formError}</p>
            )}
            {formStatus === "success" && (
              <p className="text-emerald-400 text-sm">
                Thanks! Your enquiry has been received — our team will reach out shortly.
              </p>
            )}

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-emerald-400 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold py-3 rounded-lg transition"
            >
              {formStatus === "submitting" ? "Submitting..." : "Book Free Consultation"}
            </button>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}
