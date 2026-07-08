import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { SOCIALS, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Gul & Grace | Custom Keepsakes & Resin Gifts Pakistan" },
      {
        name: "description",
        content:
          "Contact Gul & Grace for custom resin gifts, preserved flower jewelry, and wedding bouquet preservation in Pakistan. Reach us on WhatsApp, Instagram, or email.",
      },
      { property: "og:title", content: "Contact | Gul & Grace" },
      { property: "og:description", content: "Reach Gul & Grace on WhatsApp, Instagram, or email for custom resin keepsakes in Pakistan." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inputCls = "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none focus:border-primary";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  return (
    <main className="container-luxe py-14">
      <div className="mb-10 text-center">
        <p className="eyebrow">Get in Touch</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">We'd Love to Hear From You</h1>
        <p className="mt-3 text-sm text-muted-foreground">Questions, custom ideas, or just a memory you'd like to preserve.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div>
          {sent ? (
            <div className="rounded-3xl border border-primary/25 bg-card p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-5 font-display text-xl">Message received.</p>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you shortly. For a faster reply, message us on WhatsApp.</p>
              <a
                href={waLink(`Hello Gul & Grace!\n${form.subject ? `Subject: ${form.subject}\n` : ""}${form.message}`)}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-6"
              >
                <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form
              className="rounded-3xl border border-primary/25 bg-card p-7 sm:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                <input required placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              </div>
              <input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={`${inputCls} mt-3`} />
              <textarea
                required
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-3 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button type="submit" className="btn-gold mt-5 w-full">Send Message</button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4">
          <a href={waLink("Hello Gul & Grace!")} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-primary/25 bg-card p-5 transition-colors hover:bg-secondary/40">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary"><MessageCircle className="h-5 w-5 text-primary" /></span>
            <span>
              <span className="block font-medium">WhatsApp</span>
              <span className="text-sm text-muted-foreground">Fastest way to reach us — orders & consultations</span>
            </span>
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-primary/25 bg-card p-5 transition-colors hover:bg-secondary/40">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary"><Instagram className="h-5 w-5 text-primary" /></span>
            <span>
              <span className="block font-medium">Instagram</span>
              <span className="text-sm text-muted-foreground">@gulngracepk — daily making process</span>
            </span>
          </a>
          <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-primary/25 bg-card p-5 transition-colors hover:bg-secondary/40">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold text-primary">TT</span>
            <span>
              <span className="block font-medium">TikTok</span>
              <span className="text-sm text-muted-foreground">Resin pours, unboxings & before/after</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-primary/25 bg-card p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary"><Mail className="h-5 w-5 text-primary" /></span>
            <span>
              <span className="block font-medium">Email</span>
              <span className="text-sm text-muted-foreground">[gulngracepk@gmail.com]</span>
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-primary/25 bg-card p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary"><MapPin className="h-5 w-5 text-primary" /></span>
            <span>
              <span className="block font-medium">Pakistan</span>
              <span className="text-sm text-muted-foreground">Nationwide delivery, all major cities</span>
            </span>
          </div>

          <div className="rounded-2xl border border-primary/25 bg-secondary/40 p-6">
            <p className="eyebrow mb-3">Quick Answers</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/wedding-preservation" className="text-primary underline-offset-4 hover:underline">How do I send my wedding flowers? →</Link></li>
              <li><Link to="/custom-order" className="text-primary underline-offset-4 hover:underline">How do custom orders work? →</Link></li>
              <li><Link to="/shop" className="text-primary underline-offset-4 hover:underline">What can I order right now? →</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
