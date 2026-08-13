import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // npm i lucide-react

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 bg-emerald-400 text-slate-900 rounded-full p-3 shadow-lg hover:bg-emerald-300 transition z-50"
      >
        <ChevronUp size={22} />
      </button>
    )
  );
}
