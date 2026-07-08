import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl border border-primary/25 bg-card transition-shadow duration-300 hover:shadow-[0_16px_40px_-20px_rgba(183,155,108,0.5)]">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — handmade resin keepsake by Gul & Grace`}
          width={768}
          height={768}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-primary">
          {product.label}
        </span>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="mt-1 font-display text-base leading-snug sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">{formatPKR(product.price)}</p>
        <div className="mt-auto pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={() =>
              addItem({
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
          </button>
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center justify-center rounded-full border border-primary/50 px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-colors hover:bg-primary/10"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
