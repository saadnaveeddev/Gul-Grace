import { Link, createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { formatPKR, waLink } from "@/lib/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product Not Found | Gul & Grace" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | Handmade Resin Keepsake Pakistan | Gul & Grace` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} | Gul & Grace` },
        { property: "og:description", content: product.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/product/${product.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            brand: { "@type": "Brand", name: "Gul & Grace" },
            offers: {
              "@type": "Offer",
              priceCurrency: "PKR",
              price: product.price,
              availability: "https://schema.org/MadeToOrder",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="container-luxe py-24 text-center">
      <h1 className="font-display text-3xl">This piece could not be found</h1>
      <Link to="/shop" className="btn-outline-gold mt-6">Back to Shop</Link>
    </main>
  ),
  component: ProductPage,
});

const inputCls =
  "h-11 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none focus:border-primary";

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [custom, setCustom] = useState({
    name: "",
    date: "",
    flowerColor: "",
    resinColor: "",
    flakes: "None",
    giftNote: "",
    photo: "",
    instructions: "",
  });

  const customizationSummary = Object.entries({
    "Name/Initials": custom.name,
    Date: custom.date,
    "Flower color": custom.flowerColor,
    "Resin color": custom.resinColor,
    Flakes: custom.flakes !== "None" ? custom.flakes : "",
    "Gift note": custom.giftNote,
    Reference: custom.photo,
    Notes: custom.instructions,
  })
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join(" · ");

  const add = () =>
    addItem(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        customization: customizationSummary || undefined,
      },
      qty,
    );

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const relatedFill = related.length < 3
    ? related.concat(products.filter((p) => p.category !== product.category && p.slug !== product.slug).slice(0, 4 - related.length))
    : related;

  return (
    <main className="container-luxe py-14">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl gold-border">
          <img
            src={product.image}
            alt={`${product.name} — handmade preserved flower resin keepsake by Gul & Grace, Pakistan`}
            width={768}
            height={768}
            className="w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-primary">{product.label}</span>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-xl text-primary">{formatPKR(product.price)}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

          {product.customizable && (
            <div className="mt-8 rounded-2xl border border-primary/25 bg-secondary/40 p-5 sm:p-6">
              <p className="eyebrow mb-4">Make It Yours</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <input placeholder="Name or initials" value={custom.name} onChange={(e) => setCustom({ ...custom, name: e.target.value })} className={inputCls} />
                <input placeholder="Special date (e.g. 14.02.2026)" value={custom.date} onChange={(e) => setCustom({ ...custom, date: e.target.value })} className={inputCls} />
                <input placeholder="Flower color preference" value={custom.flowerColor} onChange={(e) => setCustom({ ...custom, flowerColor: e.target.value })} className={inputCls} />
                <input placeholder="Resin color / tint" value={custom.resinColor} onChange={(e) => setCustom({ ...custom, resinColor: e.target.value })} className={inputCls} />
                <select value={custom.flakes} onChange={(e) => setCustom({ ...custom, flakes: e.target.value })} className={inputCls}>
                  <option>None</option>
                  <option>Gold flakes</option>
                  <option>Silver flakes</option>
                </select>
                <input placeholder="Gift note (optional)" value={custom.giftNote} onChange={(e) => setCustom({ ...custom, giftNote: e.target.value })} className={inputCls} />
              </div>
              <div className="mt-3">
                <label className="text-xs text-muted-foreground">Upload photo / reference image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCustom({ ...custom, photo: e.target.files?.[0]?.name ?? "" })}
                  className="mt-1.5 block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border file:border-primary/50 file:bg-card file:px-4 file:py-2 file:text-xs file:text-foreground"
                />
              </div>
              <textarea
                placeholder="Special instructions"
                value={custom.instructions}
                onChange={(e) => setCustom({ ...custom, instructions: e.target.value })}
                rows={2}
                className="mt-3 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
          )}

          {/* Qty + actions */}
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex gap-3 flex-1 sm:flex-none">
              <div className="flex items-center rounded-full border border-input shrink-0 bg-card">
                <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-11 w-11 place-items-center hover:text-primary"><Minus className="h-4 w-4" /></button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="grid h-11 w-11 place-items-center hover:text-primary"><Plus className="h-4 w-4" /></button>
              </div>
              <button onClick={add} className="btn-outline-gold flex-1 sm:flex-none justify-center">
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
            </div>
            <button
              onClick={() => {
                add();
                navigate({ to: "/checkout" });
              }}
              className="btn-gold w-full sm:w-auto sm:flex-none justify-center"
            >
              Buy Now
            </button>
          </div>
          <a
            href={waLink(`Hello Gul & Grace! I'd like to ask about the "${product.name}" (${formatPKR(product.price)}).`)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
          >
            <MessageCircle className="h-4 w-4" /> Ask about this piece on WhatsApp
          </a>

          {/* Shipping & care */}
          <div className="mt-8 space-y-4 border-t border-border pt-6 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Shipping</p>
              <p className="mt-1">Nationwide delivery across Pakistan in 5–10 working days. Made-to-order and custom pieces take 2–4 weeks. Cash on Delivery available.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Care Instructions</p>
              <p className="mt-1">Keep away from direct sunlight and heat. Wipe gently with a soft dry cloth. Avoid perfumes and water contact for jewelry pieces.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-20">
        <h2 className="font-display text-2xl">Reviews</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            { name: "Zainab A.", text: "The finishing is flawless. It arrived in the most beautiful packaging with a handwritten note." },
            { name: "Hira M.", text: "Better than the photos. You can tell it's made by hand, with real care." },
          ].map((r) => (
            <div key={r.name} className="rounded-2xl border border-primary/25 bg-card p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <p className="mt-3 text-sm font-medium">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mt-20">
        <h2 className="font-display text-2xl">You May Also Love</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {relatedFill.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
