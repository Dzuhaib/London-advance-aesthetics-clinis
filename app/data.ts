// Image configuration — every photo is a licensed Unsplash file and can be swapped by
// replacing the URL alone. Hostname must stay in next.config.mjs remotePatterns.
export const photos = {
  hero: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1500&q=88',
  philosophy: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1000&q=88',
  feature: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=88',
  clinic: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1600&q=88',
  treatments: 'https://images.unsplash.com/photo-1761718209694-70031ee64f82?auto=format&fit=crop&w=1000&q=88',
  placeholder: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85',
}

/** A treatment with its own photo, shown as a card on the homepage carousel and /treatments. */
export type Treatment = {
  slug: string
  name: string
  short: string
  detail: string
  image: string
  /** Shown in the homepage carousel. The full list lives on /treatments. */
  featured?: boolean
}

export const treatments: Treatment[] = [
  {
    slug: 'anti-wrinkle',
    name: 'Anti-Wrinkle Treatments',
    short: 'Soften lines while preserving expression',
    detail: 'Small, carefully placed doses to ease the lines that form with movement, most often across the forehead, between the brows and around the eyes. The aim is a rested look with your expressions left intact.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    short: 'Restore balance and subtle definition',
    detail: 'Used to replace lost volume and bring quiet definition to the cheeks, lips, jawline or chin. We work conservatively and in stages, so the change reads as balance rather than as something added.',
    image: 'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'face-prp',
    name: 'Face PRP',
    short: 'Rejuvenation using your own plasma',
    detail: 'Sometimes called a vampire facial. Platelet-rich plasma is prepared from a small sample of your own blood and returned to the skin. It rejuvenates the skin, reduces wrinkles and dark circles, and enhances glow and firmness.',
    image: 'https://images.unsplash.com/photo-1761819921052-2c34973e012c?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'lumi-eyes',
    name: 'Lumi Eyes',
    short: 'Brighter, fresher-looking eyes',
    detail: 'A series of small injections around the eyes to reduce wrinkles and dark circles. Suited to an area that is difficult to reach with creams alone.',
    image: 'https://images.unsplash.com/photo-1627687579653-1a7eacb78c82?auto=format&fit=crop&w=800&q=82',
  },
  {
    slug: 'profhilo',
    name: 'Profhilo',
    short: 'Intense hydration and firmness',
    detail: 'A skin booster for intense hydration that stimulates collagen and elastin from within. Firmness improves gradually across the face, neck or hands, usually over two sessions set a month apart.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=82',
  },
  {
    slug: 'polynucleotides',
    name: 'Polynucleotides',
    short: 'Texture, elasticity and repair',
    detail: 'Improves texture and elasticity, supporting the skin to heal from within over several weeks. Often chosen for delicate areas such as beneath the eyes.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=82',
  },
  {
    slug: 'skin-boosters',
    name: 'Skin Boosters',
    short: 'Deep hydration for a brighter complexion',
    detail: 'Injectable hydration placed just beneath the surface to improve moisture, softness and light in the skin. Suited to skin that looks tired or dry rather than lined.',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=82',
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    short: 'Stimulate collagen and refine texture',
    detail: 'Fine needles create controlled micro-channels that stimulate collagen, refine texture and reduce fine lines. Usually taken as a course rather than a single visit.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=82',
  },
  {
    slug: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    short: 'Improve tone, texture and clarity',
    detail: 'A programme rather than a single treatment, pairing in-clinic procedures with a simple routine at home. Chosen for dullness, uneven tone and early signs of ageing, with progress reviewed as we go.',
    image: 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'exosomes-therapy',
    name: 'Exosomes Therapy',
    short: 'Regenerative care for skin and scalp',
    detail: 'Used on both the face and the hair. On the skin it supports rejuvenation and reduces signs of ageing and puffiness; on the scalp it stimulates the hair follicles and helps prevent hair loss.',
    image: 'https://images.unsplash.com/photo-1672062519629-abe610383152?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'hair-prp',
    name: 'Hair PRP',
    short: 'Strengthen roots and reduce hair fall',
    detail: 'Platelet-rich plasma applied to the scalp to strengthen the hair roots, reduce hair fall and stimulate regrowth. Taken as a course, with progress reviewed between sessions.',
    image: 'https://images.unsplash.com/photo-1742280159636-3a06652ac9d9?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'fat-dissolving-injections',
    name: 'Fat Dissolving Injections',
    short: 'Target stubborn, localised fat',
    detail: 'Targets stubborn areas of fat for a more sculpted look. Suited to small, defined areas rather than general weight loss, and planned across a short course.',
    image: 'https://images.unsplash.com/photo-1761819922058-d15028ed9817?auto=format&fit=crop&w=800&q=82',
  },
  {
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    short: 'A gradual reduction in unwanted hair',
    detail: 'Light energy is directed at the hair follicle to reduce regrowth over a course of sessions. We patch test first, then plan the number of sessions around your hair and skin type. Available for the face and body.',
    image: 'https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
  {
    slug: 'hijama-cupping-therapy',
    name: 'Hijama (Cupping Therapy)',
    short: 'Traditional cupping, carried out with care',
    detail: 'Dry or wet cupping performed by a trained practitioner in a clean clinical setting, using sterile single-use equipment. Sessions are unhurried, and we talk through what to expect and how the skin may look afterwards.',
    image: 'https://images.unsplash.com/photo-1598555748505-ccca0d9b9f7b?auto=format&fit=crop&w=800&q=82',
    featured: true,
  },
]

/**
 * A family of menu items listed as text rows under one image — used where the items
 * differ by blend rather than by procedure, so a photo per item would say nothing.
 */
export type MenuGroup = {
  slug: string
  name: string
  blurb: string
  image: string
  alt: string
  items: { name: string; benefit: string }[]
}

export const menuGroups: MenuGroup[] = [
  {
    slug: 'iv-drips',
    name: 'IV Drips',
    blurb: 'Vitamins and minerals given through a drip, in a private room over roughly forty-five minutes. Which blend suits you, and whether a drip is appropriate at all, is decided at consultation.',
    image: 'https://images.unsplash.com/photo-1763310225009-50214e3c99d9?auto=format&fit=crop&w=1000&q=85',
    alt: 'An intravenous drip line in a clinical setting',
    items: [
      { name: 'Immunity Booster Drip', benefit: 'A vitamin-led blend, chosen with immune support in mind' },
      { name: 'Anti-Ageing Drip', benefit: 'An antioxidant-led blend for the skin and general wellbeing' },
      { name: 'Fat Burner Drip', benefit: 'Intended to sit alongside diet and exercise, not to replace them' },
      { name: 'Hydration Drip', benefit: 'Fluids and electrolytes for when you feel depleted' },
      { name: 'Skin Glow & Brightening Drip', benefit: 'An antioxidant blend aimed at clarity and brightness' },
      { name: 'Signature Special Drip', benefit: 'Our own blend — we will talk you through it at consultation' },
    ],
  },
  {
    slug: 'vitamin-injections',
    name: 'IM Vitamin Injections',
    blurb: 'A single intramuscular injection, quicker than a drip and often taken as a short course. We will confirm what is suitable for you before booking.',
    image: 'https://images.unsplash.com/photo-1578308175085-444a1fbea0fe?auto=format&fit=crop&w=1000&q=85',
    alt: 'A syringe and vial prepared on a clean clinical surface',
    items: [
      { name: 'Vitamin B12', benefit: 'Energy, metabolism and mood' },
      { name: 'Vitamin C', benefit: 'Immunity' },
      { name: 'Biotin', benefit: 'Healthy hair, skin and nails' },
      { name: 'B Complex', benefit: 'Boosts energy levels and supports the nervous system' },
      { name: 'Glutathione', benefit: 'A powerful antioxidant' },
      { name: 'Vitamin D', benefit: 'Strengthens bones and improves muscle function' },
    ],
  },
]
