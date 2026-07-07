export const SITE_NAME = "Gul & Grace";
export const TAGLINE = "Preserving Memories. Crafting Elegance.";

// Replace with the real WhatsApp number (country code, no + or spaces)
export const WHATSAPP_NUMBER = "923001234567";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SOCIALS = {
  instagram: "https://instagram.com/gulandgrace",
  tiktok: "https://tiktok.com/@gulandgrace",
  pinterest: "https://pinterest.com/gulandgrace",
};

export const formatPKR = (n: number) =>
  `Rs. ${n.toLocaleString("en-PK")}`;
