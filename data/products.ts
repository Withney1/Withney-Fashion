export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
  category: string;
  description: string;
  sizes: string[];
  shoeSizes?: string[];
  image?: string;
}

export const products: Product[] = [
  { id: "1", name: "The Noir Overcoat", price: 185000, tag: "Bestseller", category: "Outerwear", description: "A commanding overcoat cut from premium wool blend. Oversized silhouette, unisex fit.", sizes: ["XS", "S", "M", "L", "XL", "XXL"] },
  { id: "2", name: "Sculpted Leather Trousers", price: 92000, tag: "New", category: "Bottoms", description: "High-waisted leather trousers with a sculpted leg. Bold and unapologetic.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "3", name: "The Void Shirt", price: 48000, tag: "Limited", category: "Tops", description: "Oversized satin shirt in deep black. Effortless. Cheeky. Yours.", sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "4", name: "Shadow Wrap Dress", price: 76000, tag: "New", category: "Dresses", description: "A fluid wrap dress that moves with you. Unisex cut, timeless edge.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "5", name: "Unisex Utility Vest", price: 55000, tag: "Hot", category: "Outerwear", description: "Structured utility vest with gold hardware. Wear it over everything.", sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "6", name: "Wide Leg Silk Trousers", price: 68000, tag: "Limited", category: "Bottoms", description: "Fluid wide-leg trousers in pure silk. The power move.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "7", name: "The Bone Blazer", price: 120000, tag: "Bestseller", category: "Outerwear", description: "Ivory blazer with sharp shoulders. The backbone of any wardrobe.", sizes: ["XS", "S", "M", "L", "XL", "XXL"] },
  { id: "8", name: "Cut-Out Bodysuit", price: 39000, tag: "New", category: "Tops", description: "Strategic cut-outs. Minimal fabric. Maximum nerve.", sizes: ["XS", "S", "M", "L"] },
  { id: "9", name: "Draped Midi Skirt", price: 52000, tag: "Hot", category: "Bottoms", description: "A draped midi skirt that falls perfectly every time. Pure elegance.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "10", name: "Withney Leather Loafer", price: 95000, tag: "New", category: "Shoes", description: "Chunky leather loafer with gold W buckle. The signature step.", sizes: [], shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"] },
  { id: "11", name: "Platform Chelsea Boot", price: 110000, tag: "Limited", category: "Shoes", description: "Elevated Chelsea boot on a bold platform sole. Unisex sizing.", sizes: [], shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"] },
];
