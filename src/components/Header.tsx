import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useCart } from "@/lib/cart";
import { waLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/custom-order", label: "Custom Orders" },
  { to: "/wedding-preservation", label: "Wedding Preservation" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/85 backdrop-blur-xl" style={{ boxShadow: '0 4px 30px rgba(183, 155, 108, 0.06)' }}>
      <div className="container-luxe flex h-16 items-center justify-between gap-3 sm:h-18">
        <div className="flex min-w-0 items-center gap-3">
          <button
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-secondary/60 transition-colors lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Logo />
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="relative text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary group"
            >
              {n.label}
              {/* Brush underline on hover */}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            to="/shop"
            aria-label="Search products"
            className="hidden h-10 w-10 place-items-center rounded-full hover:bg-secondary/60 transition-colors sm:grid"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <Link
            to="/gallery"
            aria-label="Wishlist"
            className="hidden h-10 w-10 place-items-center rounded-full hover:bg-secondary/60 transition-colors sm:grid"
          >
            <Heart className="h-[18px] w-[18px]" />
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary/60 transition-colors"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-primary px-1 text-[0.6rem] font-semibold text-primary-foreground shadow-[0_0_8px_rgba(183,155,108,0.4)]">
                {count}
              </span>
            )}
          </Link>
          <a
            href={waLink("Hello Gul & Grace! I'd love to know more about your keepsakes.")}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_4px_16px_rgba(183,155,108,0.25)] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {open && (
        <nav className="border-t border-primary/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-luxe flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-primary/10 py-3.5 text-sm uppercase tracking-[0.16em] last:border-0 transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink("Hello Gul & Grace! I'd love to know more about your keepsakes.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-4"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
