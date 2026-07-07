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

function GalleryPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? items : items.filter((i) => i.category === tab);

  return (
    <main className="container-luxe py-14">
      <div className="mb-8 text-center">
        <p className="eyebrow">Inspiration</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">Gallery</h1>
        <p className="mt-3 text-sm text-muted-foreground">Moments preserved, pieces perfected.</p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
              tab === t ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>div]:mb-4 [&>div]:break-inside-avoid">
        {filtered.map((i, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl">
            <img src={i.image} alt={i.alt} width={768} height={960} loading="lazy" className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
          </div>
        ))}
      </div>
    </main>
  );
}
