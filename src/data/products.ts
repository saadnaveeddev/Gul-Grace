import prodPendant from "@/assets/prod-pendant.jpg";
import prodRing from "@/assets/prod-ring.jpg";
import prodKeychain from "@/assets/prod-keychain.jpg";
import prodBlock from "@/assets/prod-block.jpg";
import prodBookmark from "@/assets/prod-bookmark.jpg";
import prodTray from "@/assets/prod-tray.jpg";
import prodName from "@/assets/prod-name.jpg";
import prodCharm from "@/assets/prod-charm.jpg";
import catJewelry from "@/assets/cat-jewelry.jpg";
import catKeepsakes from "@/assets/cat-keepsakes.jpg";
import catWedding from "@/assets/cat-wedding.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import catCustom from "@/assets/cat-custom.jpg";

export interface Product {
  slug: string;
  name: string;
  price: number;
  label: "Customizable" | "Made to Order" | "Best Seller" | "New Arrival";
  image: string;
  category: string;
  occasion: string[];
  colors: string[];
  customizable: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  description: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    slug: "resin-jewelry",
    title: "Resin Jewelry",
    description: "Pendants, rings, and charms holding real preserved flowers.",
    image: catJewelry,
  },
  {
    slug: "preserved-keepsakes",
    title: "Preserved Flower Keepsakes",
    description: "Everyday keepsakes that hold the flowers you never want to lose.",
    image: catKeepsakes,
  },
  {
    slug: "wedding-preservation",
    title: "Wedding Bouquet Preservation",
    description: "Your bridal flowers, preserved forever in crystal-clear resin.",
    image: catWedding,
  },
  {
    slug: "personalized-gifts",
    title: "Personalized Gifts",
    description: "Names, initials, and dates — crafted into meaningful gifts.",
    image: catGifts,
  },
  {
    slug: "home-decor",
    title: "Home Decor",
    description: "Trays, coasters, and pieces that bring softness to your space.",
    image: catDecor,
  },
  {
    slug: "custom-memory",
    title: "Custom Memory Pieces",
    description: "Letters, fabric, petals — any memory, preserved with care.",
    image: catCustom,
  },
];

export const products: Product[] = [
  {
    slug: "preserved-flower-pendant",
    name: "Preserved Flower Pendant",
    price: 800,
    label: "Best Seller",
    image: prodPendant,
    category: "resin-jewelry",
    occasion: ["Birthday", "Anniversary", "Self Gift"],
    colors: ["Blush", "Ivory"],
    customizable: true,
    bestSeller: true,
    newArrival: false,
    description:
      "A single preserved bloom suspended in crystal-clear resin, finished with a gold-plated bezel and chain. Each pendant holds a real flower — no two are ever the same.",
  },
  {
    slug: "resin-floral-ring",
    name: "Resin Floral Ring",
    price: 400,
    label: "Customizable",
    image: prodRing,
    category: "resin-jewelry",
    occasion: ["Birthday", "Friendship", "Self Gift"],
    colors: ["Blush", "Lavender", "Gold"],
    customizable: true,
    bestSeller: true,
    newArrival: false,
    description:
      "Delicate pressed petals and gold flakes cast into a smooth, comfortable band. Choose your flower colors and finish for a ring made only for you.",
  },
  {
    slug: "custom-memory-keychain",
    name: "Custom Memory Keychain",
    price: 500,
    label: "Customizable",
    image: prodKeychain,
    category: "personalized-gifts",
    occasion: ["Friendship", "Graduation", "Birthday"],
    colors: ["Blush", "Ivory", "Sage"],
    customizable: true,
    bestSeller: true,
    newArrival: false,
    description:
      "A keepsake you carry every day. We set your flower and a gold initial into clear resin — a quiet reminder of someone or something you love.",
  },
  {
    slug: "wedding-bouquet-block",
    name: "Wedding Bouquet Block",
    price: 15500,
    label: "Made to Order",
    image: prodBlock,
    category: "wedding-preservation",
    occasion: ["Wedding", "Nikkah", "Anniversary"],
    colors: ["Ivory", "Blush"],
    customizable: true,
    bestSeller: true,
    newArrival: false,
    description:
      "Your bridal bouquet, preserved whole in a crystal-clear resin block. Made slowly over several weeks so every petal keeps its shape and softness.",
  },
  {
    slug: "resin-bookmark",
    name: "Resin Bookmark",
    price: 950,
    label: "New Arrival",
    image: prodBookmark,
    category: "preserved-keepsakes",
    occasion: ["Friendship", "Self Gift", "Graduation"],
    colors: ["Wildflower", "Ivory"],
    customizable: false,
    bestSeller: false,
    newArrival: true,
    description:
      "Pressed wildflowers and a hand-tied gold tassel, cast into a slim resin bookmark. For readers who keep their favourite pages — and memories — close.",
  },
  {
    slug: "floral-trinket-tray",
    name: "Floral Trinket Tray",
    price: 2400,
    label: "Made to Order",
    image: prodTray,
    category: "home-decor",
    occasion: ["Wedding", "Anniversary", "Self Gift"],
    colors: ["Blush", "Gold"],
    customizable: true,
    bestSeller: false,
    newArrival: true,
    description:
      "A soft blush tray edged in gold leaf, made to hold rings, earrings, and small treasures. Preserved petals catch the light from every angle.",
  },
  {
    slug: "personalized-name-pendant",
    name: "Personalized Name Pendant",
    price: 3200,
    label: "Customizable",
    image: prodName,
    category: "personalized-gifts",
    occasion: ["Birthday", "Anniversary", "Wedding"],
    colors: ["Gold", "Blush"],
    customizable: true,
    bestSeller: true,
    newArrival: false,
    description:
      "A name or date in gold script, surrounded by tiny preserved flowers. The kind of gift that gets kept forever.",
  },
  {
    slug: "mini-resin-charm",
    name: "Mini Resin Charm",
    price: 750,
    label: "New Arrival",
    image: prodCharm,
    category: "preserved-keepsakes",
    occasion: ["Friendship", "Self Gift", "Memorial"],
    colors: ["Ivory", "Blue"],
    customizable: true,
    bestSeller: false,
    newArrival: true,
    description:
      "A tiny forget-me-not sealed in a round charm. Attach it to a bracelet, bag, or chain — a small memory that goes where you go.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
