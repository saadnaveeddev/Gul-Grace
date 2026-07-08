import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

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
const priceRanges = [
  { label: "Under Rs. 1,500", min: 0, max: 1500 },
  { label: "Rs. 1,500 – 3,000", min: 1500, max: 3000 },
  { label: "Rs. 3,000 – 10,000", min: 3000, max: 10000 },
  { label: "Above Rs. 10,000", min: 10000, max: Infinity },
];

function ShopPage() {
  const { category: initialCategory } = Route.useSearch();
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [price, setPrice] = useState<number>(-1);
  const [occasion, setOccasion] = useState<string>("all");
  const [color, setColor] = useState<string>("all");
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [bestOnly, setBestOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (category !== "all") count++;
    if (price >= 0) count++;
    if (occasion !== "all") count++;
    if (color !== "all") count++;
    if (customizableOnly) count++;
    if (bestOnly) count++;
    if (newOnly) count++;
    return count;
  }, [category, price, occasion, color, customizableOnly, bestOnly, newOnly]);

  const resetFilters = () => {
    setCategory("all");
    setPrice(-1);
    setOccasion("all");
    setColor("all");
    setCustomizableOnly(false);
    setBestOnly(false);
    setNewOnly(false);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (price >= 0) {
        const r = priceRanges[price];
        if (p.price < r.min || p.price >= r.max) return false;
      }
      if (occasion !== "all" && !p.occasion.includes(occasion)) return false;
      if (color !== "all" && !p.colors.includes(color)) return false;
      if (customizableOnly && !p.customizable) return false;
      if (bestOnly && !p.bestSeller) return false;
      if (newOnly && !p.newArrival) return false;
      return true;
    });
  }, [category, price, occasion, color, customizableOnly, bestOnly, newOnly]);

  const selectCls =
    "h-11 w-full rounded-full border border-input bg-card px-4 text-sm outline-none focus:border-primary";

  return (
    <main className="container-luxe py-14">
      <div className="mb-10 text-center">
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">Shop Keepsakes</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Turn your flowers into a keepsake you can hold.
        </p>
      </div>

      {/* Mobile Filters Toggle Button */}
      <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] bg-card hover:bg-secondary/40 transition-colors"
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
            className="text-xs uppercase tracking-[0.1em] text-muted-foreground underline underline-offset-4"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
        {/* Filters */}
        <aside className={`space-y-6 lg:block ${showMobileFilters ? "block" : "hidden"}`}>
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
            <p className="eyebrow mb-2">Price</p>
            <select value={price} onChange={(e) => setPrice(Number(e.target.value))} className={selectCls}>
              <option value={-1}>Any Price</option>
              {priceRanges.map((r, i) => (
                <option key={r.label} value={i}>{r.label}</option>
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
            <label className="flex items-center gap-2.5">
              <input type="checkbox" checked={customizableOnly} onChange={(e) => setCustomizableOnly(e.target.checked)} className="h-4 w-4 accent-[#B79B6C]" />
              Customizable
            </label>
            <label className="flex items-center gap-2.5">
              <input type="checkbox" checked={bestOnly} onChange={(e) => setBestOnly(e.target.checked)} className="h-4 w-4 accent-[#B79B6C]" />
              Best Sellers
            </label>
            <label className="flex items-center gap-2.5">
              <input type="checkbox" checked={newOnly} onChange={(e) => setNewOnly(e.target.checked)} className="h-4 w-4 accent-[#B79B6C]" />
              New Arrivals
            </label>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {filtered.length} piece{filtered.length === 1 ? "" : "s"}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-14 text-center text-sm text-muted-foreground">
              No pieces match these filters yet. Try widening your search — or{" "}
              <a href="/custom-order" className="text-primary underline">request a custom piece</a>.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
