// WoodCraft Pallets – Product Data (Updated)
// Categories: Pallets (Ply/Pine/Local), Wooden Boxes/Crates, Other Packaging

const PRODUCTS = [

  // ── PALLETS ─────────────────────────────────────────────

  {
    id: 1,
    slug: "Two-way-pallets",
    name: "Two way pallets",
    category: "pallet",
    tags: ["pallet","twoWay","ply"],
    image: "images/two-way-pallet.webp",
    imageAlt: "Plywood two-way wooden pallet",
    shortDesc: "Sturdy plywood two-way entry pallets. Forklift access from front and back. Ideal for FMCG, pharma, and general warehousing.",
    description: "Our Plywood Two-Way Pallets are constructed from premium-grade plywood decks mounted on hardwood stringers, allowing forklift and pallet jack entry from two opposite sides. The smooth plywood surface prevents product damage and provides uniform load distribution. These pallets are lightweight yet strong, making them a cost-effective choice for FMCG, pharmaceutical, and light industrial applications. Available in standard and custom sizes.",
    specs: {
      "Material": "Plywood deck + Hardwood stringers",
      "Entry": "2-way (front and back)",
      "Standard Size": "1200 × 800 mm / Custom",
      "Load Capacity": "500–1,000 kg",
      "Plywood Grade": "BWR / Commercial",
      "Surface": "Smooth, splinter-free"
    },
    features: [
      "Smooth plywood surface protects packaged goods",
      "Lightweight — reduces shipping and handling costs",
      "Available in BWR (waterproof) plywood grade",
      "Uniform thickness for consistent stacking",
      "Custom sizes available on bulk orders",
      "ISPM-15 heat treatment available for export"
    ]
  },

  {
    id: 2,
    slug: "Four-way-pallets",
    name: "Four way pallets",
    category: "pallet",
    tags: ["pallet","fourWay","ply","export"],
    image: "images/four-way-pallets.jpg",
    imageAlt: "Plywood four-way entry pallet",
    shortDesc: "Plywood four-way entry pallets with block construction. Forklift access from all four sides for faster warehouse operations.",
    description: "Our Plywood Four-Way Pallets combine a smooth plywood deck with a 9-block hardwood base, enabling forklift and pallet jack access from all four sides. The block construction distributes load evenly and is preferred for automated warehouses, racking systems, and export cargo. The plywood surface ensures a clean, flat base ideal for pharmaceutical, food-grade, and FMCG goods.",
    specs: {
      "Material": "Plywood deck + 9-block base",
      "Entry": "4-way (all sides)",
      "Standard Size": "1200 × 1000 mm / Custom",
      "Load Capacity": "750–1,500 kg",
      "Plywood Grade": "BWR / MR",
      "Base Blocks": "Hardwood (9-block grid)"
    },
    features: [
      "Full 4-way forklift and pallet jack entry",
      "9-block base for superior load distribution",
      "Plywood deck protects sensitive goods",
      "Ideal for racking and automated warehouses",
      "Compatible with export ISPM-15 requirements",
      "Custom dimensions available"
    ]
  },

  {
    id: 3,
    slug: "Wooden-Boxes",
    name: "Wooden Boxes",
    category: "pallet",
    tags: ["pallet","twoWay","pine","export"],
    image: "images/wooden-boxes.jpg",
    imageAlt: "Pinewood two-way stringer pallet",
    shortDesc: "Classic pinewood stringer pallets with two-way entry. Cost-effective and widely used across logistics, retail, and export industries.",
    description: "Our Pinewood Two-Way Pallets are crafted from quality pine wood stringers and deck boards — the industry standard for domestic and export logistics. The natural pine construction offers an ideal strength-to-weight ratio. Stringers run the full pallet length with forklift entry from two sides. Heat treatment (ISPM-15) is available, making these pallets suitable for international export to USA, EU, Australia, and beyond.",
    specs: {
      "Material": "Pinewood (stringers + deck boards)",
      "Entry": "2-way (front and back)",
      "Standard Size": "1200 × 800 mm / 1200 × 1000 mm",
      "Load Capacity": "750–1,200 kg",
      "Moisture Content": "≤20%",
      "Treatment": "HT / KD available (ISPM-15)"
    },
    features: [
      "Light natural pine wood — excellent strength-to-weight",
      "Heat treated (ISPM-15) version available for export",
      "Kiln-dried to control moisture and prevent warping",
      "Standard GMA pallet dimensions available",
      "Most economical pallet option for bulk orders",
      "Suitable for domestic and international shipping"
    ]
  },

  {
    id: 4,
    slug: "Ply-Boxes",
    name: "Ply Boxes",
    category: "pallet",
    tags: ["pallet","fourWay","pine","export"],
    image: "images/ply.jpg",
    imageAlt: "Pinewood four-way entry pallet",
    shortDesc: "Pinewood four-way pallets with notched stringers or block base. Preferred by distribution centres and export logistics operators.",
    description: "Our Pinewood Four-Way Pallets provide the versatility of forklift entry from all four sides using either notched stringer construction or a full block base. Built from quality pine, these pallets are lightweight, durable, and ideal for high-throughput distribution centres, rack storage systems, and international export. ISPM-15 heat treatment is available as standard for all export-bound pallets.",
    specs: {
      "Material": "Pinewood",
      "Entry": "4-way (notched or block)",
      "Standard Size": "1200 × 1000 mm / Custom",
      "Load Capacity": "1,000–1,800 kg",
      "Treatment": "HT / ISPM-15 available",
      "Stringer Notch": "75 × 75 mm"
    },
    features: [
      "4-way entry for maximum warehouse flexibility",
      "Notched stringer or block base options",
      "Pine wood — lightweight yet strong",
      "ISPM-15 export certified version available",
      "Compatible with all racking systems",
      "Available in any custom size"
    ]
  },

  {
    id: 5,
    slug: "Pinewood-Boxes",
    name: "Pinewood Boxes",
    category: "pallet",
    tags: ["pallet","twoWay"],
    image: "images/pine-wood-box.jpg",
    imageAlt: "Local hardwood two-way pallet",
    shortDesc: "Budget-friendly two-way pallets made from locally sourced hardwood. Best for domestic transport, heavy loads, and one-way shipping.",
    description: "Our Local Wood Two-Way Pallets are manufactured using locally sourced hardwood species — a robust, heavy-duty, and cost-effective solution for domestic logistics. The dense hardwood provides excellent load-bearing capacity and resistance to damage, making these pallets ideal for heavy industrial goods, one-way shipments, and applications where durability matters more than weight. A practical choice for manufacturers looking to reduce packaging costs without compromising strength.",
    specs: {
      "Material": "Local hardwood (Eucalyptus / Poplar / Mixed)",
      "Entry": "2-way (front and back)",
      "Standard Size": "1200 × 800 mm / Custom",
      "Load Capacity": "1,000–2,000 kg",
      "Surface": "Rough sawn",
      "Best For": "Domestic / one-way shipment"
    },
    features: [
      "High load-bearing capacity from dense hardwood",
      "Most economical pallet option available",
      "Ideal for heavy industrial and engineering goods",
      "Locally sourced — shorter lead times",
      "Robust and impact-resistant",
      "Custom sizes and thicknesses available"
    ]
  },

  {
    id: 6,
    slug: "Seaworthy-Boxes",
    name: "Seaworthy Boxes",
    category: "pallet",
    tags: ["pallet","fourWay"],
    image: "images/seabox.jpg",
    imageAlt: "Local hardwood four-way pallet",
    shortDesc: "Heavy-duty local hardwood four-way pallets. Forklift access from all sides. Perfect for bulk warehousing and repeat-use applications.",
    description: "Our Local Wood Four-Way Pallets are built from locally sourced hardwood with a block or notched stringer base that allows full four-way forklift access. The dense hardwood construction delivers superior durability for repeat-use applications, bulk warehousing, and heavy loads. These are an ideal multi-trip pallet for manufacturers who need strength and cost efficiency in their domestic supply chain.",
    specs: {
      "Material": "Local hardwood",
      "Entry": "4-way (all sides)",
      "Standard Size": "1200 × 1000 mm / Custom",
      "Load Capacity": "1,500–2,500 kg",
      "Durability": "Multi-trip / Reusable",
      "Surface": "Rough sawn / Planed"
    },
    features: [
      "Dense hardwood for maximum durability",
      "4-way forklift entry from all sides",
      "Reusable — long service life reduces total cost",
      "High load capacity for heavy industrial goods",
      "Available with planed surface for sensitive cargo",
      "Custom dimensions on request"
    ]
  },

  // ── WOODEN BOXES & CRATES ────────────────────────────────

  {
    id: 7,
    slug: "Shrink-wrap",
    name: "Shrink wrap",
    category: "box",
    tags: ["box","ply","export"],
    image: "images/shrink-wrap.jpg",
    imageAlt: "Plywood wooden packaging boxes",
    shortDesc: "Precision-cut plywood boxes for electronics, machinery parts, and export packaging. Smooth finish, strong joints, custom sizes.",
    description: "Our Plywood Boxes are precision-manufactured from BWR (Boiling Water Resistant) or commercial-grade plywood for packaging applications that demand a smooth, clean finish and dimensional accuracy. Used widely in electronics, automotive components, machinery parts, and pharmaceutical export. The plywood construction provides excellent rigidity and can be customised with internal foam, bubble wrap lining, or dunnage to protect delicate goods during transit.",
    specs: {
      "Material": "BWR / MR / Commercial Plywood",
      "Thickness": "6mm, 9mm, 12mm, 18mm",
      "Closure": "Nail / Screw / Banded",
      "Lining": "Foam / Bubble wrap / VCI film",
      "Standard Sizes": "Custom-built to product",
      "Treatment": "ISPM-15 HT available"
    },
    features: [
      "Smooth interior surface prevents product scratching",
      "BWR grade available for moisture resistance",
      "Precision cutting for exact fit to your product",
      "Foam and bubble wrap lining available inside",
      "ISPM-15 heat treatment for export",
      "All joint types: nail, screw, and steel band"
    ]
  },

  {
    id: 8,
    slug: "Bubbles-Polythene",
    name: "Bubbles Polythene",
    category: "box",
    tags: ["box","custom"],
    image: "images/Packing-Material-Bubble-Sheet-Wrapping-.jpg",
    imageAlt: "Wooden nut bolt storage and shipping boxes",
    shortDesc: "Robust wooden boxes designed for heavy fasteners, hardware, and engineering parts. High load-bearing with reinforced base.",
    description: "Our Nut & Bolt Wooden Boxes are specifically engineered for packaging and transporting heavy hardware items such as nuts, bolts, fasteners, bearings, and precision engineering components. Built with reinforced bases and thicker side panels to handle dense, heavy loads without structural failure. The tight-fitting lid prevents spillage during transit, and optional compartment inserts keep components organised and separated.",
    specs: {
      "Material": "Hardwood / Plywood combination",
      "Base Reinforcement": "Double-layer base boards",
      "Standard Sizes": "Custom / As per requirement",
      "Load Capacity": "Up to 500 kg",
      "Lid Type": "Nail-on / Screw-on",
      "Compartments": "Optional internal dividers"
    },
    features: [
      "Reinforced double-layer base for heavy hardware",
      "Thick side panels prevent bulging under load",
      "Tight-fitting lid prevents part spillage",
      "Optional internal wooden dividers/compartments",
      "Handles and banding notches available",
      "Custom labelling / stencilling on outer surface"
    ]
  },

  {
    id: 9,
    slug: "Tape",
    name: "Tape",
    category: "box",
    tags: ["box","pine","export"],
    image: "images/tapes.jpg",
    imageAlt: "Pinewood export packing boxes",
    shortDesc: "Lightweight pinewood packaging boxes for domestic and export use. ISPM-15 heat treatment available for international shipments.",
    description: "Our Pinewood Boxes are constructed from quality pine boards, offering a lightweight yet strong packaging solution for a wide range of goods including machine parts, textiles, garments, automotive components, and general cargo. Pine's natural properties — low density with good structural strength — make these boxes ideal for air freight and sea freight where weight matters. ISPM-15 heat treatment is available for all international shipments.",
    specs: {
      "Material": "Pinewood boards",
      "Board Thickness": "12mm – 25mm",
      "Entry Type": "Slatted / Solid side panels",
      "Treatment": "ISPM-15 HT / KD",
      "Closure": "Nail-on lid with steel banding",
      "Custom Sizes": "Available"
    },
    features: [
      "Lightweight pine reduces shipping costs",
      "ISPM-15 heat treatment for export compliance",
      "Solid or slatted panel options for ventilation",
      "Available with internal foam and dunnage",
      "Steel banding for extra security in transit",
      "Suitable for air, sea, and road freight"
    ]
  },

  {
    id: 10,
    slug: "Wooden-Crates",
    name: "Wooden Crates",
    category: "box",
    tags: ["box","export"],
    image: "images/POD-Crates-Types-Pallets-727x463.jpg",
    imageAlt: "Seaworthy wooden export packing box",
    shortDesc: "Heavy-duty sea-freight grade wooden boxes. Moisture-resistant construction, ISPM-15 certified, built to withstand ocean shipping conditions.",
    description: "Our Seaworthy Wooden Boxes are engineered specifically for international ocean freight. Built to withstand the rigours of sea transit — humidity, salt air, temperature variation, and mechanical shocks — these boxes use moisture-resistant plywood or treated hardwood, sealed joints, and steel banding. All boxes are ISPM-15 certified with official IPPC stamp. Widely used for exporting machinery, generators, industrial equipment, and high-value goods.",
    specs: {
      "Material": "BWR Plywood / Treated hardwood",
      "Treatment": "ISPM-15 certified (HT/MB)",
      "Moisture Barrier": "Polyfilm / VCI film lining",
      "Closure": "Screw-on lid + steel banding",
      "IPPC Stamp": "Official marking included",
      "Suitable For": "FCL / LCL ocean freight"
    },
    features: [
      "ISPM-15 certified with official IPPC stamp",
      "BWR plywood withstands humid sea conditions",
      "Polyfilm or VCI lining prevents moisture ingress",
      "Screw-on lid + steel banding for maximum security",
      "Certificate of treatment provided",
      "Suitable for FCL and LCL ocean shipments"
    ]
  },

  {
    id: 11,
    slug: "Polythene",
    name: "Polythene",
    category: "box",
    tags: ["box","crate","export"],
    image: "images/poly1.jpeg",
    imageAlt: "Open and closed wooden shipping crates",
    shortDesc: "Industrial-grade wooden crates for heavy machinery, castings, and oversized cargo. Open-top and fully enclosed options available.",
    description: "Our Wooden Crates are built for transporting and storing heavy, oversized, or irregularly shaped industrial goods — including machinery, engines, castings, moulds, and engineering equipment. Available in open-top (for crane-loaded items) and fully enclosed designs. Corner block reinforcement ensures stackability. The pallet or skid base allows forklift handling. Custom internal brackets, foam dunnage, and pipe supports can be added for precise load securing.",
    specs: {
      "Type": "Open-top / Fully enclosed",
      "Construction": "Hardwood frame + board panels",
      "Base": "Integrated pallet/skid base",
      "Corner Reinforcement": "Hardwood corner blocks",
      "Stackable": "Yes (2–4 layers)",
      "Treatment": "ISPM-15 available"
    },
    features: [
      "Open-top design for crane and hoist loading",
      "Fully enclosed option for protection in transit",
      "Integrated pallet base for forklift handling",
      "Stackable with hardwood corner lock blocks",
      "Internal dunnage, foam, brackets on request",
      "ISPM-15 heat treatment for export"
    ]
  },

  {
    id: 12,
    slug: "Nut-Bolt-Boxes",
    name: "Nut Bolt Boxes",
    category: "box",
    tags: ["box","crate","export"],
    image: "images/nutbolt.jpg",
    imageAlt: "nut bolt boxes for industrial fasteners and hardware",
    shortDesc: "nut bolt boxes for industrial fasteners and hardware. Heavy-duty, reinforced wooden boxes for safe storage and transport of nuts, bolts, and small components.",
    description: "Our Nut Bolt Boxes are designed for the safe storage and transport of nuts, bolts, and small components. Constructed from durable wood, these boxes provide reliable protection during handling and transit.",
    specs: {
      "Material": "Wood (Pine / Hardwood)",
      "Width": "500mm / 750mm",
      "Gauge": "17–25 micron",
      "Format": "Hand roll / Machine roll",
      "Core Diameter": "50mm / 76mm",
      "Colour": "Clear / Black / Coloured"
    },
    features: [
      "High cling strength for secure pallet loads",
      "Pre-stretched film reduces material consumption",
      "UV-stabilised option for outdoor storage",
      "Machine roll for high-volume pallet wrapping",
      "Tamper-evident packaging for high-value goods",
      "Available in black for opaque/confidential loads"
    ]
  },

  // {
  //   id: 13,
  //   slug: "bubble-wrap",
  //   name: "Bubble Polythene (Bubble Wrap)",
  //   category: "packaging",
  //   tags: ["packaging"],
  //   image: "https://images.unsplash.com/photo-1573408301185-9519f94815b1?w=600&q=72&fm=webp&fit=crop",
  //   imageAlt: "Bubble wrap bubble polythene packaging",
  //   shortDesc: "Air-bubble protective packaging for fragile goods, electronics, and glassware. Supplied in rolls and sheets for all pack sizes.",
  //   description: "Our Bubble Polythene (Bubble Wrap) is a lightweight, air-cellular protective packaging material that cushions fragile, delicate, or precision goods against impact, vibration, and abrasion during transport and storage. Available in small bubble (10mm), medium bubble (20mm), and large bubble (30mm) formats, in rolls and sheets. Commonly used for wrapping electronics, glassware, ceramics, precision instruments, and furniture before packing into wooden boxes or crates.",
  //   specs: {
  //     "Bubble Size": "10mm / 20mm / 30mm",
  //     "Width": "500mm – 1500mm",
  //     "Roll Length": "50m – 100m",
  //     "Material": "LDPE (Low-Density Polyethylene)",
  //     "Layers": "Single-sided / Double-sided",
  //     "Colour": "Clear / Pink (anti-static)"
  //   },
  //   features: [
  //     "Cushions against impact and vibration",
  //     "Lightweight — does not add significant freight weight",
  //     "Anti-static pink bubble wrap for electronics",
  //     "Available in three bubble sizes for different protection levels",
  //     "Rolls and pre-cut sheets available",
  //     "Supplied in bulk for packing line operations"
  //   ]
  // },

  // {
  //   id: 14,
  //   slug: "polythene-sheets",
  //   name: "Polythene Sheets & Covers",
  //   category: "packaging",
  //   tags: ["packaging"],
  //   image: "https://images.unsplash.com/photo-1584545284372-f22510eb7c26?w=600&q=72&fm=webp&fit=crop",
  //   imageAlt: "Polythene plastic packing sheets and covers",
  //   shortDesc: "Heavy-duty polythene sheets and pallet covers for moisture protection, dust sealing, and VCI corrosion inhibition.",
  //   description: "Our Polythene Sheets and Covers protect goods and pallet loads from moisture, dust, and environmental contamination during storage and transit. Available as flat sheets, gusseted pallet covers, lay-flat tubing, and VCI (Volatile Corrosion Inhibitor) film for metal parts protection. Widely used as an inner liner for wooden boxes and crates, pallet top sheets, and machine covers. Supplied in standard and custom dimensions, in various gauges.",
  //   specs: {
  //     "Material": "LDPE / HDPE / VCI Film",
  //     "Gauge": "50–200 micron",
  //     "Format": "Flat sheet / Pallet cover / Tubing",
  //     "VCI Option": "Available for metal parts",
  //     "Width": "Custom sizes available",
  //     "Colour": "Clear / Black / Blue"
  //   },
  //   features: [
  //     "Moisture-proof barrier for packed goods",
  //     "VCI film prevents corrosion of metal components",
  //     "Gusseted pallet covers fit any pallet size",
  //     "Heavy-gauge options for outdoor storage",
  //     "Custom-cut to fit wooden box interiors",
  //     "Available in bulk rolls for packing line use"
  //   ]
  // },

  // {
  //   id: 15,
  //   slug: "tarpaulin-tape",
  //   name: "Tarpaulin (Tirpal) & Packing Tape",
  //   category: "packaging",
  //   tags: ["packaging"],
  //   image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=72&fm=webp&fit=crop",
  //   imageAlt: "Tarpaulin tirpal and packing tape",
  //   shortDesc: "Industrial tarpaulins for outdoor pallet protection and BOPP/PVC packing tapes for carton and box sealing. Complete packaging accessory supply.",
  //   description: "We supply industrial-grade Tarpaulin (Tirpal) in HDPE woven and PVC coated variants for covering and protecting pallet loads, machinery, and goods stored outdoors. Also available are BOPP packaging tape, brown tape, PVC tape, and filament tape in various widths for sealing cartons, wooden boxes, and stretch-wrapped loads. These packaging consumables are supplied alongside our pallets and boxes to provide a single-source complete packaging solution.",
  //   specs: {
  //     "Tarpaulin Material": "HDPE woven / PVC coated",
  //     "Tarpaulin GSM": "60–200 GSM",
  //     "Tape Types": "BOPP / Brown / PVC / Filament",
  //     "Tape Width": "48mm / 72mm",
  //     "Tape Length": "50m / 100m rolls",
  //     "Colour Options": "Blue, Green, Silver (tarpaulin)"
  //   },
  //   features: [
  //     "UV-stabilised tarpaulins for outdoor pallet storage",
  //     "Waterproof PVC coated tarpaulin for heavy-duty use",
  //     "High-tack BOPP tape for secure carton sealing",
  //     "Filament tape for banding heavy loads",
  //     "Supplied in bulk for warehouse operations",
  //     "Custom size tarpaulins stitched to order"
  //   ]
  // }

];
