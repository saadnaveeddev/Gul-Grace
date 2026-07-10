import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { BrushDivider, GoldFlakes } from "@/components/ResinDecorations";

export const Route = createFileRoute("/custom-order")({
  head: () => ({
    meta: [
      { title: "Custom Resin Gifts & Keepsakes Pakistan | Start Your Order | Gul & Grace" },
      {
        name: "description",
        content:
          "Create personalized resin gifts and custom keepsakes in Pakistan. Send your flowers, names, dates, and memories — we handcraft them into timeless resin pieces.",
      },
      { property: "og:title", content: "Custom Orders | Gul & Grace" },
      { property: "og:description", content: "Send your flowers, names, dates, and memories — handcrafted into timeless resin keepsakes." },
      { property: "og:url", content: "/custom-order" },
    ],
    links: [{ rel: "canonical", href: "/custom-order" }],
  }),
  component: CustomOrderPage,
});

const productTypes = ["Jewelry", "Keychain", "Bookmark", "Tray", "Coaster", "Wedding Bouquet Block", "Custom Memory Piece"];
const occasions = ["Birthday", "Wedding", "Nikkah", "Anniversary", "Graduation", "Memorial", "Friendship", "Self Gift", "Other"];
const stepTitles = ["Product Type", "Occasion", "Reference", "Your Details", "Review"];

const inputCls = "h-12 w-full rounded-xl border border-primary/25 bg-card/80 backdrop-blur-sm px-4 text-sm outline-none focus:border-primary transition-shadow focus:shadow-[0_0_16px_rgba(183,155,108,0.12)]";

function CustomOrderPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    productType: "",
    occasion: "",
    referenceFile: "",
    referenceNotes: "",
    name: "",
    phone: "",
    city: "",
    address: "",
    colors: "",
    memory: "",
    deliveryDate: "",
    budget: "",
  });

  const canNext =
    (step === 0 && !!form.productType) ||
    step === 1 || // Occasion is optional
    step === 2 ||
    (step === 3 && !!form.name && !!form.phone && !!form.city);

  const buildWhatsAppMessage = () => {
    const parts = [
      "Hello Gul & Grace! I'd like to discuss a custom order.",
      "",
      `*Product:* ${form.productType}`
    ];
    
    if (form.occasion) parts.push(`*Occasion:* ${form.occasion}`);
    if (form.colors) parts.push(`*Preferred Colors:* ${form.colors}`);
    if (form.budget) parts.push(`*Budget:* ${form.budget}`);
    if (form.deliveryDate) parts.push(`*Delivery Date:* ${form.deliveryDate}`);
    if (form.referenceNotes) parts.push(`*Reference/Notes:* ${form.referenceNotes}`);
    if (form.memory) parts.push(`*Memory/Story:* ${form.memory}`);
    
    parts.push("");
    parts.push("*My Details:*");
    parts.push(`Name: ${form.name}`);
    parts.push(`Phone: ${form.phone}`);
    parts.push(`City: ${form.city}`);
    if (form.address) parts.push(`Address: ${form.address}`);
    
    if (form.referenceFile) {
        parts.push(`\n*(I will also share a reference file)*`);
    }

    return parts.join("\n");
  };

  const whatsappSummary = waLink(buildWhatsAppMessage());

  if (submitted) {
    return (
      <main className="relative">
        <div className="absolute inset-0 watercolor-blush pointer-events-none" />
        <GoldFlakes count={10} />
        <div className="container-luxe flex min-h-[70vh] items-center justify-center py-20 relative z-10">
          <div className="max-w-lg text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary/80">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <h1 className="mt-6 font-display text-3xl">Thank you.</h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Your memory request has been received. Our team will contact you on
              WhatsApp shortly.
            </p>
            <a href={whatsappSummary} target="_blank" rel="noreferrer" className="btn-gold mt-7">
              <MessageCircle className="h-4 w-4" /> Message Us Now
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative">
      {/* Header */}
      <section className="relative py-16 watercolor-gold overflow-hidden">
        <GoldFlakes count={8} />
        <div className="container-luxe max-w-3xl text-center relative z-10">
          <p className="eyebrow">Custom Orders</p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">Create a Keepsake That <span className="brush-underline">Belongs Only to You</span></h1>
          <p className="mt-3 text-sm text-muted-foreground">For the memories too special to leave behind.</p>
          <BrushDivider className="mt-5" />
        </div>
      </section>

      <div className="container-luxe max-w-3xl py-10">
        {/* Mobile Step Title */}
        <div className="mb-4 text-center sm:hidden animate-fade-in">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Step {step + 1} of 5: {stepTitles[step]}
          </span>
        </div>

        {/* Progress — resin blob steps */}
        <div className="mb-10 flex items-center justify-between gap-1">
          {stepTitles.map((t, i) => (
            <div key={t} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`grid h-9 w-9 place-items-center text-xs transition-all duration-500 ${
                  i < step
                    ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(183,155,108,0.3)]"
                    : i === step
                      ? "border-2 border-primary text-primary shadow-[0_0_12px_rgba(183,155,108,0.15)]"
                      : "border border-border text-muted-foreground"
                }`}
                style={{ borderRadius: i < step ? '40% 60% 55% 45% / 50% 40% 60% 50%' : '50%' }}
              >
                {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </div>
              <span className={`hidden text-[0.6rem] uppercase tracking-[0.14em] sm:block ${i === step ? "text-primary" : "text-muted-foreground"}`}>
                {t}
              </span>
            </div>
          ))}
        </div>

        <div className="resin-card rounded-[2rem] p-6 sm:p-9">
          {step === 0 && (
            <div>
              <h2 className="font-display text-xl">Choose Your Piece</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {productTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setForm({ ...form, productType: t })}
                    className={`rounded-[1.5rem] px-4 py-5 text-sm transition-all duration-300 ${
                      form.productType === t
                        ? "resin-card border-primary/50 bg-secondary/60 text-foreground shadow-[0_4px_16px_rgba(183,155,108,0.15)]"
                        : "border border-border hover:border-primary/40 hover:shadow-[0_2px_12px_rgba(183,155,108,0.1)]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="font-display text-xl">Select the Occasion <span className="text-sm text-muted-foreground font-normal">(Optional)</span></h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {occasions.map((o) => (
                  <button
                    key={o}
                    onClick={() => setForm({ ...form, occasion: o })}
                    className={`rounded-[1.5rem] px-4 py-5 text-sm transition-all duration-300 ${
                      form.occasion === o
                        ? "resin-card border-primary/50 bg-secondary/60 text-foreground shadow-[0_4px_16px_rgba(183,155,108,0.15)]"
                        : "border border-border hover:border-primary/40 hover:shadow-[0_2px_12px_rgba(183,155,108,0.1)]"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-display text-xl">Share Your Flowers or Memory</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Upload a photo of your flowers, a design reference, or anything that helps us understand your memory.
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setForm({ ...form, referenceFile: e.target.files?.[0]?.name ?? "" })}
                className="mt-5 block w-full rounded-[1.5rem] border border-dashed border-primary/40 bg-secondary/20 p-6 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border file:border-primary/50 file:bg-card file:px-5 file:py-2.5 file:text-sm file:text-foreground transition-shadow hover:shadow-[0_4px_16px_rgba(183,155,108,0.1)]"
              />
              {form.referenceFile && <p className="mt-2 text-xs text-primary">Attached: {form.referenceFile}</p>}
              <textarea
                placeholder="Describe your reference, text, or memory (optional)"
                value={form.referenceNotes}
                onChange={(e) => setForm({ ...form, referenceNotes: e.target.value })}
                rows={4}
                className="mt-4 w-full rounded-xl border border-primary/25 bg-card/80 backdrop-blur-sm px-4 py-3 text-sm outline-none focus:border-primary transition-shadow focus:shadow-[0_0_16px_rgba(183,155,108,0.12)]"
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-display text-xl">Your Details</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input placeholder="Full name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                <input placeholder="Phone / WhatsApp number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                <input placeholder="City *" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
                <input placeholder="Delivery address (optional)" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputCls} />
                <input placeholder="Preferred colors (optional)" value={form.colors} onChange={(e) => setForm({ ...form, colors: e.target.value })} className={inputCls} />
                <input placeholder="Preferred delivery date (optional)" value={form.deliveryDate} onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })} className={inputCls} />
                <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputCls}>
                  <option value="">Budget range (optional)</option>
                  <option>Under Rs. 2,000</option>
                  <option>Rs. 2,000 – 5,000</option>
                  <option>Rs. 5,000 – 15,000</option>
                  <option>Above Rs. 15,000</option>
                </select>
              </div>
              <textarea
                placeholder="Your memory or story — tell us what this piece means to you (optional)"
                value={form.memory}
                onChange={(e) => setForm({ ...form, memory: e.target.value })}
                rows={4}
                className="mt-3 w-full rounded-xl border border-primary/25 bg-card/80 backdrop-blur-sm px-4 py-3 text-sm outline-none focus:border-primary transition-shadow focus:shadow-[0_0_16px_rgba(183,155,108,0.12)]"
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="font-display text-xl">Review Your Request</h2>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ["Product", form.productType],
                  ["Occasion", form.occasion || "—"],
                  ["Reference", form.referenceFile || "—"],
                  ["Notes", form.referenceNotes || "—"],
                  ["Name", form.name],
                  ["Phone", form.phone],
                  ["City", form.city],
                  ["Address", form.address || "—"],
                  ["Colors", form.colors || "—"],
                  ["Delivery date", form.deliveryDate || "—"],
                  ["Budget", form.budget || "—"],
                  ["Memory", form.memory || "—"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-primary/10 pb-2.5">
                    <dt className="shrink-0 text-muted-foreground">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} className="btn-outline-gold">Back</button>
            ) : <span />}
            {step < 4 ? (
              <button
                onClick={() => canNext && setStep(step + 1)}
                disabled={!canNext}
                className="btn-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
            ) : (
              <a href={whatsappSummary} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle className="h-4 w-4" /> Get Order Info on WhatsApp</a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
