// src/components/TimeSlotPicker.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

// Builds ["9:00 AM", "9:15 AM", ... "7:45 PM"] — 9AM to 8PM, last bookable start 7:45PM
function generateTimeSlots() {
  const slots = [];
  const startMinutes = 9 * 60; // 9:00 AM
  const endMinutes = 20 * 60; // 8:00 PM (exclusive as a start time)

  for (let m = startMinutes; m < endMinutes; m += 15) {
    const hour24 = Math.floor(m / 60);
    const minute = m % 60;
    const period = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    const label = `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
    slots.push(label);
  }

  return slots;
}

const ALL_SLOTS = generateTimeSlots();

const THEME = {
  dark: {
    label: "text-slate-300",
    toggleWrap: "bg-white/10 border border-white/20",
    toggleActive: "bg-emerald-400 text-slate-900",
    toggleInactive: "text-slate-300",
    input:
      "w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400",
    slotFree:
      "bg-white/10 border border-white/20 text-white hover:bg-emerald-400 hover:text-slate-900",
    slotSelected: "bg-emerald-400 text-slate-900 border border-emerald-400",
    slotTaken: "bg-white/5 border border-white/10 text-slate-500 cursor-not-allowed",
    hint: "text-slate-400",
  },
  light: {
    label: "text-slate-600",
    toggleWrap: "bg-slate-100 border border-slate-200",
    toggleActive: "bg-emerald-500 text-white",
    toggleInactive: "text-slate-600",
    input:
      "w-full border border-slate-300 rounded-lg p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400",
    slotFree:
      "bg-white border border-slate-300 text-slate-700 hover:bg-emerald-500 hover:text-white",
    slotSelected: "bg-emerald-500 text-white border border-emerald-500",
    slotTaken: "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed",
    hint: "text-slate-500",
  },
};

/**
 * Props:
 * - date: string (yyyy-mm-dd) | ""
 * - time: string | ""
 * - onDateChange(dateString)
 * - onTimeChange(timeString)
 * - variant: "dark" | "light"  (matches the two page themes in this project)
 */
export default function TimeSlotPicker({
  date,
  time,
  onDateChange,
  onTimeChange,
  variant = "dark",
}) {
  const t = THEME[variant] || THEME.dark;
  const [mode, setMode] = useState("slot"); // "slot" | "custom"
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (mode !== "slot" || !date) {
      setBookedSlots([]);
      return;
    }

    let cancelled = false;
    setLoading(true);

    supabase
      .rpc("get_booked_slots", { p_date: date })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data) {
          setBookedSlots(data.map((row) => row.preferred_time).filter(Boolean));
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [date, mode]);

  const handleModeSwitch = (nextMode) => {
    setMode(nextMode);
    onTimeChange("");
  };

  return (
    <div className="space-y-3">
      {/* Mode toggle */}
      <div className={`inline-flex rounded-lg p-1 text-sm ${t.toggleWrap}`}>
        <button
          type="button"
          onClick={() => handleModeSwitch("slot")}
          className={`px-3 py-1.5 rounded-md transition ${
            mode === "slot" ? t.toggleActive : t.toggleInactive
          }`}
        >
          Pick a slot
        </button>
        <button
          type="button"
          onClick={() => handleModeSwitch("custom")}
          className={`px-3 py-1.5 rounded-md transition ${
            mode === "custom" ? t.toggleActive : t.toggleInactive
          }`}
        >
          Enter custom time
        </button>
      </div>

      {mode === "slot" ? (
        <>
          <label className={`block text-sm ${t.label}`}>
            Preferred Date
          </label>
          <input
            type="date"
            min={todayStr}
            value={date}
            onChange={(e) => {
              onDateChange(e.target.value);
              onTimeChange("");
            }}
            className={t.input}
          />

          {date && (
            <>
              <label className={`block text-sm ${t.label}`}>
                Preferred Time
              </label>

              {loading ? (
                <p className={`text-sm ${t.hint}`}>Checking availability...</p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
                  {ALL_SLOTS.map((slot) => {
                    const isTaken = bookedSlots.includes(slot);
                    const isSelected = time === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        disabled={isTaken}
                        onClick={() => onTimeChange(slot)}
                        className={`text-xs sm:text-sm py-2 rounded-lg transition ${
                          isTaken
                            ? t.slotTaken
                            : isSelected
                            ? t.slotSelected
                            : t.slotFree
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <label className={`block text-sm ${t.label}`}>
            Preferred Time (custom)
          </label>
          <input
            type="text"
            placeholder="e.g. Weekday evenings, or a specific time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className={t.input}
          />
        </>
      )}
    </div>
  );
}
