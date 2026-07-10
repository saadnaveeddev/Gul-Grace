import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import catJewelry from "@/assets/cat-jewelry.jpg";
import catKeepsakes from "@/assets/cat-keepsakes.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import prodPendant from "@/assets/prod-pendant.jpg";
import prodRing from "@/assets/prod-ring.jpg";
import prodBlock from "@/assets/prod-block.jpg";
import prodTray from "@/assets/prod-tray.jpg";
import prodBookmark from "@/assets/prod-bookmark.jpg";
import story from "@/assets/story.jpg";
import packaging from "@/assets/packaging.jpg";
import aboutImg from "@/assets/about.jpg";
import { BrushDivider, GoldFlakes } from "@/components/ResinDecorations";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Flower Preservation Resin & Handmade Keepsakes | Gul & Grace" },
      {
        name: "description",
        content:
          "Explore preserved flower jewelry, wedding bouquet preservation, custom resin gifts, premium packaging, and behind-the-scenes moments from the Gul & Grace studio.",
      },
      { property: "og:title", content: "Gallery | Gul & Grace" },
      { property: "og:description", content: "Preserved flower jewelry, wedding preservation, and behind-the-scenes from our studio." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const tabs = ["All", "Jewelry", "Wedding Flowers", "Custom Gifts", "Packaging", "Behind the Scenes"] as const;

const items: { image: string; category: (typeof tabs)[number]; alt: string }[] = [
  { image: catJewelry, category: "Jewelry", alt: "Preserved flower pendant on gold chain" },
  { image: prodPendant, category: "Jewelry", alt: "Blush flower resin pendant close-up" },
  { image: prodRing, category: "Jewelry", alt: "Resin floral ring with pressed petals" },
  { image: catWedding, category: "Wedding Flowers", alt: "Bridal bouquet preserved in resin block" },
  { image: prodBlock, category: "Wedding Flowers", alt: "Wedding bouquet resin block keepsake" },
  { image: catGifts, category: "Custom Gifts", alt: "Personalized resin keychain gift" },
  { image: catCustom, category: "Custom Gifts", alt: "Custom memory piece with handwritten note" },
  { image: prodBookmark, category: "Custom Gifts", alt: "Pressed wildflower resin bookmark" },
  { image: packaging, category: "Packaging", alt: "Premium gift box with gold ribbon" },
  { image: catKeepsakes, category: "Packaging", alt: "Preserved flower keepsake dome" },
  { image: story, category: "Behind the Scenes", alt: "Hands placing flowers into resin molds" },
  { image: aboutImg, category: "Behind the Scenes", alt: "Studio workspace with dried flowers and molds" },
  { image: prodTray, category: "Custom Gifts", alt: "Floral trinket tray with gold edges" },
  { image: catDecor, category: "Jewelry", alt: "Resin tray holding delicate gold rings" },
];

const brushClips = [
  'polygon(3% 0%, 97% 2%, 100% 5%, 98% 95%, 95% 100%, 5% 98%, 0% 95%, 2% 5%)',
  'polygon(5% 3%, 95% 0%, 100% 8%, 97% 92%, 93% 100%, 7% 97%, 0% 90%, 3% 8%)',
  'polygon(2% 5%, 98% 0%, 100% 3%, 95% 97%, 90% 100%, 10% 98%, 0% 92%, 5% 8%)',
  'polygon(8% 0%, 92% 4%, 100% 10%, 96% 88%, 88% 100%, 12% 96%, 0% 85%, 4% 12%)',
];

const resinShapes = [
  '30% 70% 66% 34% / 40% 30% 70% 60%',
  '60% 40% 30% 70% / 50% 60% 40% 50%',
  '40% 60% 55% 45% / 35% 55% 45% 65%',
  '50% 50% 40% 60% / 60% 40% 60% 40%',
];

function GalleryPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? items : items.filter((i) => i.category === tab);

  return (
    <main className="relative">
      {/* Hero heading */}
      <section className="relative py-16 watercolor-blush overflow-hidden">
        <GoldFlakes count={10} />
        <div className="container-luxe text-center relative z-10">
          <p className="eyebrow">Inspiration</p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">Gallery</h1>
          <p className="mt-3 text-sm text-muted-foreground">Moments preserved, pieces perfected.</p>
          <BrushDivider className="mt-5" />
        </div>
      </section>

      <div className="container-luxe py-10">
        {/* Filter tabs as resin pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
                tab === t
                  ? "bg-primary text-primary-foreground shadow-[0_4px_16px_rgba(183,155,108,0.3)]"
                  : "resin-card hover:shadow-[0_4px_16px_rgba(183,155,108,0.12)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Masonry gallery with brush strokes and organic shapes */}
        <div className="columns-2 gap-5 sm:columns-3 lg:columns-4 [&>div]:mb-5 [&>div]:break-inside-avoid">
          {filtered.map((item, idx) => {
            // Alternate between brush stroke clips and organic shapes
            const useBrush = idx % 3 !== 0;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden resin-card-hover cursor-pointer"
                style={{
                  borderRadius: useBrush ? '1.5rem' : resinShapes[idx % resinShapes.length],
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{
                    clipPath: useBrush ? brushClips[idx % brushClips.length] : undefined,
                    borderRadius: useBrush ? undefined : resinShapes[idx % resinShapes.length],
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                {/* Resin gloss overlay on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(183,155,108,0.12) 100%)',
                    clipPath: useBrush ? brushClips[idx % brushClips.length] : undefined,
                    borderRadius: useBrush ? undefined : resinShapes[idx % resinShapes.length],
                  }}
                />
                {/* Category label on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-medium tracking-wide text-primary-foreground">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
