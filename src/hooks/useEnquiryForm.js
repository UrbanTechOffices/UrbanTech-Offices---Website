// src/hooks/useEnquiryForm.js
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const emptyForm = (fixedArea = "") => ({
  name: "",
  phone: "",
  email: "",
  area: fixedArea,
  preferred_date: "",
  preferred_time: "",
  message: "",
});

/**
 * Shared enquiry form logic used by both the homepage consultation
 * section and each LocationPage. Handles field state, validation,
 * the Supabase insert, and triggering the confirmation/notification
 * email Edge Function.
 *
 * @param {Object} options
 * @param {string} [options.fixedArea] - if provided, area is locked to this value (used on LocationPage)
 */
export function useEnquiryForm({ fixedArea = "" } = {}) {
  const [formData, setFormData] = useState(emptyForm(fixedArea));
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [formError, setFormError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (value) => {
    setFormData((prev) => ({ ...prev, preferred_date: value }));
  };

  const handleTimeChange = (value) => {
    setFormData((prev) => ({ ...prev, preferred_time: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormStatus("error");
      setFormError("Please fill in your name, email and mobile number.");
      return;
    }

    setFormStatus("submitting");
    setFormError("");

    const enquiryId = crypto.randomUUID();

    const { error } = await supabase.from("enquiries").insert([
      {
        id: enquiryId,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        area: formData.area || null,
        preferred_date: formData.preferred_date || null,
        preferred_time: formData.preferred_time.trim() || null,
        message: formData.message.trim() || null,
      },
    ]);

    if (error) {
      setFormStatus("error");
      setFormError("Something went wrong. Please try again in a moment.");
      return;
    }

    supabase.functions
      .invoke("send-enquiry-email", { body: { enquiryId } })
      .catch((err) => console.error("Email notification failed:", err));

    setFormStatus("success");
    setFormData(emptyForm(fixedArea));
  };

  return {
    formData,
    setFormData,
    formStatus,
    formError,
    handleFormChange,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  };
}
