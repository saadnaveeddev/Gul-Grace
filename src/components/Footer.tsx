import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { SOCIALS, TAGLINE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-luxe grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Gul & Grace logo" width={56} height={56} loading="lazy" className="mb-4 h-14 w-14 object-contain" />
          <p className="font-display text-lg">Gul & Grace</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Handmade resin art and memory preservation, crafted slowly in
            Pakistan. {TAGLINE}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Shop</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-primary">All Products</Link></li>
            <li><Link to="/custom-order" className="hover:text-primary">Custom Orders</Link></li>
            <li><Link to="/wedding-preservation" className="hover:text-primary">Wedding Preservation</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Customer Care</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Shipping & Care</Link></li>
            <li><Link to="/cart" className="hover:text-primary">Inquiry List</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <div className="flex gap-2.5">
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-primary/50 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full border border-primary/50 text-primary text-xs font-semibold transition-colors hover:bg-primary hover:text-primary-foreground">
              TT
            </a>
            <a href={SOCIALS.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="grid h-10 w-10 place-items-center rounded-full border border-primary/50 text-primary text-xs font-semibold transition-colors hover:bg-primary hover:text-primary-foreground">
              P
            </a>
            <a href={waLink("Hello Gul & Grace!")} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-primary/50 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          {/* <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">Payments</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Cash on Delivery · Bank Transfer · Easypaisa / JazzCash
          </p> */}
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs tracking-wide text-muted-foreground">
        © {new Date().getFullYear()} Gul & Grace · Handmade with care in Pakistan
      </div>
    </footer>
  );
}
