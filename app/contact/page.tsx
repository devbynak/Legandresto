"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MapPin, Instagram } from "lucide-react";

export default function Page() {
  const gmap = "https://www.google.com/maps?q=Salah+al+din+metro+station,+gate+no+2+Muteena,+deira,+dubai&output=embed";
  const rm = useReducedMotion();

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const canSubmit = Boolean(form.name.trim() && isValidEmail(form.email) && form.message.trim());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitting(false);
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setSubmitting(false);
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={rm ? {} : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: rm ? 0 : 0.4 }}
      className="space-y-10"
    >
      <header>
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="text-zinc-300">We&apos;re easy to find, and even easier to love.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="text-gold" />
            <span>Salah Al Din Metro Station, Gate 2, Muteena, Deira, Dubai</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-gold" />
            <a href="tel:+971561183828" className="hover:text-gold numbers">+971 56 118 3828</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-gold" />
            <a href="tel:042225820" className="hover:text-gold numbers">04 222 5820</a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a className="btn" href="https://www.instagram.com/legrandrestaurant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Le Grandresto on Instagram"><Instagram size={18}/>Instagram</a>
            <a className="btn" href="https://maps.google.com/?q=Salah%20al%20din%20metro%20station%2C%20gate%20no%202%20Muteena%2C%20deira%2C%20dubai" target="_blank" rel="noopener noreferrer"><MapPin size={18}/>Directions</a>
            <a className="btn bg-white text-ink hover:bg-white/90" href="tel:+971561183828"><Phone size={18}/>Call Now</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gold">Send us a message</h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-zinc-300">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={form.name.trim() === ""}
                  className="w-full rounded-lg bg-black/20 border border-zinc-800/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-zinc-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={form.email !== "" && !isValidEmail(form.email)}
                  className="w-full rounded-lg bg-black/20 border border-zinc-800/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-zinc-300">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg bg-black/20 border border-zinc-800/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="+971 ..."
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-zinc-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={form.message.trim() === ""}
                className="w-full rounded-lg bg-black/20 border border-zinc-800/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-y"
                placeholder="Tell us how we can help"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="btn bg-gold text-ink hover:bg-gold/90 disabled:opacity-50"
                disabled={!canSubmit || submitting}
                aria-disabled={!canSubmit || submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
              <a className="btn bg-white text-ink hover:bg-white/90" href="tel:+971561183828"><Phone size={18}/> Call Us</a>
            </div>

            <p className="text-sm" aria-live="polite">
              {status === "success" && <span className="text-green-400">Message sent! We’ll get back shortly.</span>}
              {status === "error" && <span className="text-red-400">Something went wrong. Please try again.</span>}
            </p>
          </form>
        </div>
      </section>

      {/* Map (desktop only to improve mobile performance) */}
      <section className="hidden md:block">
        <motion.iframe
          initial={rm ? {} : { opacity: 0 }}
          whileInView={rm ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          src={gmap}
          className="w-full h-[380px] rounded-2xl border border-zinc-800/60"
          loading="lazy"
          title="Le Grandresto location map"
        />
      </section>
    </motion.div>
  );
}
