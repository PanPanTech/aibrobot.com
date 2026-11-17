import { VOICE_BOX } from './site';

export type Line = 'silicone' | 'stpe' | 'ai';
export type Material = 'TPE' | 'STPE' | 'Silicone';
export type Collection = 'companion' | 'ai-robot';
export type Availability = 'us-warehouse' | 'eu-warehouse' | 'us-eu-warehouse' | 'available-to-order';
export type PriceKind = 'suggested-retail' | 'current-price' | 'list-price';

export type Measurements = {
  fullBust?: string;
  underBust?: string;
  waist?: string;
  hip?: string;
  foot?: string;
  leg?: string;
  arm?: string;
  shoulder?: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Product = {
  slug: string;
  sku: string;
  name: string;
  shortName: string;
  title: string;
  line: Line;
  collection: Collection;
  heightCm: number;
  cup?: string;
  headCode?: string;
  materials: Material[];
  defaultMaterial: Material;
  prices: Partial<Record<Material, number>>;
  compareAtPrices?: Partial<Record<Material, number>>;
  priceKind: PriceKind;
  priceSource: string;
  weightKg?: number;
  measurements: Measurements;
  measurementSource: string;
  availability: Availability;
  featured: boolean;
  voiceBoxEligible: boolean;
  summary: string;
  description: string[];
  caveats: string[];
  related: string[];
  images: ProductImage[];
};

export const products: Product[] = [
  {
    slug: "ak-2-165",
    sku: "AK2-165",
    name: "165 cm silicone companion",
    shortName: "165 cm silicone",
    title: "165 cm silicone companion",
    line: "silicone",
    collection: "companion",
    heightCm: 165,
    materials: ["Silicone"],
    defaultMaterial: "Silicone",
    prices: {"Silicone":1950},
    priceKind: "suggested-retail",
    priceSource: "Suggested retail of $1,950 from a silicone-companion price list dated 4 October 2025. Reconfirmed before payment.",
    weightKg: 32,
    measurements: {
      fullBust: "81 cm",
      underBust: "66 cm",
      waist: "56 cm",
      hip: "92 cm",
      foot: "20 cm",
      leg: "78 cm",
      arm: "65 cm",
      shoulder: "36 cm",
    },
    measurementSource: "Silicone companion price list, 4 October 2025. Net weight 32 kg on that sheet. Other notes have given 29 kg or 33 kg for this body; we use the 4 October 2025 figure and will confirm before dispatch.",
    availability: "available-to-order",
    featured: true,
    voiceBoxEligible: true,
    summary: "165 cm silicone companion. 32 kg. Available to order. Suggested retail $1,950. Stock and the final price are reconfirmed before payment.",
    description: [
      "165 cm silicone companion is an adult companion figure in silicone, listed at a suggested retail of $1,950 on a price list dated 4 October 2025. It is not on the November 2026 US or EU warehouse lists we have. It is available to order. Lead time is confirmed in writing before payment. We do not publish a delivery-day range.",
      "The weight we are using is 32 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head. Because other notes have given a slightly different weight for this body, the weight on a specific unit is confirmed before dispatch.",
    ],
    caveats: [

    ],
    related: ["ak-1-175", "ak-9-164", "wm-166c"],
    images: [
    {
      src: "/images/products/ak-2-165/hero",
      alt: "165 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 949,
      height: 1400,
    },
    {
      src: "/images/products/ak-2-165/gallery-01",
      alt: "165 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-2-165/gallery-02",
      alt: "165 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 938,
      height: 1400,
    },
    {
      src: "/images/products/ak-2-165/gallery-03",
      alt: "165 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 954,
      height: 1400,
    },
    {
      src: "/images/products/ak-2-165/gallery-04",
      alt: "165 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 935,
      height: 1400,
    }
    ],
  },
  {
    slug: "ak-1-175",
    sku: "AK1-175",
    name: "175 cm silicone companion",
    shortName: "175 cm silicone",
    title: "175 cm silicone companion",
    line: "silicone",
    collection: "companion",
    heightCm: 175,
    materials: ["Silicone"],
    defaultMaterial: "Silicone",
    prices: {"Silicone":1950},
    priceKind: "suggested-retail",
    priceSource: "Suggested retail of $1,950 from a silicone-companion price list dated 4 October 2025. Reconfirmed before payment.",
    weightKg: 38,
    measurements: {
      fullBust: "82 cm",
      underBust: "63 cm",
      waist: "53.5 cm",
      hip: "91 cm",
      foot: "20 cm",
      leg: "90 cm",
      arm: "69 cm",
      shoulder: "37 cm",
    },
    measurementSource: "Silicone companion price list, 4 October 2025. Net weight 38 kg.",
    availability: "us-warehouse",
    featured: true,
    voiceBoxEligible: true,
    summary: "175 cm silicone companion. 38 kg. On the November 2026 US warehouse list. Suggested retail $1,950. Stock and the final price are reconfirmed before payment.",
    description: [
      "175 cm silicone companion is an adult companion figure in silicone, listed at a suggested retail of $1,950 on a price list dated 4 October 2025. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 38 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["ak-2-165", "wm-175b", "wm-173h"],
    images: [
    {
      src: "/images/products/ak-1-175/hero",
      alt: "175 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 999,
      height: 1400,
    },
    {
      src: "/images/products/ak-1-175/gallery-01",
      alt: "175 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/ak-1-175/gallery-02",
      alt: "175 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1062,
      height: 1400,
    },
    {
      src: "/images/products/ak-1-175/gallery-03",
      alt: "175 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 992,
      height: 1400,
    },
    {
      src: "/images/products/ak-1-175/gallery-04",
      alt: "175 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    }
    ],
  },
  {
    slug: "ak-9-164",
    sku: "AK9-164",
    name: "164 cm silicone companion",
    shortName: "164 cm silicone",
    title: "164 cm silicone companion",
    line: "silicone",
    collection: "companion",
    heightCm: 164,
    materials: ["Silicone"],
    defaultMaterial: "Silicone",
    prices: {"Silicone":1900},
    priceKind: "suggested-retail",
    priceSource: "Suggested retail of $1,900 from a silicone-companion price list dated 4 October 2025. Reconfirmed before payment.",
    weightKg: 39,
    measurements: {
      fullBust: "79 cm",
      underBust: "61 cm",
      waist: "57 cm",
      hip: "92.5 cm",
      foot: "21 cm",
      leg: "83 cm",
      arm: "66 cm",
      shoulder: "34 cm",
    },
    measurementSource: "Silicone companion price list, 4 October 2025. Net weight 39 kg.",
    availability: "us-warehouse",
    featured: true,
    voiceBoxEligible: true,
    summary: "164 cm silicone companion. 39 kg. On the November 2026 US warehouse list. Suggested retail $1,900. Stock and the final price are reconfirmed before payment.",
    description: [
      "164 cm silicone companion is an adult companion figure in silicone, listed at a suggested retail of $1,900 on a price list dated 4 October 2025. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 39 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["ak-2-165", "ak-15-159", "wm-164f"],
    images: [
    {
      src: "/images/products/ak-9-164/hero",
      alt: "164 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-9-164/gallery-01",
      alt: "164 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-9-164/gallery-02",
      alt: "164 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-9-164/gallery-03",
      alt: "164 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-9-164/gallery-04",
      alt: "164 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    }
    ],
  },
  {
    slug: "ak-15-159",
    sku: "AK15-159",
    name: "159 cm silicone companion",
    shortName: "159 cm silicone",
    title: "159 cm silicone companion",
    line: "silicone",
    collection: "companion",
    heightCm: 159,
    materials: ["Silicone"],
    defaultMaterial: "Silicone",
    prices: {"Silicone":1900},
    priceKind: "suggested-retail",
    priceSource: "Suggested retail of $1,900 from a silicone-companion price list dated 4 October 2025. Reconfirmed before payment.",
    weightKg: 35,
    measurements: {
      fullBust: "88 cm",
      underBust: "67 cm",
      waist: "63 cm",
      hip: "100 cm",
      foot: "23 cm",
      leg: "87 cm",
      arm: "70 cm",
      shoulder: "34 cm",
    },
    measurementSource: "Silicone companion price list, 4 October 2025. Net weight 35 kg.",
    availability: "available-to-order",
    featured: false,
    voiceBoxEligible: true,
    summary: "159 cm silicone companion. 35 kg. Available to order. Suggested retail $1,900. Stock and the final price are reconfirmed before payment.",
    description: [
      "159 cm silicone companion is an adult companion figure in silicone, listed at a suggested retail of $1,900 on a price list dated 4 October 2025. It is not on the November 2026 US or EU warehouse lists we have. It is available to order. Lead time is confirmed in writing before payment. We do not publish a delivery-day range.",
      "The weight we are using is 35 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["ak-9-164", "wm-159c", "wm-159g"],
    images: [
    {
      src: "/images/products/ak-15-159/hero",
      alt: "159 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-15-159/gallery-01",
      alt: "159 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-15-159/gallery-02",
      alt: "159 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 866,
      height: 1400,
    },
    {
      src: "/images/products/ak-15-159/gallery-03",
      alt: "159 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    },
    {
      src: "/images/products/ak-15-159/gallery-04",
      alt: "159 cm silicone companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 933,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-166c",
    sku: "WM-166C",
    name: "166 cm C-cup STPE companion",
    shortName: "166 cm C-cup STPE",
    title: "166 cm C-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 166,
    cup: "C",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 33,
    measurements: {
      fullBust: "81 cm",
      underBust: "62 cm",
      waist: "53 cm",
      hip: "84 cm",
      foot: "21 cm",
      shoulder: "42 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025.",
    availability: "us-warehouse",
    featured: true,
    voiceBoxEligible: true,
    summary: "166 cm C-cup STPE companion. 33 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "166 cm C-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 33 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-157b", "ak-2-165", "wm-164f"],
    images: [
    {
      src: "/images/products/wm-166c/hero",
      alt: "166 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 937,
      height: 1400,
    },
    {
      src: "/images/products/wm-166c/gallery-01",
      alt: "166 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-166c/gallery-02",
      alt: "166 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-166c/gallery-03",
      alt: "166 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 917,
      height: 1373,
    },
    {
      src: "/images/products/wm-166c/gallery-04",
      alt: "166 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-157b",
    sku: "WM-157B",
    name: "157 cm B-cup STPE companion",
    shortName: "157 cm B-cup STPE",
    title: "157 cm B-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 157,
    cup: "B",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 29,
    measurements: {
      fullBust: "68 cm",
      underBust: "60 cm",
      waist: "57 cm",
      hip: "83 cm",
      foot: "21 cm",
      shoulder: "33 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 29 kg.",
    availability: "eu-warehouse",
    featured: true,
    voiceBoxEligible: true,
    summary: "157 cm B-cup STPE companion. 29 kg. On the November 2026 EU warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "157 cm B-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the EU warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 29 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-166c", "wm-159c", "wm-160a"],
    images: [
    {
      src: "/images/products/wm-157b/hero",
      alt: "157 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 921,
      height: 1400,
    },
    {
      src: "/images/products/wm-157b/gallery-01",
      alt: "157 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 794,
      height: 1400,
    },
    {
      src: "/images/products/wm-157b/gallery-02",
      alt: "157 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 882,
      height: 1400,
    },
    {
      src: "/images/products/wm-157b/gallery-03",
      alt: "157 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 982,
      height: 1400,
    },
    {
      src: "/images/products/wm-157b/gallery-04",
      alt: "157 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 841,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-163h",
    sku: "WM-163H",
    name: "163 cm H-cup STPE companion",
    shortName: "163 cm H-cup STPE",
    title: "163 cm H-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 163,
    cup: "H",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 51,
    measurements: {
      fullBust: "96 cm",
      underBust: "69 cm",
      waist: "67.5 cm",
      hip: "113 cm",
      foot: "21 cm",
      shoulder: "42 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 51 kg.",
    availability: "us-warehouse",
    featured: true,
    voiceBoxEligible: true,
    summary: "163 cm H-cup STPE companion. 51 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "163 cm H-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 51 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head. Plan for the lift, the doorway, and a stand that can carry this weight.",
    ],
    caveats: [
      "This is a heavy figure (51 kg on the data file we are using). Please consider lifting and a suitable stand before you order.",
    ],
    related: ["wm-173h", "wm-174g", "wm-166c"],
    images: [
    {
      src: "/images/products/wm-163h/hero",
      alt: "163 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 930,
      height: 1400,
    },
    {
      src: "/images/products/wm-163h/gallery-01",
      alt: "163 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 930,
      height: 1400,
    },
    {
      src: "/images/products/wm-163h/gallery-02",
      alt: "163 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 931,
      height: 1400,
    },
    {
      src: "/images/products/wm-163h/gallery-03",
      alt: "163 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 931,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-159c",
    sku: "WM-159C",
    name: "159 cm C-cup STPE companion",
    shortName: "159 cm C-cup STPE",
    title: "159 cm C-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 159,
    cup: "C",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 36,
    measurements: {
      fullBust: "83 cm",
      underBust: "69 cm",
      waist: "57 cm",
      hip: "90 cm",
      shoulder: "34 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 36 kg. Foot length is not given on that row and is omitted here.",
    availability: "available-to-order",
    featured: false,
    voiceBoxEligible: true,
    summary: "159 cm C-cup STPE companion. 36 kg. Available to order. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "159 cm C-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It is not on the November 2026 US or EU warehouse lists we have. It is available to order. Lead time is confirmed in writing before payment. We do not publish a delivery-day range.",
      "The weight we are using is 36 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-159g", "ak-15-159", "wm-160a"],
    images: [
    {
      src: "/images/products/wm-159c/hero",
      alt: "159 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 881,
      height: 1400,
    },
    {
      src: "/images/products/wm-159c/gallery-01",
      alt: "159 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 909,
      height: 1400,
    },
    {
      src: "/images/products/wm-159c/gallery-02",
      alt: "159 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 917,
      height: 1400,
    },
    {
      src: "/images/products/wm-159c/gallery-03",
      alt: "159 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 958,
      height: 1400,
    },
    {
      src: "/images/products/wm-159c/gallery-04",
      alt: "159 cm C-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-159g",
    sku: "WM-159G",
    name: "159 cm G-cup STPE companion",
    shortName: "159 cm G-cup STPE",
    title: "159 cm G-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 159,
    cup: "G",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 37,
    measurements: {
      fullBust: "90 cm",
      underBust: "69 cm",
      waist: "57 cm",
      hip: "90 cm",
      shoulder: "34 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 37 kg. Foot length is not given on that row and is omitted here.",
    availability: "us-warehouse",
    featured: false,
    voiceBoxEligible: true,
    summary: "159 cm G-cup STPE companion. 37 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "159 cm G-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 37 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-159c", "ak-15-159", "wm-160a"],
    images: [
    {
      src: "/images/products/wm-159g/hero",
      alt: "159 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 922,
      height: 1400,
    },
    {
      src: "/images/products/wm-159g/gallery-01",
      alt: "159 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-159g/gallery-02",
      alt: "159 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1025,
      height: 1400,
    },
    {
      src: "/images/products/wm-159g/gallery-03",
      alt: "159 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-160a",
    sku: "WM-160A",
    name: "160 cm A-cup STPE companion",
    shortName: "160 cm A-cup STPE",
    title: "160 cm A-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 160,
    cup: "A",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 34,
    measurements: {
      fullBust: "69 cm",
      underBust: "59 cm",
      waist: "56 cm",
      hip: "93 cm",
      foot: "21 cm",
      shoulder: "36 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 34 kg.",
    availability: "available-to-order",
    featured: false,
    voiceBoxEligible: true,
    summary: "160 cm A-cup STPE companion. 34 kg. Available to order. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "160 cm A-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It is not on the November 2026 US or EU warehouse lists we have. It is available to order. Lead time is confirmed in writing before payment. We do not publish a delivery-day range.",
      "The weight we are using is 34 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-157b", "wm-159c", "wm-166c"],
    images: [
    {
      src: "/images/products/wm-160a/hero",
      alt: "160 cm A-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-160a/gallery-01",
      alt: "160 cm A-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 985,
    },
    {
      src: "/images/products/wm-160a/gallery-02",
      alt: "160 cm A-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 934,
    },
    {
      src: "/images/products/wm-160a/gallery-03",
      alt: "160 cm A-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 927,
    },
    {
      src: "/images/products/wm-160a/gallery-04",
      alt: "160 cm A-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 934,
    }
    ],
  },
  {
    slug: "wm-162e",
    sku: "WM-162E",
    name: "162 cm E-cup STPE companion",
    shortName: "162 cm E-cup STPE",
    title: "162 cm E-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 162,
    cup: "E",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 35,
    measurements: {
      fullBust: "81 cm",
      waist: "57 cm",
      hip: "91 cm",
      foot: "22 cm",
      shoulder: "37 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 35 kg. Under bust is not given on that row and is omitted here.",
    availability: "us-warehouse",
    featured: false,
    voiceBoxEligible: true,
    summary: "162 cm E-cup STPE companion. 35 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "162 cm E-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 35 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-164f", "wm-166c", "wm-160a"],
    images: [
    {
      src: "/images/products/wm-162e/hero",
      alt: "162 cm E-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 931,
      height: 1400,
    },
    {
      src: "/images/products/wm-162e/gallery-01",
      alt: "162 cm E-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-162e/gallery-02",
      alt: "162 cm E-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-162e/gallery-03",
      alt: "162 cm E-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 934,
    },
    {
      src: "/images/products/wm-162e/gallery-04",
      alt: "162 cm E-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 934,
    }
    ],
  },
  {
    slug: "wm-172b",
    sku: "WM-172B",
    name: "172 cm B-cup STPE companion",
    shortName: "172 cm B-cup STPE",
    title: "172 cm B-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 172,
    cup: "B",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 39,
    measurements: {
      fullBust: "79 cm",
      underBust: "66 cm",
      waist: "58 cm",
      hip: "86 cm",
      foot: "21 cm",
      shoulder: "38 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 39 kg.",
    availability: "us-warehouse",
    featured: false,
    voiceBoxEligible: true,
    summary: "172 cm B-cup STPE companion. 39 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "172 cm B-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 39 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-172d", "wm-175b", "ak-1-175"],
    images: [
    {
      src: "/images/products/wm-172b/hero",
      alt: "172 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 922,
      height: 1400,
    },
    {
      src: "/images/products/wm-172b/gallery-01",
      alt: "172 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 939,
      height: 1400,
    },
    {
      src: "/images/products/wm-172b/gallery-02",
      alt: "172 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-172b/gallery-03",
      alt: "172 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-172b/gallery-04",
      alt: "172 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 975,
    }
    ],
  },
  {
    slug: "wm-172d",
    sku: "WM-172D",
    name: "172 cm D-cup STPE companion",
    shortName: "172 cm D-cup STPE",
    title: "172 cm D-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 172,
    cup: "D",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 40,
    measurements: {
      fullBust: "85 cm",
      underBust: "65 cm",
      waist: "59 cm",
      hip: "85 cm",
      foot: "21 cm",
      shoulder: "39 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 40 kg.",
    availability: "us-warehouse",
    featured: false,
    voiceBoxEligible: true,
    summary: "172 cm D-cup STPE companion. 40 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "172 cm D-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 40 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-172b", "wm-174g", "wm-175b"],
    images: [
    {
      src: "/images/products/wm-172d/hero",
      alt: "172 cm D-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 949,
      height: 1400,
    },
    {
      src: "/images/products/wm-172d/gallery-01",
      alt: "172 cm D-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 928,
      height: 1400,
    },
    {
      src: "/images/products/wm-172d/gallery-02",
      alt: "172 cm D-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-172d/gallery-03",
      alt: "172 cm D-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 947,
      height: 1400,
    },
    {
      src: "/images/products/wm-172d/gallery-04",
      alt: "172 cm D-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1400,
      height: 951,
    }
    ],
  },
  {
    slug: "wm-174g",
    sku: "WM-174G",
    name: "174 cm G-cup STPE companion",
    shortName: "174 cm G-cup STPE",
    title: "174 cm G-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 174,
    cup: "G",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 39,
    measurements: {
      fullBust: "86 cm",
      waist: "66 cm",
      hip: "100 cm",
      foot: "22 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 39 kg. Under bust and shoulder are not given on that row and are omitted. Foot length is recorded as 22 cm.",
    availability: "available-to-order",
    featured: false,
    voiceBoxEligible: true,
    summary: "174 cm G-cup STPE companion. 39 kg. Available to order. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "174 cm G-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It is not on the November 2026 US or EU warehouse lists we have. It is available to order. Lead time is confirmed in writing before payment. We do not publish a delivery-day range.",
      "The weight we are using is 39 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["wm-173h", "wm-172d", "wm-175b"],
    images: [
    {
      src: "/images/products/wm-174g/hero",
      alt: "174 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1004,
      height: 1400,
    },
    {
      src: "/images/products/wm-174g/gallery-01",
      alt: "174 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 934,
      height: 1400,
    },
    {
      src: "/images/products/wm-174g/gallery-02",
      alt: "174 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 910,
      height: 1400,
    },
    {
      src: "/images/products/wm-174g/gallery-03",
      alt: "174 cm G-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 887,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-173h",
    sku: "WM-173H",
    name: "173 cm H-cup STPE companion",
    shortName: "173 cm H-cup STPE",
    title: "173 cm H-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 173,
    cup: "H",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 45,
    measurements: {
      fullBust: "100 cm",
      waist: "59 cm",
      hip: "110 cm",
      foot: "22 cm",
      shoulder: "46 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 45 kg. Under bust is not given on that row and is omitted here.",
    availability: "us-warehouse",
    featured: true,
    voiceBoxEligible: true,
    summary: "173 cm H-cup STPE companion. 45 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "173 cm H-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 45 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head. Plan for the lift, the doorway, and a stand that can carry this weight.",
    ],
    caveats: [
      "This is a heavy figure (45 kg on the data file we are using). Please consider lifting and a suitable stand before you order.",
    ],
    related: ["wm-163h", "wm-174g", "ak-1-175"],
    images: [
    {
      src: "/images/products/wm-173h/hero",
      alt: "173 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 815,
      height: 1280,
    },
    {
      src: "/images/products/wm-173h/gallery-01",
      alt: "173 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 854,
      height: 1280,
    },
    {
      src: "/images/products/wm-173h/gallery-02",
      alt: "173 cm H-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 1280,
      height: 864,
    }
    ],
  },
  {
    slug: "wm-164f",
    sku: "WM-164F",
    name: "164 cm F-cup STPE companion",
    shortName: "164 cm F-cup STPE",
    title: "164 cm F-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 164,
    cup: "F",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 33,
    measurements: {
      fullBust: "78 cm",
      underBust: "56 cm",
      waist: "61 cm",
      hip: "91 cm",
      foot: "21 cm",
      shoulder: "34 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 33 kg. These measurements are for this companion body, not for the separate 164 cm F-cup expression-head figure.",
    availability: "us-eu-warehouse",
    featured: false,
    voiceBoxEligible: true,
    summary: "164 cm F-cup STPE companion. 33 kg. On the November 2026 US and EU warehouse lists. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "164 cm F-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on both the US and EU warehouse lists we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 33 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head. This page is the companion body. The facial-expression head is a separate product, listed at $3,099.",
    ],
    caveats: [
      "This is the companion body, not the AI expression head. See the AI robots page if you want the facial-expression head.",
    ],
    related: ["wm-164-f-1068", "wm-162e", "ak-9-164"],
    images: [
    {
      src: "/images/products/wm-164f/hero",
      alt: "164 cm F-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the body. The head shown is an example pairing, not a fixed configuration. A printed overlay on some of these photographs does not match this listing; use the specifications on this page.",
      width: 966,
      height: 1400,
    },
    {
      src: "/images/products/wm-164f/gallery-01",
      alt: "164 cm F-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the body. The head shown is an example pairing, not a fixed configuration. A printed overlay on some of these photographs does not match this listing; use the specifications on this page.",
      width: 948,
      height: 1400,
    },
    {
      src: "/images/products/wm-164f/gallery-02",
      alt: "164 cm F-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the body. The head shown is an example pairing, not a fixed configuration. A printed overlay on some of these photographs does not match this listing; use the specifications on this page.",
      width: 918,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-175b",
    sku: "WM-175B",
    name: "175 cm B-cup STPE companion",
    shortName: "175 cm B-cup STPE",
    title: "175 cm B-cup STPE companion",
    line: "stpe",
    collection: "companion",
    heightCm: 175,
    cup: "B",
    materials: ["STPE"],
    defaultMaterial: "STPE",
    prices: {"STPE":2199},
    compareAtPrices: {"STPE":2599},
    priceKind: "current-price",
    priceSource: "Current price $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. Reconfirmed before payment. A TPE build can be requested and is priced only after confirmation.",
    weightKg: 38,
    measurements: {
      fullBust: "77 cm",
      underBust: "64 cm",
      waist: "55 cm",
      hip: "88 cm",
      foot: "20 cm",
      shoulder: "35 cm",
    },
    measurementSource: "Companion body data file, 30 September 2025. Net weight 38 kg.",
    availability: "us-warehouse",
    featured: false,
    voiceBoxEligible: true,
    summary: "175 cm B-cup STPE companion. 38 kg. On the November 2026 US warehouse list. Shown at $2,199. Stock and the final price are reconfirmed before payment.",
    description: [
      "175 cm B-cup STPE companion is an adult companion figure listed in STPE. The current price is $2,199, shown beside a previous list price of $2,599, as of 15 November 2026. A TPE build can be requested and is priced only after confirmation. It appears on the US warehouse list we received in November 2026. We reconfirm that a unit is still there, and which head and finish are actually on it, before payment. We do not publish a unit count or a delivery-day range.",
      "The weight we are using is 38 kg. Head, skin tone, eye colour, and hair are chosen with your inquiry and confirmed against what is actually available. This is a posed companion figure. It does not walk. The optional voice box is a separate $100 audio add-on, pending confirmation, and it is not the facial-expression head.",
    ],
    caveats: [

    ],
    related: ["ak-1-175", "wm-172b", "wm-174g"],
    images: [
    {
      src: "/images/products/wm-175b/hero",
      alt: "175 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 927,
      height: 1400,
    },
    {
      src: "/images/products/wm-175b/gallery-01",
      alt: "175 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 912,
      height: 1400,
    },
    {
      src: "/images/products/wm-175b/gallery-02",
      alt: "175 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 975,
      height: 1400,
    },
    {
      src: "/images/products/wm-175b/gallery-03",
      alt: "175 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 938,
      height: 1400,
    },
    {
      src: "/images/products/wm-175b/gallery-04",
      alt: "175 cm B-cup STPE companion. Photograph of the figure. The head shown is an example pairing, not a fixed configuration.",
      caption: "Photograph of the figure. The head shown is an example pairing, not a fixed configuration. A printed overlay, where one is visible, is not our product title.",
      width: 907,
      height: 1400,
    }
    ],
  },
  {
    slug: "wm-164-f-1068",
    sku: "WM-164F-1068-AI",
    name: "164 cm F-cup AI expression head",
    shortName: "164 cm F-cup expression head",
    title: "164 cm F-cup AI expression head",
    line: "ai",
    collection: "ai-robot",
    heightCm: 164,
    cup: "F",
    headCode: "1068",
    materials: ["Silicone","STPE"],
    defaultMaterial: "Silicone",
    prices: {"Silicone":3099},
    priceKind: "list-price",
    priceSource: "Listed at $3,099 as of 15 November 2026. Reconfirmed before payment. Connectivity is confirmed before dispatch.",
    measurements: {},
    measurementSource: "The notes we have for this expression-head figure give 164 cm and an F-cup. They do not give a weight or a full measurement chart, and one title we saw used a different cup letter. We list F-cup and we do not copy the companion-body chart onto this product. Measurements are confirmed before dispatch.",
    availability: "available-to-order",
    featured: true,
    voiceBoxEligible: true,
    summary: "A non-walking facial-expression head on a 164 cm F-cup figure, listed at $3,099 as of 15 November 2026. Available to order. Connectivity is confirmed before dispatch. It does not walk.",
    description: [
      "This is the AI figure in the catalog today: a facial-expression head on a 164 cm F-cup body, listed at $3,099 as of 15 November 2026. It is available to order. It is not on the November 2026 US or EU warehouse lists, and a companion body of the same height being on those lists does not mean this expression head is in stock. The price and the configuration are reconfirmed before payment.",
      "Notes supplied with this head describe a voice platform, a touch display, a microphone and speakers, Wi-Fi and Bluetooth, and facial expressions that include a smile, a made face, and a kiss, plus language switching, stories, weather, reminders, and saved questions. The same notes give about eight hours of standby and about three hours of continuous interaction. We have not timed those figures ourselves.",
      "Two limits are part of the product. The head does not walk, and the body does not move on its own; it is posed by hand, with limited motion in the head and neck. We also do not promise that the conversation features work on a home Wi-Fi network in the US or the EU. Connectivity is confirmed before dispatch.",
      "Material is confirmed before payment. Some notes title the body as silicone; others describe an STPE body with this head. The optional voice box is a separate audio add-on at $100, pending confirmation, and it does not depend on that network connection.",
    ],
    caveats: [
      "Available to order. It is not on the November 2026 US or EU warehouse lists we have. The expression head is configured separately. We do not mark this figure in stock because a similar companion body appears on a warehouse list.",
      "Facial-expression features depend on a working network connection. We do not promise that this already works on US or EU home Wi-Fi. Connectivity is confirmed before dispatch.",
      "This figure does not walk and does not move on its own. The body is posed by hand.",
      "Material is confirmed before payment. Some notes say silicone and others describe an STPE body with this head.",
      "Body measurements other than 164 cm and F-cup were not in the notes we are using. They are confirmed before dispatch.",
    ],
    related: ["wm-164f", "ak-9-164", "wm-166c"],
    images: [
    {
      src: "/images/products/wm-164-f-1068/hero",
      alt: "164 cm F-cup AI expression head. Photograph of the 164 cm F-cup body. The expression head is configured separately, and the head in the photograph is an example pairing.",
      caption: "Photograph of the body. The head shown is an example pairing, not a fixed configuration. A printed overlay on some of these photographs does not match this listing; use the specifications on this page.",
      width: 966,
      height: 1400,
    },
    {
      src: "/images/products/wm-164-f-1068/gallery-01",
      alt: "164 cm F-cup AI expression head. Photograph of the 164 cm F-cup body. The expression head is configured separately, and the head in the photograph is an example pairing.",
      caption: "Photograph of the body. The head shown is an example pairing, not a fixed configuration. A printed overlay on some of these photographs does not match this listing; use the specifications on this page.",
      width: 948,
      height: 1400,
    },
    {
      src: "/images/products/wm-164-f-1068/gallery-02",
      alt: "164 cm F-cup AI expression head. Photograph of the 164 cm F-cup body. The expression head is configured separately, and the head in the photograph is an example pairing.",
      caption: "Photograph of the body. The head shown is an example pairing, not a fixed configuration. A printed overlay on some of these photographs does not match this listing; use the specifications on this page.",
      width: 918,
      height: 1400,
    },
    {
      src: "/images/products/wm-164-f-1068/gallery-03",
      alt: "Diagram of the expression head, showing a screen or ports. The head does not walk.",
      caption: "Diagram from the expression-head notes. It is not a photograph of a walking robot.",
      width: 1400,
      height: 735,
    },
    {
      src: "/images/products/wm-164-f-1068/gallery-04",
      alt: "Diagram of the expression head, showing a screen or ports. The head does not walk.",
      caption: "Diagram from the expression-head notes. It is not a photograph of a walking robot.",
      width: 1400,
      height: 729,
    },
    {
      src: "/images/products/wm-164-f-1068/gallery-05",
      alt: "Diagram of the expression head, showing a screen or ports. The head does not walk.",
      caption: "Diagram from the expression-head notes. It is not a photograph of a walking robot.",
      width: 503,
      height: 494,
    }
    ],
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function companions(): Product[] {
  return products.filter((p) => p.collection === 'companion');
}

export function aiRobots(): Product[] {
  return products.filter((p) => p.collection === 'ai-robot');
}

export function featuredProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function isWarehouseStock(p: Product): boolean {
  return (
    p.availability === 'us-warehouse' ||
    p.availability === 'eu-warehouse' ||
    p.availability === 'us-eu-warehouse'
  );
}

export function usWarehouseProducts(): Product[] {
  return products.filter((p) => p.availability === 'us-warehouse' || p.availability === 'us-eu-warehouse');
}

export function euWarehouseProducts(): Product[] {
  return products.filter((p) => p.availability === 'eu-warehouse' || p.availability === 'us-eu-warehouse');
}

export function relatedProducts(product: Product): Product[] {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}

export function formatPrice(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

export function startingPrice(p: Product): number {
  const values = Object.values(p.prices).filter((n): n is number => typeof n === 'number');
  return Math.min(...values);
}

export function compareAtPrice(p: Product, material?: Material): number | undefined {
  const m = material && p.compareAtPrices?.[material] != null ? material : p.defaultMaterial;
  const value = p.compareAtPrices?.[m];
  const current = p.prices[m];
  if (value == null || current == null || value <= current) return undefined;
  return value;
}

export function priceKindLabel(p: Product): string {
  if (p.priceKind === 'suggested-retail') return 'Suggested retail';
  if (p.priceKind === 'current-price') return 'Current price';
  return 'Listed price';
}

export function availabilityLabel(p: Product): string {
  if (p.availability === 'us-warehouse') return 'US warehouse';
  if (p.availability === 'eu-warehouse') return 'EU warehouse';
  if (p.availability === 'us-eu-warehouse') return 'US and EU warehouses';
  return 'Available to order';
}

export function lineLabel(line: Line): string {
  if (line === 'silicone') return 'Silicone companion';
  if (line === 'stpe') return 'STPE companion';
  return 'AI expression head';
}

export function leadTimeCopy(p: Product): string {
  if (p.collection === 'ai-robot') {
    return 'This expression-head figure is available to order. It is not on the November 2026 US or EU warehouse lists we have. Lead time, material, and connectivity are confirmed in writing before payment and before dispatch. We do not promise that the expression head works on a US or EU home Wi-Fi network, and we do not publish a delivery-day range.';
  }
  if (p.availability === 'us-warehouse') {
    return 'This body is on the US warehouse list we received in November 2026. We will confirm whether a unit is still there — and the head, skin, and material actually available — before you are asked to pay. We do not publish a unit count or a delivery-day range.';
  }
  if (p.availability === 'eu-warehouse') {
    return 'This body is on the EU warehouse list we received in November 2026. We will confirm whether a unit is still there — and the head, skin, and material actually available — before you are asked to pay. We do not publish a unit count or a delivery-day range.';
  }
  if (p.availability === 'us-eu-warehouse') {
    return 'This body is on the US and EU warehouse lists we received in November 2026. We will confirm whether a unit is still there — and the head, skin, and material actually available — before you are asked to pay. We do not publish a unit count or a delivery-day range.';
  }
  return 'This figure is available to order. It is not on the November 2026 US or EU warehouse lists we have. Lead time and configuration are confirmed in writing before payment. We do not publish a delivery-day range.';
}

export function heightBand(cm: number): '157-159' | '160-164' | '165-169' | '170-175' {
  if (cm <= 159) return '157-159';
  if (cm <= 164) return '160-164';
  if (cm <= 169) return '165-169';
  return '170-175';
}

export const HEIGHT_BANDS = [
  { id: '157-159', label: '157–159 cm' },
  { id: '160-164', label: '160–164 cm' },
  { id: '165-169', label: '165–169 cm' },
  { id: '170-175', label: '170–175 cm' },
] as const;

export const SKU_COUNT = products.length;

export { VOICE_BOX };
