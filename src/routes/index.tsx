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
import weddingHero from "@/assets/wedding-hero.jpg";
import catCustom from "@/assets/cat-custom.jpg";

import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { waLink } from "@/lib/site";
import { GoldFlakes, BrushDivider, ResinFrame } from "@/components/ResinDecorations";

export const Route = createFileRoute("/")(({
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
}));

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

/** Organic resin shapes for category cards */
const catShapes = [
  '30% 70% 66% 34% / 40% 30% 70% 60%',
  '60% 40% 30% 70% / 50% 60% 40% 50%',
  '40% 60% 55% 45% / 35% 55% 45% 65%',
  '50% 50% 40% 60% / 60% 40% 60% 40%',
  '45% 55% 50% 50% / 55% 45% 55% 45%',
  '55% 45% 45% 55% / 40% 60% 40% 60%',
];

function Index() {
  const bestSellers = products.filter((p) => p.bestSeller).concat(products.filter((p) => !p.bestSeller)).slice(0, 8);

  return (
    <main>
      {/* ──── Hero ──── */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Preserved blush flowers in a clear resin block beside gold jewelry and premium gift packaging"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Watercolor wash over hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-transparent" />
        <div className="absolute inset-0 watercolor-blush opacity-60" />
        <GoldFlakes count={12} />
        <div className="container-luxe relative flex min-h-[82vh] items-center py-20">
          <div className="max-w-xl fade-in-up">
            <p className="eyebrow">Preserving Memories. Crafting Elegance.</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              Some Memories Fade. <em className="text-primary brush-underline">Yours Don't.</em>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Handcrafted resin keepsakes made to preserve flowers, emotions,
              and life's most meaningful moments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/shop" className="btn-gold justify-center">Shop Collection</Link>
              <Link to="/custom-order" className="btn-outline-gold justify-center">Create a Custom Keepsake</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Brand Story Preview ──── */}
      <section className="relative py-20 watercolor-blush">
        <GoldFlakes count={6} />
        <div className="container-luxe max-w-3xl text-center relative z-10">
          <BrushDivider className="mb-6" />
          <h2 className="font-display text-2xl leading-relaxed sm:text-3xl">
            "We don't just make resin art. We preserve the flowers, notes, and
            moments you never want to lose."
          </h2>
          <Link to="/about" className="btn-outline-gold mt-8">Discover Our Story</Link>
        </div>
      </section>

      {/* ──── Categories — Organic Resin Shapes ──── */}
      <section className="container-luxe py-24 resin-section">
        <div className="mb-14 text-center">
          <p className="eyebrow">Collections</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">What Would You Like to Preserve?</h2>
          <BrushDivider className="mt-5" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug }}
              className="group relative"
            >
              {/* Organic shaped image container */}
              <div className="relative overflow-hidden mx-auto w-full max-w-[320px] aspect-square resin-reveal" style={{ borderRadius: catShapes[i % catShapes.length] }}>
                <img
                  src={c.image}
                  alt={c.title}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                {/* Glossy resin overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 35%, transparent 60%, rgba(183,155,108,0.12) 100%)',
                    borderRadius: catShapes[i % catShapes.length],
                  }}
                />
              </div>
              {/* Text below */}
              <div className="mt-5 text-center px-3">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.description}</p>
                <span className="mt-3 inline-block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary transition-all group-hover:tracking-[0.3em]">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ──── Best Sellers ──── */}
      <section className="relative py-24 watercolor-gold">
        <GoldFlakes count={10} />
        <div className="container-luxe relative z-10">
          <div className="mb-14 text-center">
            <p className="eyebrow">Most Loved</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Best Sellers</h2>
            <p className="mt-3 text-sm text-muted-foreground">Made slowly. Finished carefully. Preserved forever.</p>
            <BrushDivider className="mt-5" />
          </div>
          <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/shop" className="btn-outline-gold">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ──── Custom Order — Resin blob image ──── */}
      <section className="container-luxe grid items-center gap-12 py-24 lg:grid-cols-2 resin-section">
        <div className="mx-auto w-full max-w-[420px]">
          <ResinFrame variant={2} className="aspect-square">
            <img
              src={catCustom}
              alt="Custom resin memory keepsake with handwritten note and preserved rose"
              width={768}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </ResinFrame>
        </div>
        <div className="relative">
          <GoldFlakes count={5} />
          <p className="eyebrow">Custom Orders</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Create a Keepsake That <span className="brush-underline">Belongs Only to You.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Send us your flowers, names, dates, colors, photos, initials, or a
            memory in your own words. We'll turn it into a piece you can hold —
            made by hand, with patience, care, and meaning.
          </p>
          <Link to="/custom-order" className="btn-gold mt-7">Start Custom Order</Link>
        </div>
      </section>

      {/* ──── How It Works ──── */}
      <section className="relative py-24 watercolor-sage">
        <GoldFlakes count={6} />
        <div className="container-luxe relative z-10">
          <div className="mb-14 text-center">
            <p className="eyebrow">The Process</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">How It Works</h2>
            <BrushDivider className="mt-5" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="text-center resin-card p-7 resin-card-hover gold-flakes"
                style={{ borderRadius: catShapes[i % catShapes.length] }}
              >
                <div
                  className="mx-auto grid h-16 w-16 place-items-center border border-primary/40 bg-background/80 backdrop-blur-sm"
                  style={{ borderRadius: catShapes[(i + 2) % catShapes.length] }}
                >
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

      {/* ──── Wedding Preservation ──── */}
      <section className="relative overflow-hidden">
        <img src={weddingHero} alt="Preserved bridal bouquet of blush roses in a clear resin block beside wedding rings" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/75 to-transparent" />
        <div className="absolute inset-0 watercolor-blush opacity-40" />
        <GoldFlakes count={8} />
        <div className="container-luxe relative flex min-h-[65vh] items-center justify-end py-20">
          <div className="max-w-lg text-center sm:text-right flex flex-col items-center sm:items-end w-full">
            <p className="eyebrow">For Brides</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Preserve Your Wedding Flowers <span className="brush-underline">Forever.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nikkah flowers, bridal bouquets, engagement roses — preserved in
              resin blocks, trays, frames, and jewelry. For the memories too
              special to leave behind.
            </p>
            <div className="mt-7 w-full sm:w-auto">
              <Link to="/wedding-preservation" className="btn-gold w-full sm:w-auto justify-center">Book Wedding Preservation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Reviews ──── */}
      <section className="relative py-24 watercolor-blush">
        <GoldFlakes count={8} />
        <div className="container-luxe relative z-10">
          <div className="mb-14 text-center">
            <p className="eyebrow">Kind Words</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">From Our Customers</h2>
            <BrushDivider className="mt-5" />
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="resin-card rounded-[2rem] p-8 resin-card-hover relative"
                style={{ borderRadius: catShapes[i % 3] }}
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary/80 font-display text-primary">
                    {r.name[0]}
                  </div>
                  <p className="text-sm font-medium">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Sticky WhatsApp on mobile */}
      <a
        href={waLink("Hello Gul & Grace! I'd love to place an order.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-lg resin-pulse md:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
