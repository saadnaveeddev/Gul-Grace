import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { SITE_NAME } from "@/lib/site";

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={logo}
        alt={`${SITE_NAME} logo — resin droplet with preserved flower and heart`}
        width={size}
        height={size}
        className="shrink-0 object-contain"
        style={{ width: size, height: size }}
      />
      <span className="font-display text-lg leading-none tracking-wide sm:text-xl">
        Gul <span className="text-primary">&</span> Grace
      </span>
    </Link>
  );
}
