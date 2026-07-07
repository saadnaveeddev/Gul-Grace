import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import weddingHero from "@/assets/wedding-hero.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import prodBlock from "@/assets/prod-block.jpg";
import prodTray from "@/assets/prod-tray.jpg";
import prodPendant from "@/assets/prod-pendant.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/wedding-preservation")({
  head: () => ({
    meta: [
      { title: "Wedding Bouquet Preservation Pakistan | Gul & Grace" },
      {
        name: "description",
        content:
          "Preserve your Nikkah flowers, bridal bouquet, or engagement flowers forever in resin. Premium wedding bouquet preservation in Pakistan by Gul & Grace.",
      },
      { property: "og:title", content: "Wedding Bouquet Preservation Pakistan | Gul & Grace" },
      { property: "og:description", content: "Preserve your Nikkah flowers, bridal bouquet, or engagement flowers forever in resin." },
      { property: "og:url", content: "/wedding-preservation" },
    ],
    links: [{ rel: "canonical", href: "/wedding-preservation" }],
  }),
  component: WeddingPage,
});

const preserves = [
  "Bridal bouquets", "Nikkah & Baraat flowers", "Engagement flowers",
  "Mehndi florals", "Anniversary roses", "Special event flowers",
];

const options = [
  { image: prodBlock, title: "Resin Blocks", text: "Your full bouquet preserved in a crystal-clear block." },
  { image: prodTray, title: "Trays & Frames", text: "Functional keepsakes made from your flowers." },
  { image: prodPendant, title: "Jewelry", text: "Petals from your bouquet, worn close to your heart." },
  { image: catWedding, title: "Keepsake Sets", text: "A block, jewelry, and mini charms from one bouquet." },
];

const faqs = [
  { q: "How soon should I send my flowers?", a: "Ideally within 3–5 days of your event. The fresher the flowers, the better the preservation. Contact us before your wedding day so we can reserve your slot." },
  { q: "How do I send my flowers to you?", a: "We'll guide you step by step on WhatsApp — wrap the stems in damp tissue, keep the bouquet in a box, and send it via courier or drop-off. Detailed instructions are shared once you book." },
  { q: "How long does preservation take?", a: "Drying takes 3–4 weeks, and resin work another 2–4 weeks. Most pieces are delivered within 6–8 weeks — slow, careful work that lasts forever." },
  { q: "What if my flowers have already dried?", a: "Dried and pressed flowers can often still be preserved beautifully. Send us a photo on WhatsApp and we'll advise honestly." },
  { q: "How much does it cost?", a: "Pricing depends on the piece and bouquet size — blocks start around Rs. 12,000. Send an inquiry below and we'll share a full price guide." },
];

const inputCls = "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none focus:border-primary";

function WeddingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", eventDate: "", details: "" });

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={weddingHero} alt="Bridal bouquet preserved in a clear resin block with wedding rings, by Gul & Grace Pakistan" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="container-luxe relative flex min-h-[70vh] items-center py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Wedding Preservation</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Your Flowers Held That Day. <em className="text-primary">Let Them Hold It Forever.</em>
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              From your Nikkah to your rukhsati, your flowers carried the moment.
              We preserve them in resin so the memory never leaves your hands.
            </p>
            <a href={waLink("Hello Gul & Grace! I'd like a wedding bouquet preservation consultation.")} target="_blank" rel="noreferrer" className="btn-gold mt-8">
              <MessageCircle className="h-4 w-4" /> Free WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* What we preserve */}
      <section className="container-luxe py-20 text-center">
        <p className="eyebrow">What We Preserve</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Every Flower With a Story</h2>
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
          {preserves.map((p) => (
            <span key={p} className="rounded-full border border-primary/40 bg-card px-5 py-2.5 text-sm">{p}</span>
          ))}
        </div>
      </section>

      {/* Options */}
      <section className="bg-secondary/50 py-20">
        <div className="container-luxe">
          <div className="mb-10 text-center">
            <p className="eyebrow">Product Options</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Ways to Keep Your Bouquet</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {options.map((o) => (
              <div key={o.title} className="overflow-hidden rounded-2xl border border-primary/25 bg-card">
                <img src={o.image} alt={o.title} width={768} height={768} loading="lazy" className="aspect-square w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-display text-lg">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to send */}
      <section className="container-luxe py-20">
        <div className="mb-10 text-center">
          <p className="eyebrow">How to Send Flowers</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Three Gentle Steps</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Book Your Slot", d: "Message us before your event so we can reserve your preservation slot and guide you." },
            { n: "02", t: "Pack With Care", d: "Wrap stems in damp tissue, box the bouquet, and courier it to us within 3–5 days." },
            { n: "03", t: "We Take Over", d: "We dry, arrange, and cast your flowers by hand — and share updates along the way." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-primary/25 bg-card p-7 text-center">
              <p className="font-display text-3xl text-primary">{s.n}</p>
              <h3 className="mt-3 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry form */}
      <section className="bg-secondary/50 py-20">
        <div className="container-luxe max-w-2xl">
          <div className="mb-8 text-center">
            <p className="eyebrow">Pricing Inquiry</p>
            <h2 className="mt-2 font-display text-3xl">Request a Price Guide</h2>
          </div>
          {sent ? (
            <div className="rounded-3xl border border-primary/25 bg-card p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-5 font-display text-xl">Thank you.</p>
              <p className="mt-2 text-sm text-muted-foreground">We'll contact you on WhatsApp with our full price guide shortly.</p>
              <a
                href={waLink(`Hello Gul & Grace! I'd like the wedding preservation price guide.\nName: ${form.name}\nCity: ${form.city}\nEvent date: ${form.eventDate}\nDetails: ${form.details}`)}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-6"
              >
                <MessageCircle className="h-4 w-4" /> Message Us Now
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
                <input required placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
                <input placeholder="Event date" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} className={inputCls} />
              </div>
              <textarea
                placeholder="Tell us about your flowers and what you'd love to create"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                rows={4}
                className="mt-3 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button type="submit" className="btn-gold mt-5 w-full">Send Inquiry</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="container-luxe max-w-3xl py-20">
        <div className="mb-8 text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-2 font-display text-3xl">Wedding Preservation FAQs</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-primary/25 bg-card">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left font-medium"
              >
                {f.q}
                <span className="text-primary">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
