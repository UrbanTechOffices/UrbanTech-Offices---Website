// src/pages/LocationPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS } from "../data/locations";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import TimeSlotPicker from "../components/TimeSlotPicker";
import ImageCarousel from "../components/ImageCarousel";
import { LOCATION_GALLERY_IMAGES } from "../assets/locations";

export default function LocationPage() {
  const { slug } = useParams();
  const location = LOCATIONS.find((loc) => loc.slug === slug);

  const {
    formData,
    formStatus,
    formError,
    handleFormChange,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  } = useEnquiryForm({ fixedArea: location ? location.slug : "" });

  // If slug not found in LOCATIONS array
  if (!location) {
    return (
      <div className="text-center py-32 text-gray-600 text-lg">
        Location not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#04120f] p-4 md:p-8">
      {/* Framed container: header, teal middle, and footer are clipped to one
          rounded shape, so the border wraps continuously around all three */}
      <div className="max-w-[1700px] mx-auto rounded-3xl border border-white/80 overflow-hidden shadow-2xl">
        {/* Header */}
        <header className="bg-white py-8">
          <h1 className="text-3xl font-bold text-center text-slate-800">
            {location.name}
          </h1>
        </header>

        {/* Teal middle: form, carousel, about */}
        <div className="bg-[#0a2622]">
          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-6 md:px-8 py-10 grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Consultation Form */}
            <section className="bg-white p-6 rounded-xl shadow-xl">
              <h2 className="text-xl font-semibold mb-4 text-slate-800">
                Book a Consultation
              </h2>
              <p className="text-slate-600 mb-6 text-sm">
                Fill out your details and we’ll reach out to you about{" "}
                {location.name}.
              </p>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <input
                  type="text"
                  value={location.name}
                  readOnly
                  className="w-full border rounded-lg p-3 bg-gray-100 text-gray-700"
                />
                <TimeSlotPicker
                  variant="light"
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
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />

                {formStatus === "error" && (
                  <p className="text-red-500 text-sm">{formError}</p>
                )}
                {formStatus === "success" && (
                  <p className="text-emerald-600 text-sm">
                    Thanks! Your enquiry has been received — our team will reach out shortly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {formStatus === "submitting" ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </section>

            {/* Right: Image Gallery */}
            <section className="bg-white p-6 rounded-xl shadow-xl flex flex-col md:min-h-full">
              <h2 className="text-lg font-medium mb-4 text-slate-800">
                Explore {location.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {location.description}
              </p>
              <div className="flex-1 flex items-center">
                <ImageCarousel
                  images={LOCATION_GALLERY_IMAGES}
                  altPrefix={`${location.name} office space`}
                />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                Every UrbanTech Offices location is thoughtfully designed and
                fully equipped, offering premium interiors, high-speed
                connectivity, and dedicated support so your team can move in
                and get to work without delay. With flexible leasing terms
                tailored to businesses of every size, you get the freedom to
                scale up or down as your needs change. Book a consultation
                today and let us help you find the right fit for your team.
              </p>
            </section>
          </main>

          {/* About Section */}
          <section className="max-w-6xl mx-auto px-6 md:px-8 pb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              About {location.name}
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {location.about}
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t py-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} UrbanTech Offices — Premium Commercial Spaces in Bangalore
        </footer>
      </div>
    </div>
  );
}
