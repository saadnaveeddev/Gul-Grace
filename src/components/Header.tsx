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
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container-luxe flex h-16 items-center justify-between gap-3 sm:h-18">
        <div className="flex min-w-0 items-center gap-3">
          <button
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-muted lg:hidden"
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
              className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            to="/shop"
            aria-label="Search products"
            className="hidden h-10 w-10 place-items-center rounded-full hover:bg-muted sm:grid"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <Link
            to="/gallery"
            aria-label="Wishlist"
            className="hidden h-10 w-10 place-items-center rounded-full hover:bg-muted sm:grid"
          >
            <Heart className="h-[18px] w-[18px]" />
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-muted"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-primary px-1 text-[0.6rem] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <a
            href={waLink("Hello Gul & Grace! I'd love to know more about your keepsakes.")}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden items-center gap-2 rounded-full border border-primary px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-luxe flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3.5 text-sm uppercase tracking-[0.16em] last:border-0"
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
