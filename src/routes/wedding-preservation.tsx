import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import weddingHero from "@/assets/wedding-hero.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import prodBlock from "@/assets/prod-block.jpg";
import prodTray from "@/assets/prod-tray.jpg";
import prodPendant from "@/assets/prod-pendant.jpg";
import { waLink } from "@/lib/site";
import { BrushDivider, GoldFlakes, ResinFrame } from "@/components/ResinDecorations";

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

const resinShapes = [
  '30% 70% 66% 34% / 40% 30% 70% 60%',
  '60% 40% 30% 70% / 50% 60% 40% 50%',
  '40% 60% 55% 45% / 35% 55% 45% 65%',
  '50% 50% 40% 60% / 60% 40% 60% 40%',
];

const inputCls = "h-12 w-full rounded-xl border border-primary/25 bg-card/80 backdrop-blur-sm px-4 text-sm outline-none focus:border-primary transition-shadow focus:shadow-[0_0_16px_rgba(183,155,108,0.12)]";

function WeddingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", eventDate: "", details: "" });

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={weddingHero} alt="Bridal bouquet preserved in a clear resin block with wedding rings, by Gul & Grace Pakistan" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-transparent" />
        <div className="absolute inset-0 watercolor-blush opacity-40" />
        <GoldFlakes count={12} />
        <div className="container-luxe relative flex min-h-[70vh] items-center py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Wedding Preservation</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Your Flowers Held That Day. <em className="text-primary brush-underline">Let Them Hold It Forever.</em>
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              From your Nikkah to your rukhsati, your flowers carried the moment.
              We preserve them in resin so the memory never leaves your hands.
            </p>
            <a href={waLink("Hello Gul & Grace! I'd like a wedding bouquet preservation consultation.")} target="_blank" rel="noreferrer" className="btn-gold mt-8 w-full sm:w-auto justify-center">
              <MessageCircle className="h-4 w-4" /> Free WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* What we preserve */}
      <section className="relative py-24 watercolor-blush overflow-hidden">
        <GoldFlakes count={6} />
        <div className="container-luxe text-center relative z-10">
          <p className="eyebrow">What We Preserve</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Every Flower With a <span className="brush-underline">Story</span></h2>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
            {preserves.map((p) => (
              <span key={p} className="rounded-full resin-card px-5 py-2.5 text-sm transition-all hover:shadow-[0_4px_16px_rgba(183,155,108,0.15)]">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Options — organic shapes */}
      <section className="relative py-24 watercolor-sage overflow-hidden">
        <GoldFlakes count={8} />
        <div className="container-luxe relative z-10">
          <div className="mb-14 text-center">
            <p className="eyebrow">Product Options</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Ways to Keep Your Bouquet</h2>
            <BrushDivider className="mt-5" />
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {options.map((o, i) => (
              <div key={o.title} className="resin-card resin-card-hover rounded-[2rem] overflow-hidden">
                <div className="overflow-hidden resin-reveal" style={{ borderRadius: resinShapes[i % resinShapes.length] }}>
                  <img src={o.image} alt={o.title} width={768} height={768} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.05]" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to send */}
      <section className="container-luxe py-24 resin-section">
        <div className="mb-14 text-center">
          <p className="eyebrow">How to Send Flowers</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Three Gentle Steps</h2>
          <BrushDivider className="mt-5" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Book Your Slot", d: "Message us before your event so we can reserve your preservation slot and guide you." },
            { n: "02", t: "Pack With Care", d: "Wrap stems in damp tissue, box the bouquet, and courier it to us within 3–5 days." },
            { n: "03", t: "We Take Over", d: "We dry, arrange, and cast your flowers by hand — and share updates along the way." },
          ].map((s) => (
            <div key={s.n} className="resin-card rounded-[2rem] p-8 text-center resin-card-hover gold-flakes">
              <p className="font-display text-3xl text-primary">{s.n}</p>
              <h3 className="mt-3 font-display text-xl">{s.title || s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry form */}
      <section className="relative py-24 watercolor-gold overflow-hidden">
        <GoldFlakes count={8} />
        <div className="container-luxe max-w-2xl relative z-10">
          <div className="mb-8 text-center">
            <p className="eyebrow">Pricing Inquiry</p>
            <h2 className="mt-2 font-display text-3xl">Request a Price Guide</h2>
            <BrushDivider className="mt-5" />
          </div>
          {sent ? (
            <div className="resin-card rounded-[2rem] p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary/80">
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
              className="resin-card rounded-[2rem] p-7 sm:p-9"
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
                className="mt-3 w-full rounded-xl border border-primary/25 bg-card/80 backdrop-blur-sm px-4 py-3 text-sm outline-none focus:border-primary transition-shadow focus:shadow-[0_0_16px_rgba(183,155,108,0.12)]"
              />
              <button type="submit" className="btn-gold mt-5 w-full">Send Inquiry</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="container-luxe max-w-3xl py-24 resin-section">
        <div className="mb-10 text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-2 font-display text-3xl">Wedding Preservation FAQs</h2>
          <BrushDivider className="mt-5" />
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="resin-card rounded-[1.5rem] overflow-hidden transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left font-medium"
              >
                {f.q}
                <span className="text-primary text-lg">{openFaq === i ? "−" : "+"}</span>
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
