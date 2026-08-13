// supabase/functions/send-enquiry-email/index.ts
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const INTERNAL_NOTIFY_EMAIL = "urbantechoffices@gmail.com";
const SENDER_ADDRESS = "UrbanTech Offices <onboarding@resend.dev>"; // swap once a domain is verified
const CONTACT_WHATSAPP = "+91 97784 30948";
const CONTACT_EMAIL = "urbantechoffices@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(value) {
  if (!value) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildCustomerEmail(enquiry) {
  const {
    name,
    phone,
    email,
    area,
    preferred_date,
    preferred_time,
    message,
  } = enquiry;

  return `
  <div style="font-family: Arial, sans-serif; color: #0b1220; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #059669;">Thank you for reaching out, ${escapeHtml(name)}!</h2>
    <p>We've received your enquiry and a member of the UrbanTech Offices team will get back to you shortly${
      preferred_time ? `, around your preferred time (<strong>${escapeHtml(preferred_time)}</strong>)` : ""
    }.</p>

    <h3 style="margin-top: 24px;">Your submitted details</h3>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 6px 0; color: #475569;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Area</td><td style="padding: 6px 0;">${escapeHtml(area) || "-"}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Preferred Date</td><td style="padding: 6px 0;">${escapeHtml(preferred_date) || "-"}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Preferred Time</td><td style="padding: 6px 0;">${escapeHtml(preferred_time) || "-"}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Message</td><td style="padding: 6px 0;">${escapeHtml(message) || "-"}</td></tr>
    </table>

    <p style="margin-top: 24px;">If you need to reach us sooner, feel free to contact us directly:</p>
    <p>
      WhatsApp: ${CONTACT_WHATSAPP}<br/>
      Email: ${CONTACT_EMAIL}
    </p>

    <p style="margin-top: 24px;">
      Warm regards,<br/>
      <strong>The UrbanTech Offices Team</strong>
    </p>
  </div>`;
}

function buildInternalEmail(enquiry) {
  const {
    name,
    phone,
    email,
    area,
    preferred_date,
    preferred_time,
    message,
  } = enquiry;

  return `
  <div style="font-family: Arial, sans-serif; color: #0b1220; max-width: 600px; margin: 0 auto;">
    <h2>New Enquiry Received</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 6px 0; color: #475569;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Area</td><td style="padding: 6px 0;">${escapeHtml(area) || "-"}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Preferred Date</td><td style="padding: 6px 0;">${escapeHtml(preferred_date) || "-"}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Preferred Time</td><td style="padding: 6px 0;">${escapeHtml(preferred_time) || "-"}</td></tr>
      <tr><td style="padding: 6px 0; color: #475569;">Message</td><td style="padding: 6px 0;">${escapeHtml(message) || "-"}</td></tr>
    </table>
  </div>`;
}

async function sendEmail({ to, subject, html, replyTo }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: SENDER_ADDRESS,
      to: [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend error (${res.status}): ${errText}`);
  }

  return res.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { enquiryId } = await req.json();

    if (!enquiryId) {
      return new Response(JSON.stringify({ error: "enquiryId is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { data: enquiry, error: fetchError } = await supabaseAdmin
      .from("enquiries")
      .select("*")
      .eq("id", enquiryId)
      .single();

    if (fetchError || !enquiry) {
      return new Response(JSON.stringify({ error: "Enquiry not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    await sendEmail({
      to: enquiry.email,
      subject: "Thank you for your enquiry — UrbanTech Offices",
      html: buildCustomerEmail(enquiry),
      replyTo: INTERNAL_NOTIFY_EMAIL,
    });

    await sendEmail({
      to: INTERNAL_NOTIFY_EMAIL,
      subject: `New Enquiry: ${enquiry.name} (${enquiry.area || "No area specified"})`,
      html: buildInternalEmail(enquiry),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
