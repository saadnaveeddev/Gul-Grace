import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Flower2,
  Gem,
  HeartHandshake,
  MessageCircle,
  Package,
  Star,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import weddingHero from "@/assets/wedding-hero.jpg";
import packaging from "@/assets/packaging.jpg";
import catJewelry from "@/assets/cat-jewelry.jpg";
import catKeepsakes from "@/assets/cat-keepsakes.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gul & Grace | Handmade Resin Art & Preserved Flower Keepsakes in Pakistan" },
      {
        name: "description",
        content:
          "Shop premium handmade resin jewelry, preserved flower keepsakes, wedding bouquet preservation, and personalized gifts by Gul & Grace in Pakistan.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const steps = [
  { icon: Gem, title: "Choose Your Piece", text: "Pick from jewelry, keepsakes, trays, or a fully custom design." },
  { icon: Flower2, title: "Share Your Flowers or Memory", text: "Send us your flowers, photos, names, or dates." },
  { icon: HeartHandshake, title: "We Handcraft It With Care", text: "Every piece is poured, set, and polished slowly by hand." },
  { icon: Package, title: "Receive Your Keepsake", text: "Delivered in premium packaging, ready to keep forever." },
];

const reviews = [
  {
    name: "Areeba K.",
    text: "I sent my engagement flowers to Gul & Grace and they turned them into the most beautiful keepsake. The packaging, finishing, and emotional detail felt so premium.",
  },
  {
    name: "Mahnoor S.",
    text: "My wedding bouquet block made me cry — in the best way. Every rose looks exactly as it did on my Nikkah day.",
  },
  {
    name: "Fatima R.",
    text: "Ordered a name pendant for my mother with dried roses from her garden. She hasn't taken it off since.",
  },
];

const reels = [
  { image: story, label: "Resin pouring" },
  { image: catCustom, label: "Flower placement" },
  { image: packaging, label: "Packing orders" },
  { image: catKeepsakes, label: "Before vs after" },
  { image: catDecor, label: "Customer unboxing" },
];

function Index() {
  const bestSellers = products.filter((p) => p.bestSeller).concat(products.filter((p) => !p.bestSeller)).slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Preserved blush flowers in a clear resin block beside gold jewelry and premium gift packaging"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="container-luxe relative flex min-h-[82vh] items-center py-20">
          <div className="max-w-xl fade-in-up">
            <p className="eyebrow">Preserving Memories. Crafting Elegance.</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              Some Memories Fade. <em className="text-primary">Yours Don't.</em>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Handcrafted resin keepsakes made to preserve flowers, emotions,
              and life's most meaningful moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-gold">Shop Collection</Link>
              <Link to="/custom-order" className="btn-outline-gold">Create a Custom Keepsake</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand story preview */}
      <section className="bg-secondary/50 py-20">
        <div className="container-luxe max-w-3xl text-center">
          <div className="divider-gold mb-6" />
          <h2 className="font-display text-2xl leading-relaxed sm:text-3xl">
            "We don't just make resin art. We preserve the flowers, notes, and
            moments you never want to lose."
          </h2>
          <Link to="/about" className="btn-outline-gold mt-8">Discover Our Story</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container-luxe py-20">
        <div className="mb-10 text-center">
          <p className="eyebrow">Collections</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">What Would You Like to Preserve?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug }}
              className="group overflow-hidden rounded-2xl border border-primary/25 bg-card transition-shadow hover:shadow-[0_16px_40px_-20px_rgba(183,155,108,0.5)]"
            >
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/4.4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.description}</p>
                <span className="mt-3 inline-block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="bg-card py-20">
        <div className="container-luxe">
          <div className="mb-10 text-center">
            <p className="eyebrow">Most Loved</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Best Sellers</h2>
            <p className="mt-3 text-sm text-muted-foreground">Made slowly. Finished carefully. Preserved forever.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {bestSellers.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/shop" className="btn-outline-gold">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Custom order */}
      <section className="container-luxe grid items-center gap-10 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl gold-border">
          <img src={catCustom} alt="Custom resin memory keepsake with handwritten note and preserved rose" width={768} height={960} loading="lazy" className="w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Custom Orders</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Create a Keepsake That Belongs Only to You.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Send us your flowers, names, dates, colors, photos, initials, or a
            memory in your own words. We'll turn it into a piece you can hold —
            made by hand, with patience, care, and meaning.
          </p>
          <Link to="/custom-order" className="btn-gold mt-7">Start Custom Order</Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/50 py-20">
        <div className="container-luxe">
          <div className="mb-12 text-center">
            <p className="eyebrow">The Process</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">How It Works</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-primary/40 bg-card">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                </div>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-primary">Step {i + 1}</p>
                <h3 className="mt-1.5 font-display text-lg">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding preservation */}
      <section className="relative overflow-hidden">
        <img src={weddingHero} alt="Preserved bridal bouquet of blush roses in a clear resin block beside wedding rings" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-transparent" />
        <div className="container-luxe relative flex min-h-[65vh] items-center justify-end py-20">
          <div className="max-w-lg text-right">
            <p className="eyebrow">For Brides</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Preserve Your Wedding Flowers Forever.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nikkah flowers, bridal bouquets, engagement roses — preserved in
              resin blocks, trays, frames, and jewelry. For the memories too
              special to leave behind.
            </p>
            <div className="mt-7 flex justify-end">
              <Link to="/wedding-preservation" className="btn-gold">Book Wedding Preservation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-luxe py-20">
        <div className="mb-10 text-center">
          <p className="eyebrow">Inspiration</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">From Our Studio</h2>
        </div>
        <div className="columns-2 gap-4 sm:columns-3 [&>a]:mb-4 [&>a]:block">
          {[catJewelry, story, catKeepsakes, packaging, catDecor, catCustom].map((img, i) => (
            <Link key={i} to="/gallery" className="overflow-hidden rounded-2xl">
              <img src={img} alt="Gul & Grace studio and product gallery" width={768} height={960} loading="lazy" className="w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="btn-outline-gold">View Full Gallery</Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-card py-20">
        <div className="container-luxe">
          <div className="mb-10 text-center">
            <p className="eyebrow">Kind Words</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">From Our Customers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-primary/25 bg-background p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary font-display text-primary">
                    {r.name[0]}
                  </div>
                  <p className="text-sm font-medium">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="container-luxe py-20">
        <div className="mb-10 text-center">
          <p className="eyebrow">Instagram · TikTok</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Follow the Making Process</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {reels.map((r) => (
            <a
              key={r.label}
              href="https://instagram.com/gulngracepk"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img src={r.image} alt={r.label} width={768} height={960} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
                <p className="text-xs font-medium tracking-wide text-primary-foreground">{r.label}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary/50 py-20">
        <div className="container-luxe max-w-xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Join the Memory Club</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Get early access to new collections, gift ideas, and exclusive
            custom order slots.
          </p>
          <form
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="h-12 flex-1 rounded-full border border-input bg-card px-5 text-sm outline-none focus:border-primary"
            />
            <button type="submit" className="btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Sticky WhatsApp on mobile */}
      <a
        href={waLink("Hello Gul & Grace! I'd love to place an order.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-lg md:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
