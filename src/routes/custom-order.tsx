import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

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

const inputCls = "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none focus:border-primary";

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
    (step === 1 && !!form.occasion) ||
    step === 2 ||
    (step === 3 && !!form.name && !!form.phone && !!form.city);

  const whatsappSummary = waLink(
    `Hello Gul & Grace! I just submitted a custom order request.\n\nProduct: ${form.productType}\nOccasion: ${form.occasion}\nName: ${form.name}\nCity: ${form.city}\nColors: ${form.colors}\nBudget: ${form.budget}\nMemory: ${form.memory}`,
  );

  if (submitted) {
    return (
      <main className="container-luxe flex min-h-[70vh] items-center justify-center py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary">
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
      </main>
    );
  }

  return (
    <main className="container-luxe max-w-3xl py-14">
      <div className="mb-10 text-center">
        <p className="eyebrow">Custom Orders</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">Create a Keepsake That Belongs Only to You</h1>
        <p className="mt-3 text-sm text-muted-foreground">For the memories too special to leave behind.</p>
      </div>

      {/* Mobile Step Title */}
      <div className="mb-4 text-center sm:hidden animate-fade-in">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Step {step + 1} of 5: {stepTitles[step]}
        </span>
      </div>

      {/* Progress */}
      <div className="mb-10 flex items-center justify-between gap-1">
        {stepTitles.map((t, i) => (
          <div key={t} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className={`grid h-8 w-8 place-items-center rounded-full border text-xs ${
                i < step
                  ? "border-primary bg-primary text-primary-foreground"
                  : i === step
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </div>
            <span className={`hidden text-[0.6rem] uppercase tracking-[0.14em] sm:block ${i === step ? "text-primary" : "text-muted-foreground"}`}>
              {t}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-primary/25 bg-card p-6 sm:p-9">
        {step === 0 && (
          <div>
            <h2 className="font-display text-xl">Choose Your Piece</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {productTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setForm({ ...form, productType: t })}
                  className={`rounded-2xl border px-4 py-5 text-sm transition-colors ${
                    form.productType === t
                      ? "border-primary bg-secondary/60 text-foreground"
                      : "border-border hover:border-primary/60"
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
            <h2 className="font-display text-xl">Select the Occasion</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {occasions.map((o) => (
                <button
                  key={o}
                  onClick={() => setForm({ ...form, occasion: o })}
                  className={`rounded-2xl border px-4 py-5 text-sm transition-colors ${
                    form.occasion === o
                      ? "border-primary bg-secondary/60 text-foreground"
                      : "border-border hover:border-primary/60"
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
              className="mt-5 block w-full rounded-2xl border border-dashed border-primary/50 bg-secondary/30 p-6 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border file:border-primary/50 file:bg-card file:px-5 file:py-2.5 file:text-sm file:text-foreground"
            />
            {form.referenceFile && <p className="mt-2 text-xs text-primary">Attached: {form.referenceFile}</p>}
            <textarea
              placeholder="Describe your reference, text, or memory (optional)"
              value={form.referenceNotes}
              onChange={(e) => setForm({ ...form, referenceNotes: e.target.value })}
              rows={4}
              className="mt-4 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
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
              <input placeholder="Delivery address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputCls} />
              <input placeholder="Preferred colors" value={form.colors} onChange={(e) => setForm({ ...form, colors: e.target.value })} className={inputCls} />
              <input placeholder="Preferred delivery date" value={form.deliveryDate} onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })} className={inputCls} />
              <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputCls}>
                <option value="">Budget range</option>
                <option>Under Rs. 2,000</option>
                <option>Rs. 2,000 – 5,000</option>
                <option>Rs. 5,000 – 15,000</option>
                <option>Above Rs. 15,000</option>
              </select>
            </div>
            <textarea
              placeholder="Your memory or story — tell us what this piece means to you"
              value={form.memory}
              onChange={(e) => setForm({ ...form, memory: e.target.value })}
              rows={4}
              className="mt-3 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="font-display text-xl">Review Your Request</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Product", form.productType],
                ["Occasion", form.occasion],
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
                <div key={k} className="flex justify-between gap-6 border-b border-border/60 pb-2.5">
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
            <button onClick={() => setSubmitted(true)} className="btn-gold">Submit Request</button>
          )}
        </div>
      </div>
    </main>
  );
}
