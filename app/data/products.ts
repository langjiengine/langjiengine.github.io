import supportingProductData from "./supporting-products.json";

export type ProductStatus = "ready" | "needs-confirmation";

export type Specification = {
  label: string;
  value: string;
};

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  family: string;
  applicationBrand: string;
  category: "Featured V8 Blocks" | "Cylinder Blocks" | "Cylinder Heads" | "Cylinder Head Assemblies" | "Crankshafts";
  images: string[];
  cardImage?: string;
  summary: string;
  priceLabel: string;
  partNumbers: string[];
  specifications: Specification[];
  status: ProductStatus;
  sourceNote?: string;
  featured?: boolean;
};

const imageSeries = (stem: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    `/products/v8/${stem}-${String(index + 1).padStart(2, "0")}.jpg`,
  );

export const v8Products: CatalogProduct[] = [
  {
    id: "V8-001",
    slug: "ford-351w",
    name: "351W Small-Block V8 Cylinder Block",
    family: "Ford 351W pattern",
    applicationBrand: "Ford",
    category: "Featured V8 Blocks",
    images: imageSeries("ford-351", 6),
    summary: "Cast-iron 351W-pattern block with 9.500-inch deck, dual bore options, and steel four-bolt main caps.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Deck height", value: "9.500 in" },
      { label: "Shipped bore", value: "4.000 or 4.125 in" },
      { label: "Maximum bore × stroke", value: "4.185 × 4.125 in" },
      { label: "Main journal", value: "351C / 2.749 in" },
      { label: "Main caps", value: "Five billet-steel caps; three center caps splayed" },
      { label: "Cam journal", value: "Standard small-block Ford" },
      { label: "Lifter bores", value: "0.8757–0.8765 in, honed" },
      { label: "Oil system", value: "Wet sump or SVO dry sump; priority-main oiling" },
      { label: "Rear main seal", value: "Standard one-piece" },
      { label: "Oil pan pattern", value: "351W" },
    ],
    status: "ready",
    sourceNote: "Source designation: Proflow Warlord SB Ford 351W.",
    featured: true,
  },
  {
    id: "V8-002",
    slug: "gm-6-5l-diesel",
    name: "6.5L Diesel V8 Cylinder Block",
    family: "GM 6.5L Detroit Diesel",
    applicationBrand: "GM",
    category: "Featured V8 Blocks",
    images: imageSeries("gm-6-5l", 6),
    summary: "New cast-iron 6.5L diesel V8 block with four-bolt mains and a source-listed 4.055-inch bore.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Displacement", value: "395 cu in / 6.5 L" },
      { label: "Configuration", value: "90-degree V8, OHV, 16-valve" },
      { label: "Bore × stroke", value: "4.055 × 3.818 in (102.99 × 96.97 mm)" },
      { label: "Material", value: "Cast iron" },
      { label: "Main caps", value: "Four-bolt" },
      { label: "Rear main seal", value: "Two-piece" },
      { label: "Condition", value: "100% new" },
      { label: "Source-listed gross weight", value: "160 kg per piece" },
      { label: "Source-listed application", value: "Chevrolet Express 3500 6.5L OHV 16V" },
    ],
    status: "ready",
    featured: true,
  },
  {
    id: "V8-003",
    slug: "gm-350-small-block",
    name: "350 Small-Block V8 Cylinder Block",
    family: "Chevrolet small block",
    applicationBrand: "GM",
    category: "Featured V8 Blocks",
    images: imageSeries("gm-350", 7),
    summary: "Cast-iron small-block V8 platform with 9.025-inch deck and 4.000- or 4.125-inch shipped bore options.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Deck height", value: "9.025 in" },
      { label: "Shipped bore", value: "4.000 or 4.125 in" },
      { label: "Maximum recommended bore", value: "4.185 in" },
      { label: "Maximum bore × stroke", value: "4.185 × 4.000 in" },
      { label: "Main bearing size", value: "350: 2.45 in / 400: 2.65 in" },
      { label: "Cam bearing", value: "2.00 in; standard SBC position" },
      { label: "Minimum deck thickness", value: "0.675 in" },
      { label: "Minimum wall at 4.185 bore", value: "0.275 in" },
      { label: "Material", value: "Cast iron" },
      { label: "Source-listed weight", value: "205 lb" },
    ],
    status: "ready",
    sourceNote: "Source designation: Proflow Warlord SB Chevrolet.",
    featured: true,
  },
  {
    id: "V8-004",
    slug: "gm-454-4-277",
    name: "454 Big-Block V8 Cylinder Block — 4.277 in",
    family: "Chevrolet 454 big block",
    applicationBrand: "GM",
    category: "Featured V8 Blocks",
    images: imageSeries("gm-454-4-277", 5),
    summary: "OEM-style cast-iron 454 big-block platform supplied with finished 4.277-inch bores and four-bolt mains.",
    priceLabel: "Price on request",
    partNumbers: ["19170538"],
    specifications: [
      { label: "Manufacturer part number", value: "19170538" },
      { label: "Deck height", value: "9.800 in" },
      { label: "Shipped bore", value: "4.277 in, finished" },
      { label: "Maximum bore", value: "4.310 in" },
      { label: "Main journal", value: "Chevrolet 454" },
      { label: "Main caps", value: "Four-bolt, cast iron; caps and fasteners included" },
      { label: "Cam position", value: "Standard" },
      { label: "Cam bearings", value: "Included" },
      { label: "Freeze plugs", value: "Included" },
      { label: "Rear main seal", value: "Source conflict: specification table says one-piece; introduction says two-piece" },
    ],
    status: "needs-confirmation",
    sourceNote: "Rear-main-seal configuration must be confirmed before quotation.",
    featured: true,
  },
  {
    id: "V8-005",
    slug: "gm-454-4-496",
    name: "454 Big-Block V8 Cylinder Block — 4.496 in",
    family: "Chevrolet 454 tall deck",
    applicationBrand: "GM",
    category: "Featured V8 Blocks",
    images: imageSeries("gm-454-4-496", 6),
    summary: "Aftermarket Bowtie-style cast-iron big block with 10.200-inch tall deck, steel main caps, and finished bores.",
    priceLabel: "Price on request",
    partNumbers: ["25534367"],
    specifications: [
      { label: "Manufacturer part number", value: "25534367" },
      { label: "Deck height", value: "10.200 in, tall deck" },
      { label: "Shipped bore", value: "4.496 in, finished" },
      { label: "Source-listed cylinder bore", value: "4.600 in" },
      { label: "Main journal", value: "Chevrolet 454" },
      { label: "Main caps", value: "Four-bolt, steel" },
      { label: "Rear main seal", value: "Two-piece" },
      { label: "Cam bearings", value: "Not included" },
      { label: "Freeze plugs", value: "Not included" },
      { label: "Source-listed weight", value: "263 lb" },
    ],
    status: "ready",
    featured: true,
  },
  {
    id: "V8-006",
    slug: "ford-dart-351w-shp",
    name: "351W SHP V8 Cylinder Block",
    family: "Ford 351W pattern",
    applicationBrand: "Ford",
    category: "Featured V8 Blocks",
    images: imageSeries("gm-302-351c", 8),
    summary: "Dart SHP-series 351W-pattern cast-iron block with 9.500-inch deck, Cleveland/SVO main size, and steel main caps.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Series", value: "SHP" },
      { label: "Engine pattern", value: "Small-block Ford 351W" },
      { label: "Deck height", value: "9.500 in" },
      { label: "Shipped bore", value: "4.000 or 4.125 in" },
      { label: "Main journal", value: "Cleveland / SVO size" },
      { label: "Main caps", value: "Steel" },
      { label: "Material", value: "Cast iron" },
    ],
    status: "ready",
    sourceNote: "The earlier source label “GM302/351C” conflicts with the detailed description; the latter identifies this as a Dart small-block Ford 351W product.",
    featured: true,
  },
  {
    id: "V8-007",
    slug: "ls-400",
    name: "LS 400 V8 Cylinder Block",
    family: "LS 400 — exact family to confirm",
    applicationBrand: "Application to confirm",
    category: "Featured V8 Blocks",
    images: imageSeries("ls-400", 8),
    summary: "Source-labelled LS 400 V8 cylinder block with eight supplied production views; exact application and machining data remain to be confirmed.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Source label", value: "LS400" },
      { label: "Detailed specification", value: "Pending supplier confirmation" },
      { label: "Application", value: "Pending supplier confirmation" },
      { label: "Source photography", value: "Eight views" },
    ],
    status: "needs-confirmation",
    featured: true,
  },
  {
    id: "V8-008",
    slug: "lsx-cast-iron",
    name: "LSX Cast-Iron V8 Cylinder Block",
    family: "GM LS / LSX pattern",
    applicationBrand: "GM",
    category: "Featured V8 Blocks",
    images: imageSeries("lsx", 6),
    summary: "LS/LSX-style cast-iron block with 9.240-inch deck, two shipped-bore options, and steel six-bolt main caps.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Deck height", value: "9.240 in" },
      { label: "Shipped bore", value: "4.000 or 4.065 in" },
      { label: "Main journal", value: "Chevrolet LS" },
      { label: "Main caps", value: "Six-bolt, billet steel" },
      { label: "Material", value: "Cast iron" },
      { label: "Rear main seal", value: "One-piece" },
      { label: "Finished bores", value: "Yes" },
      { label: "Cam bearings", value: "Not included" },
      { label: "Freeze plugs", value: "Included" },
      { label: "Source-listed weight", value: "225 lb" },
    ],
    status: "ready",
    sourceNote: "Source designation: GM Performance LSX Bowtie / Proflow Warlord LSX style.",
    featured: true,
  },
  {
    id: "V8-009",
    slug: "ford-6-0-6-4",
    name: "6.0L / 6.4L Diesel V8 Cylinder Block",
    family: "Ford 6.0L / 6.4L",
    applicationBrand: "Ford",
    category: "Featured V8 Blocks",
    images: imageSeries("ford-6-0-6-4", 8),
    summary: "Source-supplied Ford 6.0L / 6.4L diesel V8 block photography; exact fitment, bore, and machining state require confirmation.",
    priceLabel: "Price on request",
    partNumbers: [],
    specifications: [
      { label: "Engine family", value: "Ford 6.0L / 6.4L" },
      { label: "Detailed specification", value: "Pending supplier confirmation" },
      { label: "Application", value: "Pending supplier confirmation" },
      { label: "Source photography", value: "Eight views" },
    ],
    status: "needs-confirmation",
    featured: true,
  },
  {
    id: "V8-010",
    slug: "ls3-aluminum-6-2l",
    name: "LS3 Aluminum 6.2L V8 Cylinder Block",
    family: "GM LS3 6.2L",
    applicationBrand: "GM",
    category: "Featured V8 Blocks",
    images: imageSeries("ls3", 5),
    cardImage: "/products/cutouts/ls3-v2.png",
    summary: "Aluminum 6.2L LS3 V8 cylinder block supplied under reference 12621766, with five source product views.",
    priceLabel: "Price on request",
    partNumbers: ["12621766"],
    specifications: [
      { label: "Reference number", value: "12621766" },
      { label: "Engine family", value: "LS3" },
      { label: "Displacement", value: "6.2 L" },
      { label: "Material", value: "Aluminum" },
      { label: "Configuration", value: "V8" },
      { label: "Source-listed applications", value: "Chevrolet Corvette, Camaro SS, Pontiac G8 GXP" },
      { label: "Additional specification", value: "Pending supplier confirmation" },
    ],
    status: "needs-confirmation",
    sourceNote: "Application compatibility is source-listed and must be checked by part number before quotation.",
    featured: true,
  },
];

type SupportingRecord = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  family: string;
  category: CatalogProduct["category"];
  partNumbers: string[];
  image: string | null;
  sourceWeight: number;
  sourceDimensions: string;
  priceLabel: string;
};

export const supportingProducts: CatalogProduct[] = (supportingProductData as SupportingRecord[]).map((record) => ({
  id: record.id,
  slug: record.slug,
  name: `${record.brand} ${record.name}`,
  family: record.family,
  applicationBrand: record.brand,
  category: record.category,
  images: record.image ? [record.image] : [],
  summary: `${record.family} ${record.category.toLowerCase()} record for part-number and application matching.`,
  priceLabel: record.priceLabel,
  partNumbers: record.partNumbers,
  specifications: [
    { label: "Catalog reference", value: record.id },
    { label: "Component type", value: record.category },
    { label: "Engine family", value: record.family },
    { label: "Part / reference numbers", value: record.partNumbers.length ? record.partNumbers.join(", ") : "Not supplied" },
    { label: "Source weight value", value: `${record.sourceWeight} — unit not supplied; confirm before use` },
    { label: "Source dimensions", value: `${record.sourceDimensions} — unit not supplied; confirm before use` },
  ],
  status: "needs-confirmation",
  sourceNote: "Weight and package-dimension units were not identified in the supplied spreadsheet and are intentionally not inferred.",
}));

export const allProducts = [...v8Products, ...supportingProducts];

export const catalogCategories = [
  "All products",
  "Featured V8 Blocks",
  "Cylinder Blocks",
  "Cylinder Heads",
  "Cylinder Head Assemblies",
  "Crankshafts",
] as const;

export function getCatalogProduct(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}

export function getCategoryCount(category: string) {
  if (category === "All products") return allProducts.length;
  return allProducts.filter((product) => product.category === category).length;
}
