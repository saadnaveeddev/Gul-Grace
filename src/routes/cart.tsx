import { Link, createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/site";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Gul & Grace" },
      { name: "description", content: "Review your handmade resin keepsakes before checkout at Gul & Grace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="font-display text-3xl">Your cart is empty</h1>
        <p className="mt-3 text-sm text-muted-foreground">Every keepsake starts with a memory. Find yours.</p>
        <Link to="/shop" className="btn-gold mt-7">Shop Collection</Link>
      </main>
    );
  }

  return (
    <main className="container-luxe max-w-4xl py-14">
      <h1 className="font-display text-3xl">Your Cart</h1>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.slug + (item.customization ?? "")} className="flex gap-4 rounded-2xl border border-primary/25 bg-card p-4">
            <img src={item.image} alt={item.name} width={96} height={96} loading="lazy" className="h-24 w-24 shrink-0 rounded-xl object-cover" />
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Link to="/product/$slug" params={{ slug: item.slug }} className="font-display text-lg leading-snug hover:text-primary">
                    {item.name}
                  </Link>
                  {item.customization && (
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{item.customization}</p>
                  )}
                </div>
                <button aria-label="Remove item" onClick={() => removeItem(item.slug)} className="shrink-0 text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center rounded-full border border-input">
                  <button aria-label="Decrease" onClick={() => setQty(item.slug, item.qty - 1)} className="grid h-9 w-9 place-items-center hover:text-primary"><Minus className="h-3.5 w-3.5" /></button>
                  <span className="w-7 text-center text-sm">{item.qty}</span>
                  <button aria-label="Increase" onClick={() => setQty(item.slug, item.qty + 1)} className="grid h-9 w-9 place-items-center hover:text-primary"><Plus className="h-3.5 w-3.5" /></button>
                </div>
                <p className="text-sm font-medium">{formatPKR(item.price * item.qty)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-primary/25 bg-secondary/40 p-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatPKR(subtotal)}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <Link to="/checkout" className="btn-gold mt-6 w-full">Proceed to Checkout</Link>
      </div>
    </main>
  );
}
