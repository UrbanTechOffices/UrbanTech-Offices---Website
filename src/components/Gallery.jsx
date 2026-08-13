import React from "react";
import { Link } from "react-router-dom";

const locations = [
  { name: "Electronic City", path: "/electronic-city" },
  { name: "Whitefield", path: "/whitefield" },
  { name: "Marathahalli", path: "/marathahalli" },
  { name: "Koramangala", path: "/koramangala" },
  { name: "Indira Nagar", path: "/indira-nagar" },
  { name: "Sarjapur Road", path: "/sarjapur-road" },
  { name: "Hebbal", path: "/hebbal" },
  { name: "MG Road", path: "/mg-road" },
  { name: "Bannerghatta Road", path: "/bannerghatta-road" },
  { name: "HSR Layout", path: "/hsr-layout" },
  { name: "Jayanagar", path: "/jayanagar" },
  { name: "Central Bangalore", path: "/central-bangalore" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {locations.map((loc) => (
        <Link
          key={loc.path}
          to={loc.path}
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <div className="h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-md mb-4 flex items-center justify-center text-emerald-700 font-semibold text-lg">
            📍 {loc.name}
          </div>
          <p className="text-slate-600 text-sm">
            Explore premium office spaces in {loc.name}, designed for productivity and convenience.
          </p>
        </Link>
      ))}
    </div>
  );
}
