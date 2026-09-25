// Builds the { "15 mm": ..., "17 mm": ..., "20 mm": ... } image map for one
// PTMT range, e.g. ptmtImages("long-body") -> public/products/ptmttaps/long-body-15mm.webp
function ptmtImages(rangeSlug) {
  return {
    "15 mm": `/products/ptmttaps/${rangeSlug}-15mm.webp`,
    "17 mm": `/products/ptmttaps/${rangeSlug}-17mm.webp`,
    "20 mm": `/products/ptmttaps/${rangeSlug}-20mm.webp`,
  };
}

export const sinksCatalog = {
  handmadeSinks: [
    {
      size: "18x16",
      bowl: "Single",
      finish: ["Matt", "Nano Black"],
      options: [],
      images: {
        Matt: "/products/handmade-sink.webp",
        "Nano Black": "/products/handmade/18x16-nano-blacks.webp",
      },
    },

    // Same everything else, different footprint — merged as one card, "Model" tabs
    {
      groupKey: "20x17-21x18-22x18",
      size: "20x17",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/20x17.webp",
    },
    {
      groupKey: "20x17-21x18-22x18",
      size: "21x18",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/21x18.webp",
    },
    {
      groupKey: "20x17-21x18-22x18",
      size: "22x18",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/22x18-sink.webp",
    },

    {
      size: "24x18",
      bowl: "Single",
      finish: ["Matt", "Nano Black", "Gold", "Mirror", "Rose Gold"],
      options: [],
      images: {
        Matt: "/products/handmade/24x18-matt-sink.webp",
        "Nano Black": "/products/handmade/24x18-nano-black-sinks.webp",
        Gold: "/products/handmade/24x18-gold-sink.webp",
        Mirror: "/products/handmade/24x18-mirror-sink.webp",
        "Rose Gold": "/products/handmade/24x18-rose-gold-sink.webp",
      },
    },
    {
      size: "24x18",
      bowl: "Single",
      finish: ["Matt", "Nano Black"],
      options: ["Taphole"],
      images: {
        Matt: "/products/handmade/24x18-taphole-matt-sink.webp",
        "Nano Black": "/products/handmade/24x18-taphole-nano-black-sink.webp",
      },
    },

    // Same everything else, different footprint — merged as one card, "Model" tabs
    {
      groupKey: "24x24-27x20-30x18-32x18-32x20",
      size: "24x24",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/24x24-sink.webp",
    },
    {
      groupKey: "24x24-27x20-30x18-32x18-32x20",
      size: "27x20",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/27x20-sink.webp",
    },
    {
      groupKey: "24x24-27x20-30x18-32x18-32x20",
      size: "30x18",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/30x18-sink.webp",
    },
    {
      groupKey: "24x24-27x20-30x18-32x18-32x20",
      size: "32x18",
      bowl: "Double",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/32x18-sink.webp",
    },
    {
      groupKey: "24x24-27x20-30x18-32x18-32x20",
      size: "32x20",
      bowl: "Single",
      finish: ["Matt"],
      options: [],
      image: "/products/handmade/32x20-sink.webp",
    },

    {
      size: "37x18",
      bowl: "Double",
      finish: ["Matt", "Nano Black"],
      options: [],
      images: {
        Matt: "/products/handmade/37x18-matt-sink.webp",
        "Nano Black": "/products/handmade/37x18-nano-black-sink.webp",
      },
    },
    {
      size: "37x18",
      bowl: "Double",
      finish: ["Matt", "Nano Black"],
      options: ["Taphole"],
      images: {
        Matt: "/products/handmade/37x18-taphole-matt.webp",
        "Nano Black": "/products/handmade/37x18-taphole-nano-black.webp",
      },
    },
    {
      size: "37x18",
      bowl: "Single",
      finish: ["Matt"],
      options: ["Drainboard"],
      image: "/products/handmade/37x18-drainboard.webp",
    },
    {
      size: "45x20",
      bowl: "Double",
      finish: ["Matt", "Nano Black"],
      options: [],
      images: {
        Matt: "/products/handmade/45x20-matt.webp",
        "Nano Black": "/products/handmade/45x20-nano-black.webp",
      },
    },
    {
      size: "45x20",
      bowl: "Double",
      finish: ["Matt", "Nano Black"],
      options: ["Taphole"],
      images: {
        Matt: "/products/handmade/45x20-taphole-matt.webp",
        "Nano Black": "/products/handmade/45x20-taphole-nano-black.webp",
      },
    },
    {
      size: "45x20",
      bowl: "Single",
      finish: ["Matt"],
      options: ["Drainboard"],
      image: "/products/handmade/45x20-drainboard.webp",
    },
  ],
  indianSinks: [
    // Different footprints merged into one card — "Model" tabs, each its own photo
    {
      groupKey: "14x16-15x12",
      size: "14x16",
      bowl: "Single",
      weightKg: 1,
      finish: "Glossy",
      image: "/products/indiansink/14x16.webp",
    },
    {
      groupKey: "14x16-15x12",
      size: "15x12",
      bowl: "Single",
      weightKg: 1,
      finish: "Glossy",
      image: "/products/indiansink/15x12.webp",
    },

    {
      size: "18x16",
      bowl: "Single",
      weightKg: 1.2,
      finish: "Glossy",
      image: "/products/indiansink/18x16.webp",
    },

    {
      groupKey: "20x17-21x18",
      size: "20x17",
      bowl: "Single",
      weightKg: 2.4,
      finish: "Glossy",
      image: "/products/indiansink/20x17.webp",
    },
    {
      groupKey: "20x17-21x18",
      size: "21x18",
      bowl: "Single",
      weightKg: 2.4,
      finish: "Glossy",
      image: "/products/indiansink/21x18.webp",
    },

    // Same size — the gauge/weight doesn't change the look, so it's listed as
    // plain info (weightOptions) instead of a tab. Back Coating looks
    // different, so it gets its own tab + its own image.
    {
      groupKey: "22x18",
      size: "22x18",
      bowl: "Single",
      weightOptions: [1.6, 2.1, 2.4, 2.7, 3.1],
      finish: "Glossy",
      image: "/products/indiansink/22x18.webp",
    },
    {
      groupKey: "22x18",
      variantLabel: "Back Coating",
      size: "22x18",
      bowl: "Single",
      weightKg: 3.1,
      finish: "Glossy",
      options: ["Square bowl back coating"],
      image: "/products/indiansink/22x18-back-coating.webp",
    },

    {
      groupKey: "24x18",
      size: "24x18",
      bowl: "Single",
      weightOptions: [1.6, 2.1, 2.4, 2.7, 3.1],
      finish: "Glossy",
      image: "/products/indiansink/24x18.webp",
    },
    {
      groupKey: "24x18",
      variantLabel: "Back Coating",
      size: "24x18",
      bowl: "Single",
      finish: "Glossy",
      options: ["Square bowl back coating"],
      image: "/products/indiansink/24x18-back-coating.webp",
    },
    {
      groupKey: "24x18",
      variantLabel: "Side Cut Drainboard",
      size: "24x18",
      bowl: "Single",
      finish: "Glossy",
      options: ["Bowl with Drainboard", "Side Cut"],
      image: "/products/indiansink/24x18-side-cut-drainboard.webp",
    },
    {
      groupKey: "24x18",
      variantLabel: "Curved (Matka)",
      size: "24x18",
      finish: "Glossy",
      notes: "Curved (matka) shaped sink",
      image: "/products/indiansink/24x18-curved-matka.webp",
    },
    {
      groupKey: "24x18",
      variantLabel: "Diamond Cut",
      size: "24x18",
      finish: "Glossy",
      notes: "Square sink with diamond cut pattern",
      image: "/products/indiansink/24x18-diamond-cut.webp",
    },

    {
      groupKey: "37x18",
      size: "37x18",
      bowl: "Double",
      weightOptions: [3, 4],
      finish: "Glossy",
      image: "/products/indiansink/37x18.webp",
    },
    {
      groupKey: "37x18",
      variantLabel: "Back Coating",
      size: "37x18",
      bowl: "Double",
      weightKg: 4,
      finish: "Glossy",
      options: ["Square bowl back coating"],
      image: "/products/indiansink/37x18-back-coating.webp",
    },
    {
      groupKey: "45x20-drainboard",
      variantLabel: "Single Bowl",
      size: "45x20",
      bowl: "Single",
      finish: "Glossy",
      options: ["Drainboard"],
      image: "/products/indiansink/45x20-drainboard-single.webp",
    },
    {
      groupKey: "45x20-drainboard",
      variantLabel: "Double Bowl",
      size: "45x20",
      bowl: "Double",
      finish: "Glossy",
      image: "/products/indiansink/45x20-double.webp",
    },

  ],
  grade304Sinks: [
    {
      groupKey: "18x16",
      size: "18x16",
      finish: "Matt",
      options: [],
      image: "/products/grade304/18x16-grade.webp",
    },
    {
      groupKey: "18x16",
      variantLabel: "Backcoating",
      size: "18x16",
      finish: "Matt",
      options: [],
      image: "/products/grade304/18x16-backcoating.webp",
    },

    {
      groupKey: "24x18",
      size: "24x18",
      finish: "Matt",
      options: [],
      image: "/products/grade304/24x18-grade.webp",
    },
    {
      groupKey: "24x18",
      variantLabel: "Taphole",
      size: "24x18",
      finish: "Matt",
      options: ["Taphole"],
      image: "/products/grade304/24x18-taphole-grade.webp",
    },

    {
      size: "30x18",
      bowl: "Single",
      finish: "Matt",
      options: [],
      image: "/products/grade304/30x18-grade.webp",
    },

    {
      groupKey: "37x18",
      size: "37x18",
      finish: "Matt",
      options: [],
      image: "/products/grade304/37x18-grade.webp",
    },
    {
      groupKey: "37x18",
      variantLabel: "Taphole",
      size: "37x18",
      finish: "Matt",
      options: ["Taphole"],
      image: "/products/grade304/37x18-taphole-grade.webp",
    },
    {
      groupKey: "37x18",
      variantLabel: "Backcoating",
      size: "37x18",
      finish: "Matt",
      options: [],
      image: "/products/grade304/37x18-backcoating.webp",
    },

    {
      groupKey: "45x20",
      size: "45x20",
      finish: "Matt",
      options: [],
      image: "/products/grade304/45x20-grade.webp",
    },
    {
      groupKey: "45x20",
      variantLabel: "Taphole",
      size: "45x20",
      finish: "Matt",
      options: ["Taphole"],
      image: "/products/grade304/45x20-taphole-grade.webp",
    },
  ],
  waterfallSinks: [
    {
      size: "24x18",
      bowl: "Single",
      finish: "Nano Black",
      image: "/products/waterfall/24x18s.webp",
      options: [
        "Waterfall Faucet",
        "Glass Washer",
        "Soap Dispenser",
        "RO Tap",
        "Chopping Board",
        "Triangle Basket",
        "Square Basket",
        "Coupling Set",
      ],
    },
    {
      groupKey: "30x18",
      size: "30x18",
      bowl: "Single",
      finish: "Nano Black",
      image: "/products/waterfall/30x18.webp",
      options: [
        "Waterfall Faucet",
        "Glass Washer",
        "Soap Dispenser",
        "RO Tap",
        "Chopping Board",
        "Triangle Basket",
        "Square Basket",
        "Coupling Set",
      ],
    },
    {
      groupKey: "30x18",
      variantLabel: "With Piano Button",
      size: "30x18",
      bowl: "Single",
      finish: "Nano Black",
      image: "/products/waterfall/30x18-with-piano-button.webp",
      options: [
        "Piano Button",
        "Waterfall Faucet",
        "Glass Washer",
        "Soap Dispenser",
        "RO Tap",
        "Chopping Board",
        "Triangle Basket",
        "Square Basket",
        "Coupling Set",
      ],
    },
    {
      size: "37x18",
      bowl: "Double",
      finish: "Nano Black",
      image: "/products/waterfall/37x18-waterfalls.webp",
      options: [
        "Waterfall Faucet",
        "Glass Washer",
        "Soap Dispenser",
        "RO Tap",
        "Chopping Board",
        "Triangle Basket",
        "Square Basket",
        "Coupling Set",
      ],
    },
    {
      size: "46x18",
      bowl: "Double",
      finish: "Nano Black",
      image: "/products/waterfall/46x18-waterfall.webp",
      options: [
        "Waterfall Faucet",
        "Glass Washer",
        "Soap Dispenser",
        "RO Tap",
        "Chopping Board",
        "Triangle Basket",
        "Square Basket",
        "Coupling Set",
      ],
    },
  ],


  ptmtTaps: [
    { range: "Long body", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/long-body.webp", images: ptmtImages("long-body") },
    { range: "Bib cock", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/bib-cock.webp", images: ptmtImages("bib-cock") },
    { range: "Angel wall", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/angel-wall.webp", images: ptmtImages("angel-wall") },
    { range: "Pillar cock", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/pillar-cock.webp", images: ptmtImages("pillar-cock") },
    { range: "Nozzle cock", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/nozzle-cock.webp", images: ptmtImages("nozzle-cock") },
    { range: "Washing cock", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/washing-cock.webp", images: ptmtImages("washing-cock") },
    { range: "Sink cock", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/sink-cock.webp", images: ptmtImages("sink-cock") },
    { range: "Swan neck", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/swan-neck.webp", images: ptmtImages("swan-neck") },
    { range: "2 in 1 A/W", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/2-in-1-aw.webp", images: ptmtImages("2-in-1-aw") },
    { range: "2 in 1 B/C", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/2-in-1-bc.webp", images: ptmtImages("2-in-1-bc") },
    { range: "Centre hole", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/centre-hole.webp", images: ptmtImages("centre-hole") },
    { range: "Sink mixer", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/sink-mixer.webp", images: ptmtImages("sink-mixer") },
    { range: "Wall mixer - L band", size: ["15 mm", "17 mm", "20 mm"], image: "/products/ptmttaps/wall-mixer-l-band.webp", images: ptmtImages("wall-mixer-l-band") },
  ],
};

// Same colors/handle options apply to every PTMT range — keyed by size (sub-head)
export const ptmtSizeSpecs = {
  "15 mm": {
    colors: ["White", "Blue", "Ivory"],
    handles: ["Fusion", "Galaxy", "V-Cut", "Alive"],
  },
  "17 mm": {
    colors: ["Blue", "Grey"],
    handles: ["Fusion"],
  },
  "20 mm": {
    colors: ["Blue"],
    handles: ["Fusion"],
  },
};

// Slugs here are the URL path segments: /products/<slug>
export const productCategories = {
  handmade: {
    title: "HANDMADE SINK",
    description:
      "Premium handmade stainless steel sinks crafted with precision, elegant designs and superior finishing for modern kitchens.",
    image: "/products/handmade-sink.webp",
    // Drop per-model photos in public/products/handmade/<size>.webp
    imageFolder: "handmade",
    data: sinksCatalog.handmadeSinks,
    backHref: "/products/kitchen-sinks",
  },
  "indian-sink": {
    title: "INDIAN SINK",
    description:
      "Strong and durable stainless steel Indian sinks designed for everyday kitchen use with a practical design, smooth finish and easy maintenance.",
    image: "/products/indian_sink.webp",
    // Photos live in public/products/indiansink/<size>.webp (e.g. 14x16.webp)
    imageFolder: "indiansink",
    data: sinksCatalog.indianSinks,
    backHref: "/products/kitchen-sinks",
  },
  "ptmt-taps": {
    title: "PTMT TAPS",
    description:
      "Durable and lightweight PTMT taps designed for smooth water flow, reliable performance and long-lasting use in modern kitchens.",
    image: "/products/pmtp.webp",
    // Drop per-model photos in public/products/ptmttaps/<range>-<size>.webp
    imageFolder: "ptmttaps",
    data: sinksCatalog.ptmtTaps,
    sizeSpecs: ptmtSizeSpecs,
    backHref: "/products/bathroom-accessories",
  },
  waterfall: {
    title: "WATERFALL SINKS",
    description:
      "Modern waterfall sinks featuring an integrated waterfall-style water outlet, premium finishing and a unique design.",
    image: "/products/waterfall_sink.webp",
    // Drop per-model photos in public/products/waterfall/<size>.webp
    imageFolder: "waterfall",
    data: sinksCatalog.waterfallSinks,
    backHref: "/products/kitchen-sinks",
  },
  "premium-handmade": {
    title: "PREMIUM HANDMADE KITCHEN SINK",
    description:
      "High-grade handmade sinks manufactured with premium stainless steel, precise craftsmanship and superior finishing.",
    image: "/products/grade304-sink.webp",
    // Drop per-model photos in public/products/grade304/<size>.webp
    imageFolder: "grade304",
    data: sinksCatalog.grade304Sinks,
    backHref: "/products/kitchen-sinks",
  },
};

export const metallicGraniteProducts = {
  "24x18 - Single Bowl": [
    { name: "black.webp", image: "/metallicGraniteProducts/24_18/black.webp" },
    {
      name: "Brown.webp",
      image: "/metallicGraniteProducts/24_18/Brown_Finish.webp",
    },
    { name: "Gray.jpg", image: "/metallicGraniteProducts/24_18/gray.webp" },
    {
      name: "Cera Dotted.webp",
      image: "/metallicGraniteProducts/24_18/Cera_Dotted_Finish.webp",
    },
    {
      name: "gray_stone.webp",
      image: "/metallicGraniteProducts/24_18/gray_stone.webp",
    },
    {
      name: "Ivory Sand.webp",
      image: "/metallicGraniteProducts/24_18/Ivory Sand.webp",
    },
    {
      name: "Red Moon.webp",
      image: "/metallicGraniteProducts/24_18/Red Moon Finish.webp",
    },
  ],

  "37x18 | 45x18 - Double Bowl": [
    { name: "black.webp", image: "/metallicGraniteProducts/37_18/black.webp" },
    {
      name: "Cera Dotted.webp",
      image: "/metallicGraniteProducts/37_18/Cera Dotted.webp",
    },
    {
      name: "gray.webp",
      image: "/metallicGraniteProducts/37_18/gray-finishs.webp",
    },
    {
      name: "Ivory Sand.webp",
      image: "/metallicGraniteProducts/37_18/Ivory Sand.webp",
    },
    {
      name: "Red Moon.webp",
      image: "/metallicGraniteProducts/37_18/Red Moon.webp",
    },
    {
      name: "Peach Ivory.webp",
      image: "/metallicGraniteProducts/37_18/Peach Ivory.webp",
    },
  ],
};


function sizedVariants(folder, itemSlug, sizes, unit = '"') {
  return sizes.map((n) => ({
    label: `${n}${unit}`,
    image: `/products/bathroom/${folder}/${itemSlug}-${n}${unit === '"' ? "in" : unit.trim()}.webp`,
  }));
}

// Bathroom Accessories catalog

export const bathroomAccessories = {
  "drainer-jaali": {
    title: "DRAINER / JAALI",
    description:
      "Premium drain covers, jaali grates, shower drains and tile inserts for modern bathrooms.",
    image: "/products/bathroom/drainer-jaali/cockroach-trap.webp",
    items: [
      {
        name: "Beeding Jaali",
        sizeOptions: ['3"', '4"', '5"'],
        image: "/products/bathroom/drainer-jaali/beeding-jaali.webp",
      },
      {
        name: "Slice Jaali",
        sizeOptions: ['3"', '4"', '5"'],
        image: "/products/bathroom/drainer-jaali/slice-jaali.webp",
      },
      {
        name: "Round Lock Jaali",
        sizeOptions: ['5 Inch'],
        image: "/products/bathroom/drainer-jaali/lock-jaali.webp",
      },
      {
        name: "Square Lock Jaali",
        sizeOptions: ['5x5'],
        image: "/products/bathroom/drainer-jaali/square-lock-jaali.webp",
      },
      {
        name: "cockroach trap",
        sizeOptions: ['5"'],
        image: "/products/bathroom/drainer-jaali/cockroach-trap.webp",
      },
      {
        name: "Vertical Jaali",
        sizeOptions: ['3"', '4"', '5"', '6"', '8"', '10"', '12"'],
        image: "/products/bathroom/drainer-jaali/vertical-jaali.webp",
      },
      {
        name: "Shower Drainer",
        sizeOptions: ['12x4', '18x4', '24x4'],
        image: "/products/bathroom/drainer-jaali/shower-drainer.webp",

      },
      {
        name: "Tile Insert",
        sizeOptions: ['12x4', '18x4', '24x4', '5x5', '6x6'],
        image: "/products/bathroom/drainer-jaali/tile-insert.webp",

      },
    ],
  },

  "health-faucets": {
    title: "HEALTH FAUCETS",
    description: "Reliable, easy-to-use health faucets in multiple finishes.",
    image: "/products/bathroom/health-faucets/brass.webp",
    items: [
      { name: "Brass Health Faucet", simple: true, image: "/products/bathroom/health-faucets/brass.webp" },
      { name: "Stainless Steel Health Faucet", simple: true, image: "/products/bathroom/health-faucets/stainless-steel.webp" },
      { name: "ABS Health Faucet", simple: true, image: "/products/bathroom/health-faucets/abs.webp" },
    ],
  },

  "jet-spray": {
    title: "JET SPRAY",
    description: "Precision jet sprays for every bathroom setup.",
    image: "/products/bathroom/jet-spray/american.webp",
    items: [
      { name: "Multi", sizeOptions: ["1 mm", "1.5 mm"], image: "/products/bathroom/jet-spray/multi.webp" },
      { name: "Regular", sizeOptions: ["1 mm", "1.5 mm"], image: "/products/bathroom/jet-spray/regular.webp" },
      { name: "American", sizeOptions: ["2 mm", "1.5 mm"], image: "/products/bathroom/jet-spray/american.webp" },
    ],
  },

  "soap-dispenser": {
    title: "SOAP DISPENSER",
    description: "Elegant soap dispensers in a range of finishes.",
    image: "/products/bathroom/soap-dispenser/capsule.webp",
    items: [
      {
        name: "Capsule",
        variants: [
          { label: "White", image: "/products/bathroom/soap-dispenser/capsule-white.webp" },
          { label: "Black", image: "/products/bathroom/soap-dispenser/capsule-black.webp" },
          { label: "Chrome", image: "/products/bathroom/soap-dispenser/capsule-chrome.webp" },
          { label: "Gold", image: "/products/bathroom/soap-dispenser/capsule-gold.webp" },
        ],
      },
      {
        name: "Dolphin Dispenser",
        variants: [
          { label: "Black", image: "/products/bathroom/soap-dispenser/dolphin-black.webp" },
          { label: "White", image: "/products/bathroom/soap-dispenser/dolphin-white.webp" },
        ],
      },
      { name: "Transparent", simple: true, image: "/products/bathroom/soap-dispenser/transparent.webp" },
    ],
  },

  "overhead-shower": {
    title: "OVERHEAD SHOWER",
    description: "Rain showers and shower arms in a range of sizes and styles.",
    image: "/products/bathroom/overhead-shower/ultra-slim-8in.webp",
    items: [
      {
        name: "Ultra Slim",
        sizeOptions: ['4"', '6"', '8"', '10"', '12"'],
        image: "/products/bathroom/overhead-shower/ultra-slim-8in.webp",
      },
      {
        name: "Curve Shower",
        sizeOptions: ['4"', '6"', '8"'],
        image: "/products/bathroom/overhead-shower/curve-shower.webp",
      },
      {
        name: "Amaze",
        sizeOptions: ['4"', '6"', '8"'],
        image: "/products/bathroom/overhead-shower/amaze-shower.webp",
      },
      {
        name: "Sandwich",
        sizeOptions: ['4"', '6"', '8"'],
        image: "/products/bathroom/overhead-shower/sandwich-shower.webp",
      },
      {
        name: "Shower Arm",
        sizeOptions: ['9"', '12"', '15"', '18"', '24"'],
        image: "/products/bathroom/overhead-shower/shower-arm.webp",
      },
    ],
  },

  "towel-ring-rack": {
    title: "TOWEL RING, RACK / ROD",
    description: "Towel rings, racks and rods in classic and modern shapes.",
    image: "/products/bathroom/towel-ring-rack/rack-rod-18in.webp",
    items: [
      {
        name: "Towel Ring",
        variants: [
          { label: "Round", image: "/products/bathroom/towel-ring-rack/ring-round.webp" },
          { label: "Oval", image: "/products/bathroom/towel-ring-rack/ring-oval.webp" },
          { label: "Square", image: "/products/bathroom/towel-ring-rack/ring-square.webp" },
          { label: "Triangle", image: "/products/bathroom/towel-ring-rack/ring-triangle.webp" },
        ],
      },
      {
        name: "Rack / Rod",
        variants: [
          { label: '18"', image: "/products/bathroom/towel-ring-rack/rack-rod-18in.webp" },
          { label: '24"', image: "/products/bathroom/towel-ring-rack/rack-rod-24in.webp" },
        ],
      },
    ],
  },

  "brass-taps": {
    title: "BRASS TAPS",
    description:
      "Durable brass taps across our most popular varieties — available at Monfort, contact us to buy.",
    image: "/products/brass-tap.webp",
    // No product images — names only, with a contact-to-buy note
    textOnly: true,
    items: ["Oria", "Glassy", "Arya", "Star", "Opel", "ECO", "Fusion", "Polo"].map(
      (variety) => ({ name: variety }),
    ),
  },

  "acrylic-accessories": {
    title: "ACRYLIC ACCESSORIES",
    description: "Acrylic bathroom accessories for a clean, modern finish.",
    image: "/products/bathroom/acrylic-accessories/corner-set.webp",
    items: [
      { name: "3 Piece Corner Set", simple: true, image: "/products/bathroom/acrylic-accessories/corner-set.webp" },
      { name: "Soap Dish", simple: true, image: "/products/bathroom/acrylic-accessories/soap-dish.webp" },
      { name: "Double Soap Dish", simple: true, image: "/products/bathroom/acrylic-accessories/double-soap-dish.webp" },
      { name: "Tumbler Holder", simple: true, image: "/products/bathroom/acrylic-accessories/tumbler-holder.webp" },
      {
        name: "Shelf",
        variants: [
          { label: '12"', image: "/products/bathroom/acrylic-accessories/shelf-12in.webp" },
          { label: '18"', image: "/products/bathroom/acrylic-accessories/shelf-18ins.webp" },
          { label: '24"', image: "/products/bathroom/acrylic-accessories/shelf-24in.webp" },
        ],
      },
    ],
  },
};


export const ptmtTapsMenuEntry = {
  name: "PTMT Taps",
  href: "/products/ptmt-taps",
};

// Premium Montfort Accessories — one page per series.
// Images go in /public/products/premium/<code>.webp (e.g. br-1401.webp)
const premiumItem = (code, name) => ({
  name: `${name} (${code})`,
  simple: true,
  image: `/products/premium/${code.toLowerCase()}.webp`,
});

export const premiumAccessories = {
  brayston: {
    title: "BRAYSTON SERIES",
    description:
      "Square-edged stainless steel bathroom accessories with a sleek, modern chrome finish.",
    image: "/products/premium/br-1407.webp",
    items: [
      premiumItem("BR-1401", "Towel Rod"),
      premiumItem("BR-1402", "Towel Ring"),
      premiumItem("BR-1403", "Soap Dish"),
      premiumItem("BR-1404", "Tumbler Holder"),
      premiumItem("BR-1405", "Coat Hook"),
      premiumItem("BR-1407", "Towel Rack"),
      premiumItem("BR-1408", "Double Soap Dish"),
      premiumItem("BR-1409", "Soap Dish with Tumbler"),
      premiumItem("BR-1410", "Paper Holder with Flap"),
      premiumItem("BR-1411", "Liquid Soap Dispenser"),
    ],
  },

  technova: {
    title: "TECHNOVA SERIES",
    description:
      "Round-profile stainless steel bathroom accessories with a polished, timeless chrome finish.",
    image: "/products/premium/te-2211.webp",
    items: [
      premiumItem("TE-2201", "Towel Rod"),
      premiumItem("TE-2202", "Towel Ring"),
      premiumItem("TE-2203", "Soap Dish"),
      premiumItem("TE-2204", "Tumbler Holder"),
      premiumItem("TE-2205", "Coat Hook"),
      premiumItem("TE-2207", "Towel Rack"),
      premiumItem("TE-2208", "Double Soap Dish"),
      premiumItem("TE-2209", "Soap Dish with Tumbler"),
      premiumItem("TE-2210", "Paper Holder with Flap"),
      premiumItem("TE-2211", "Liquid Soap Dispenser"),
      premiumItem("TE-2218", "Double Soap Dish"),
      premiumItem("TE-2219", "Soap Dish with Tumbler"),
    ],
  },
};
