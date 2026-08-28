export type V8Product = {
  slug: string;
  name: string;
  sourceLabel: string;
  family: string;
  brand: string;
  bore: string;
  imageCount: number;
  images: string[];
  summary: string;
  status?: "verified" | "needs-confirmation";
};

const imageSeries = (stem: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    `/products/v8/${stem}-${String(index + 1).padStart(2, "0")}.jpg`,
  );

export const v8Products: V8Product[] = [
  {
    slug: "ford-351",
    name: "Ford 351 V8 Cylinder Block",
    sourceLabel: "FD351",
    family: "351 Series",
    brand: "Ford",
    bore: "4.000 / 4.125 in",
    imageCount: 6,
    images: imageSeries("ford-351", 6),
    summary: "A V8 cylinder block record supplied for the Ford 351 family, with two bore options documented in the source material.",
  },
  {
    slug: "gm-6-5l",
    name: "GM 6.5L V8 Cylinder Block",
    sourceLabel: "GM6.5L",
    family: "6.5L Series",
    brand: "GM",
    bore: "4.055 in",
    imageCount: 6,
    images: imageSeries("gm-6-5l", 6),
    summary: "A GM 6.5L V8 block record presented with production photography and the source-listed bore specification.",
  },
  {
    slug: "gm-350",
    name: "GM 350 V8 Cylinder Block",
    sourceLabel: "GM350",
    family: "Small Block",
    brand: "GM",
    bore: "4.000 / 4.125 in",
    imageCount: 7,
    images: imageSeries("gm-350", 7),
    summary: "A small-block V8 cylinder block record with two documented bore options and seven supplied production views.",
  },
  {
    slug: "gm-454-4-277",
    name: "GM 454 V8 Cylinder Block — 4.277 in",
    sourceLabel: "GM454 4.277",
    family: "Big Block",
    brand: "GM",
    bore: "4.277 in",
    imageCount: 5,
    images: imageSeries("gm-454-4-277", 5),
    summary: "A GM 454 big-block V8 record distinguished by its source-listed 4.277-inch bore specification.",
  },
  {
    slug: "gm-454-4-496",
    name: "GM 454 V8 Cylinder Block — 4.496 in",
    sourceLabel: "GM454 4.496",
    family: "Big Block",
    brand: "GM",
    bore: "4.496 in",
    imageCount: 6,
    images: imageSeries("gm-454-4-496", 6),
    summary: "A GM 454 big-block V8 record distinguished by its source-listed 4.496-inch bore specification.",
  },
  {
    slug: "gm-302-351c",
    name: "302 / 351C V8 Cylinder Block",
    sourceLabel: "GM302/351C",
    family: "302 / 351C Series",
    brand: "Brand to confirm",
    bore: "Specification on request",
    imageCount: 8,
    images: imageSeries("gm-302-351c", 8),
    summary: "A source-supplied 302 / 351C V8 block record. The source label contains a brand and engine-family conflict that must be confirmed before final publication.",
    status: "needs-confirmation",
  },
  {
    slug: "ls-400",
    name: "LS 400 V8 Cylinder Block",
    sourceLabel: "LS400",
    family: "LS 400",
    brand: "Brand to confirm",
    bore: "Specification on request",
    imageCount: 8,
    images: imageSeries("ls-400", 8),
    summary: "An LS 400-labelled V8 block record. Exact engine family, fitment, and specifications remain subject to supplier confirmation.",
    status: "needs-confirmation",
  },
  {
    slug: "lsx",
    name: "LSX V8 Cylinder Block",
    sourceLabel: "LSX",
    family: "LS Series",
    brand: "GM",
    bore: "Specification on request",
    imageCount: 6,
    images: imageSeries("lsx", 6),
    summary: "An LSX-family V8 cylinder block record with six source photographs. Machining, fitment, and bore details are confirmed during quotation.",
  },
  {
    slug: "ford-6-0-6-4",
    name: "Ford 6.0L / 6.4L V8 Cylinder Block",
    sourceLabel: "Ford6.0/6.4",
    family: "6.0L / 6.4L Series",
    brand: "Ford",
    bore: "Specification on request",
    imageCount: 8,
    images: imageSeries("ford-6-0-6-4", 8),
    summary: "A Ford 6.0L / 6.4L V8 cylinder block record with eight supplied views. Final application and specification matching is handled during inquiry.",
  },
];

export type SupportingRange = {
  brand: string;
  count: number;
  focus: string;
  examples: string[];
};

export const supportingRanges: SupportingRange[] = [
  {
    brand: "Cummins",
    count: 42,
    focus: "Cylinder heads, assemblies, blocks and crankshafts",
    examples: ["ISX15", "ISM11 / QSM11", "QSB6.7", "6BT", "X15"],
  },
  {
    brand: "Caterpillar",
    count: 10,
    focus: "Cylinder heads and head assemblies",
    examples: ["3406E / C15", "C18", "C7", "C13", "C12"],
  },
  {
    brand: "Renault",
    count: 3,
    focus: "Cylinder head, assembly and block",
    examples: ["DCi11"],
  },
  {
    brand: "Volvo",
    count: 2,
    focus: "Cylinder head and head assembly",
    examples: ["D13"],
  },
  {
    brand: "Detroit",
    count: 2,
    focus: "Cylinder heads",
    examples: ["S60 12.7L", "S60 14L"],
  },
  {
    brand: "MAN",
    count: 1,
    focus: "Cylinder head",
    examples: ["D20 / D26 13L"],
  },
  {
    brand: "Ford",
    count: 1,
    focus: "Heavy-duty cylinder head",
    examples: ["Ecotorq 9.0L"],
  },
];

export const supportingProductCount = supportingRanges.reduce(
  (total, range) => total + range.count,
  0,
);

export function getV8Product(slug: string) {
  return v8Products.find((product) => product.slug === slug);
}
