import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { BrushDivider, GoldFlakes } from "@/components/ResinDecorations";

interface ShopSearch {
  category?: string;
}

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Handmade Resin Art & Custom Resin Gifts Pakistan | Gul & Grace" },
      {
        name: "description",
        content:
          "Browse preserved flower jewelry, resin jewelry Pakistan, personalized resin gifts, and custom keepsakes. Handmade resin art, made to order in Pakistan.",
      },
      { property: "og:title", content: "Shop | Gul & Grace" },
      { property: "og:description", content: "Handmade resin jewelry, preserved flower keepsakes, and personalized gifts in Pakistan." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

const occasions = ["Birthday", "Wedding", "Nikkah", "Anniversary", "Graduation", "Memorial", "Friendship", "Self Gift"];
const colorOptions = ["Blush", "Ivory", "Gold", "Sage", "Lavender", "Blue", "Wildflower"];

function ShopPage() {
  const { category: initialCategory } = Route.useSearch();
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [occasion, setOccasion] = useState<string>("all");
  const [color, setColor] = useState<string>("all");
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [bestOnly, setBestOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (category !== "all") count++;
    if (occasion !== "all") count++;
    if (color !== "all") count++;
    if (customizableOnly) count++;
    if (bestOnly) count++;
    if (newOnly) count++;
    return count;
  }, [category, occasion, color, customizableOnly, bestOnly, newOnly]);

  const resetFilters = () => {
    setCategory("all");
    setOccasion("all");
    setColor("all");
    setCustomizableOnly(false);
    setBestOnly(false);
    setNewOnly(false);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (occasion !== "all" && !p.occasion.includes(occasion)) return false;
      if (color !== "all" && !p.colors.includes(color)) return false;
      if (customizableOnly && !p.customizable) return false;
      if (bestOnly && !p.bestSeller) return false;
      if (newOnly && !p.newArrival) return false;
      return true;
    });
  }, [category, occasion, color, customizableOnly, bestOnly, newOnly]);

  const selectCls =
    "h-11 w-full rounded-full border border-primary/25 bg-card/80 backdrop-blur-sm px-4 text-sm outline-none focus:border-primary transition-shadow focus:shadow-[0_0_16px_rgba(183,155,108,0.12)]";

  return (
    <main className="relative">
      {/* Hero heading */}
      <section className="relative py-16 watercolor-gold overflow-hidden">
        <GoldFlakes count={8} />
        <div className="container-luxe text-center relative z-10">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">Shop Keepsakes</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Turn your flowers into a keepsake you can hold.
          </p>
          <BrushDivider className="mt-5" />
        </div>
      </section>

      <div className="container-luxe py-10">
        {/* Mobile Filters Toggle Button */}
        <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 rounded-full resin-card px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-all hover:shadow-[0_4px_16px_rgba(183,155,108,0.15)]"
          >
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            {showMobileFilters ? "Hide Filters" : "Show Filters"}
            {activeFiltersCount > 0 && (
              <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>
          {activeFiltersCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-xs uppercase tracking-[0.1em] text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
          {/* Filters sidebar */}
          <aside className={`space-y-6 lg:block ${showMobileFilters ? "block" : "hidden"}`}>
            <div className="resin-card rounded-[1.5rem] p-5 space-y-6">
              <div>
                <p className="eyebrow mb-2">Category</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectCls}>
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="eyebrow mb-2">Occasion</p>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className={selectCls}>
                  <option value="all">Any Occasion</option>
                  {occasions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="eyebrow mb-2">Color</p>
                <select value={color} onChange={(e) => setColor(e.target.value)} className={selectCls}>
                  <option value="all">Any Color</option>
                  {colorOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2.5 pt-1 text-sm">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={customizableOnly} onChange={(e) => setCustomizableOnly(e.target.checked)} className="h-4 w-4 accent-[#B79B6C]" />
                  Customizable
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={bestOnly} onChange={(e) => setBestOnly(e.target.checked)} className="h-4 w-4 accent-[#B79B6C]" />
                  Best Sellers
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={newOnly} onChange={(e) => setNewOnly(e.target.checked)} className="h-4 w-4 accent-[#B79B6C]" />
                  New Arrivals
                </label>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {filtered.length} piece{filtered.length === 1 ? "" : "s"}
            </p>
            {filtered.length === 0 ? (
              <div className="resin-card rounded-[2rem] p-14 text-center text-sm text-muted-foreground">
                No pieces match these filters yet. Try widening your search — or{" "}
                <a href="/custom-order" className="text-primary underline">request a custom piece</a>.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5 sm:gap-7 xl:grid-cols-3">
                {filtered.map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
