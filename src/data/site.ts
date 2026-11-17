export const SITE = {
  name: 'AIB Robot',
  legalName: 'AI Bionic Robot',
  tagline: 'AI bionic and companion robots, described as they are today.',
  description:
    'AIB Robot is a category site for AI bionic and companion robots. The figure for sale today with an expression head is a non-walking head on a 164 cm body. Adult companion figures in the catalog are transitional products. English language. Adults 18+.',
  url: 'https://aibrobot.com',
  lang: 'en',
  locale: 'en_US',
  ogImage: '/images/brand/og.jpg',
  priceYear: '2026',
  warehouseLabel: 'November 2026 US and EU warehouse lists',
  warehouseDate: 'November 2026',
  builtOn: '16 November 2026',
} as const;

export const PRICE_DISCLAIMER =
  'STPE companions are shown at $2,199, beside a previous list price of $2,599, as of 15 November 2026. Silicone companions use suggested retail from a 4 October 2025 list. The AI expression-head figure is listed at $3,099 as of 15 November 2026. Warehouse notes come from lists received in November 2026. We do not publish unit counts. Stock and the final price are reconfirmed in writing before you are asked to pay.';

export const PRICE_DISCLAIMER_SHORT =
  'Prices shown are the public figures as of 15 November 2026, or suggested retail from a 4 October 2025 list for silicone companions. Stock and the final price are reconfirmed before payment.';

export const VOICE_BOX = {
  slug: 'ai-voice-box',
  name: 'AI voice box',
  price: 100,
  currency: 'USD',
  summary:
    'An optional audio add-on offered at $100, pending confirmation. It is not the facial-expression head, and it does not depend on a home Wi-Fi connection.',
} as const;

export const NAV = [
  { href: '/ai-robots', label: 'AI robots' },
  { href: '/shop', label: 'Shop' },
  { href: '/in-stock-us', label: 'US warehouse' },
  { href: '/in-stock-eu', label: 'EU warehouse' },
  { href: '/voice-box', label: 'Voice box' },
  { href: '/blog', label: 'Journal' },
  { href: '/about', label: 'About' },
] as const;

export const FOOTER = {
  collections: [
    { href: '/ai-robots', label: 'AI expression heads' },
    { href: '/shop', label: 'The collection' },
    { href: '/shop?line=silicone', label: 'Silicone companions' },
    { href: '/shop?line=stpe', label: 'STPE companions' },
    { href: '/in-stock-us', label: 'US warehouse list' },
    { href: '/in-stock-eu', label: 'EU warehouse list' },
    { href: '/voice-box', label: 'AI voice box' },
  ],
  guide: [
    { href: '/about', label: 'About AIB Robot' },
    { href: '/shipping', label: 'Shipping' },
    { href: '/materials', label: 'Materials' },
    { href: '/care', label: 'Care' },
    { href: '/wholesale', label: 'Trade inquiries' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Journal' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/returns', label: 'Returns' },
    { href: '/compliance', label: 'Compliance' },
  ],
} as const;

export const SILICONE_OPTIONS_2025 = {
  source: 'silicone-companion options sheet dated 4 October 2025',
  skin: ['Fair', 'Medium (light tan)', 'Tan'],
  feet: ['Normal', 'Standing'],
  eyes: [
    'Green (01)',
    'Blue-green (02)',
    'Brown (03)',
    'Lighter blue (04)',
    'Purple (05)',
    'Blue (06)',
  ],
  soundUsd: 30,
  implantedHairUsd: 150,
  implantedRealHairUsd: 280,
  breathingUsd: 100,
  suckingUsd: 100,
  breathingSuckingNote:
    'That 2025 sheet notes that breathing and suction functions could not always be combined. Current availability is confirmed with your order.',
  hands: 'an updated hand option, listed as free on that sheet',
  areola: ['Brown', 'Pink'],
} as const;
