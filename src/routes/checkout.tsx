import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";
import { formatPKR, waLink } from "@/lib/site";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Gul & Grace" },
      { name: "description", content: "Complete your order of handmade resin keepsakes from Gul & Grace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", note: "Pay when your keepsake arrives" },
  { id: "bank", label: "Bank Transfer", note: "Details shared on WhatsApp after ordering" },
  { id: "wallet", label: "Easypaisa / JazzCash", note: "Details shared on WhatsApp after ordering" },
  { id: "card", label: "Card Payment", note: "Coming soon", disabled: true },
];

const statuses = ["Order Received", "In Design Review", "In Production", "Quality Check", "Packed", "Shipped", "Delivered"];

const inputCls = "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none focus:border-primary";

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderSnapshot, setOrderSnapshot] = useState<{ summary: string; total: number }>({ summary: "", total: 0 });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    payment: "cod",
    orderNotes: "",
    giftNote: "",
  });

  if (placed) {
    return (
      <main className="container-luxe flex min-h-[70vh] items-center justify-center py-16">
        <div className="w-full max-w-lg text-center">
          <img src={logo} alt="Gul & Grace logo" width={64} height={64} className="mx-auto h-16 w-16 object-contain" />
          <div className="mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-secondary">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h1 className="mt-5 font-display text-3xl">Your order has been received.</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Thank you for trusting us with your memory. Our team will confirm
            your order on WhatsApp shortly.
          </p>
          <div className="mt-8 rounded-2xl border border-primary/25 bg-card p-6 text-left">
            <p className="eyebrow mb-4">Your Order Journey</p>
            <ol className="space-y-2.5">
              {statuses.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm">
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[0.6rem] ${i === 0 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}>
                    {i === 0 ? <Check className="h-3 w-3" /> : i + 1}
                  </span>
                  <span className={i === 0 ? "font-medium" : "text-muted-foreground"}>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <a
            href={waLink(`Hello Gul & Grace! I just placed an order.\n\n${orderSnapshot.summary}\nTotal: ${formatPKR(orderSnapshot.total)}\nName: ${form.name}\nCity: ${form.city}`)}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-7"
          >
            <MessageCircle className="h-4 w-4" /> Confirm on WhatsApp
          </a>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="font-display text-3xl">Nothing to check out yet</h1>
        <Link to="/shop" className="btn-gold mt-7">Shop Collection</Link>
      </main>
    );
  }

  return (
    <main className="container-luxe max-w-5xl py-14">
      <h1 className="text-center font-display text-3xl">Checkout</h1>
      <form
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]"
        onSubmit={(e) => {
          e.preventDefault();
          setOrderSnapshot({
            summary: items.map((i) => `${i.qty}x ${i.name}`).join("\n"),
            total: subtotal,
          });
          setPlaced(true);
          clear();
        }}
      >
        <div className="space-y-8">
          <section>
            <p className="eyebrow mb-4">Customer Details</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              <input required placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              <input type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${inputCls} sm:col-span-2`} />
            </div>
          </section>

          <section>
            <p className="eyebrow mb-4">Shipping Address</p>
            <div className="grid gap-3">
              <input required placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
              <textarea required placeholder="Complete address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} rows={3} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
          </section>

          <section>
            <p className="eyebrow mb-4">Payment Method</p>
            <div className="space-y-2.5">
              {paymentMethods.map((m) => (
                <label
                  key={m.id}
                  className={`flex items-center gap-3.5 rounded-2xl border p-4 ${m.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${form.payment === m.id ? "border-primary bg-secondary/40" : "border-border"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.id}
                    disabled={m.disabled}
                    checked={form.payment === m.id}
                    onChange={() => setForm({ ...form, payment: m.id })}
                    className="h-4 w-4 accent-[#B79B6C]"
                  />
                  <span>
                    <span className="block text-sm font-medium">{m.label}</span>
                    <span className="text-xs text-muted-foreground">{m.note}</span>
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <p className="eyebrow mb-4">Notes</p>
            <textarea placeholder="Order notes (optional)" value={form.orderNotes} onChange={(e) => setForm({ ...form, orderNotes: e.target.value })} rows={2} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
            <textarea placeholder="Gift note — we'll write it by hand (optional)" value={form.giftNote} onChange={(e) => setForm({ ...form, giftNote: e.target.value })} rows={2} className="mt-3 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
          </section>
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-3xl border border-primary/25 bg-card p-6">
          <p className="eyebrow mb-4">Order Summary</p>
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={i.slug + (i.customization ?? "")} className="flex items-center gap-3 text-sm">
                <img src={i.image} alt={i.name} width={48} height={48} loading="lazy" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                <span className="min-w-0 flex-1 truncate">{i.qty}× {i.name}</span>
                <span className="shrink-0">{formatPKR(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPKR(subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>Confirmed on WhatsApp</span></div>
            <div className="flex justify-between pt-2 font-medium"><span>Total</span><span className="text-primary">{formatPKR(subtotal)}</span></div>
          </div>
          <button type="submit" className="btn-gold mt-6 w-full">Confirm Order</button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            We'll confirm your order and payment details on WhatsApp.
          </p>
        </aside>
      </form>
    </main>
  );
}
