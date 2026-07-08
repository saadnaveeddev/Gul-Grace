export const SITE_NAME = "Gul & Grace";
export const TAGLINE = "Preserving Memories. Crafting Elegance.";

// Replace with the real WhatsApp number (country code, no + or spaces)
export const WHATSAPP_NUMBER = "923200342948";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SOCIALS = {
  instagram: "https://instagram.com/gulngracepk",
  tiktok: "https://tiktok.com/@gulngrace",
  pinterest: "https://pinterest.com/gulngracepk",
};

export const formatPKR = (n: number) =>
  `Rs. ${n.toLocaleString("en-PK")}`;
