import { Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { SOCIALS, waLink } from "@/lib/site";

const brushMasks = [
  'polygon(3% 0%, 97% 2%, 100% 5%, 98% 95%, 95% 100%, 5% 98%, 0% 95%, 2% 5%)',
  'polygon(5% 3%, 95% 0%, 100% 8%, 97% 92%, 93% 100%, 7% 97%, 0% 90%, 3% 8%)',
  'polygon(2% 5%, 98% 0%, 100% 3%, 95% 97%, 90% 100%, 10% 98%, 0% 92%, 5% 8%)',
  'polygon(8% 0%, 92% 4%, 100% 10%, 96% 88%, 88% 100%, 12% 96%, 0% 85%, 4% 12%)',
];

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();
  const maskIndex = (index ?? 0) % brushMasks.length;

  return (
    <div className="group flex flex-col h-full resin-card rounded-[2rem] resin-card-hover">
      {/* Image area — brush stroke clipped with resin gloss */}
      <Link to="/product/$slug" params={{ slug: product.slug }} className="relative block overflow-hidden m-3 rounded-[1.5rem]">
        <div
          className="overflow-hidden"
          style={{ clipPath: brushMasks[maskIndex] }}
        >
          <img
            src={product.image}
            alt={`${product.name} — handmade resin keepsake by Gul & Grace`}
            width={768}
            height={768}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
        </div>
        {/* Resin gloss overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 30%, transparent 60%, rgba(183,155,108,0.1) 100%)',
            clipPath: brushMasks[maskIndex],
          }}
        />
        {/* Best seller / label tag */}
        {product.bestSeller && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-primary-foreground">
            ✦ Best Seller
          </span>
        )}
        {product.newArrival && !product.bestSeller && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-accent/80 backdrop-blur-sm px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-accent-foreground">
            New
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pb-5 pt-1">
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-primary">
          {product.label}
        </span>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="mt-1 font-display text-base leading-snug sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground italic">Price on inquiry</p>
        <div className="mt-auto pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={() =>
              addItem({
                slug: product.slug,
                name: product.name,
                image: product.image,
              })
            }
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_16px_rgba(183,155,108,0.3)]"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add to List
          </button>
          <a
            href={waLink(`Hello Gul & Grace! I'd like to know the price and details of "${product.name}".`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-primary/50 px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:bg-primary/10 hover:border-primary"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
