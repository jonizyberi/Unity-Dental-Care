"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";

export default function BookingSystem() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  const submitBooking = async () => {
    if (!name || !email || !phone || !date) {
      alert(t("booking.required"));
      return;
    }

    try {
      setLoading(true);

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          date: date.toISOString()
        })
      });

      alert("Success!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setDate(null);
    } catch {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">

      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        {t("booking.title")}
      </h2>

      <div className="space-y-4">

        <input
          placeholder={t("booking.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 w-full rounded bg-black/20 text-white"
        />

        <input
          type="email"
          placeholder={t("booking.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-full rounded bg-black/20 text-white"
        />

        <input
          placeholder={t("booking.phone")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-3 w-full rounded bg-black/20 text-white"
        />

        <DatePicker
          selected={date}
          onChange={(d: Date | null) => setDate(d)}
          placeholderText={t("booking.date")}
          className="p-3 w-full rounded bg-black/20 text-white"
        />

        <textarea
          placeholder={t("booking.message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 w-full rounded bg-black/20 text-white"
        />

        <button
          onClick={submitBooking}
          disabled={loading}
          className="w-full bg-cyan-400 text-black py-3 rounded font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? t("booking.sending") : t("booking.submit")}
        </button>

      </div>
    </div>
  );
}
