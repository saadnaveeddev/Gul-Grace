import { Link, createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { SOCIALS, waLink } from "@/lib/site";
import { BrushDivider, GoldFlakes } from "@/components/ResinDecorations";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Inquiry List | Gul & Grace" },
      { name: "description", content: "Review your selected handmade resin keepsakes and inquire about them at Gul & Grace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, removeItem } = useCart();

  const buildWhatsAppMessage = () => {
    const productList = items
      .map((item) => {
        let line = `• ${item.name} (×${item.qty})`;
        if (item.customization) line += ` — ${item.customization}`;
        return line;
      })
      .join("\n");
    return `Hello Gul & Grace! I'd like to order the following items. Can I get more details and pricing?\n\n${productList}\n\nPlease share the prices and availability. Thank you!`;
  };

  if (items.length === 0) {
    return (
      <main className="relative">
        <div className="absolute inset-0 watercolor-blush pointer-events-none" />
        <GoldFlakes count={6} />
        <div className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-20 text-center relative z-10">
          <h1 className="font-display text-3xl">Your inquiry list is empty</h1>
          <p className="mt-3 text-sm text-muted-foreground">Every keepsake starts with a memory. Find yours.</p>
          <Link to="/shop" className="btn-gold mt-7">Shop Collection</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative">
      <div className="absolute top-0 left-0 right-0 h-[40vh] watercolor-gold pointer-events-none" />
      <GoldFlakes count={6} />
      <div className="container-luxe max-w-4xl py-14 relative z-10">
        <h1 className="font-display text-3xl">Your Inquiry List</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add your favourite pieces, then send your list to us on WhatsApp or Instagram to get prices and order details.
        </p>
        <BrushDivider className="mt-5 !justify-start" />

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.slug + (item.customization ?? "")} className="flex gap-4 resin-card rounded-[1.5rem] p-4 resin-card-hover">
              <div className="overflow-hidden shrink-0 resin-shape-3" style={{ width: 96, height: 96 }}>
                <img src={item.image} alt={item.name} width={96} height={96} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Link to="/product/$slug" params={{ slug: item.slug }} className="font-display text-lg leading-snug hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                    {item.customization && (
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{item.customization}</p>
                    )}
                  </div>
                  <button aria-label="Remove item" onClick={() => removeItem(item.slug)} className="shrink-0 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-primary/25 bg-card/80 backdrop-blur-sm">
                    <button aria-label="Decrease" onClick={() => setQty(item.slug, item.qty - 1)} className="grid h-9 w-9 place-items-center hover:text-primary transition-colors"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-7 text-center text-sm">{item.qty}</span>
                    <button aria-label="Increase" onClick={() => setQty(item.slug, item.qty + 1)} className="grid h-9 w-9 place-items-center hover:text-primary transition-colors"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <p className="text-xs italic text-muted-foreground">Price on inquiry</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 resin-card rounded-[2rem] p-6">
          <p className="mb-2 text-sm text-muted-foreground">
            {items.length} piece{items.length === 1 ? "" : "s"} in your list — send it to us and we'll share pricing and availability.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(buildWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn-gold flex-1 justify-center"
            >
              <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold flex-1 justify-center"
            >
              <Instagram className="h-4 w-4" /> Message on Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
