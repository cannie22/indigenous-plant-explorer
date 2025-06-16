const regions = {
  "Ethiopia": [
    { name: "Vernonia amygdalina", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Erythrina brucei", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Croton macrostachyus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa stenopetala", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Albizia gummifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Olea europaea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cila-Addam", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "West/East Ethiopia": [
    { name: "Damakasee", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "North Tanzania": [
    { name: "Qarabichoo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Albizia", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Commiphora", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Ziziphus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "South Ethiopia": [
    { name: "Rhamnus prinoides", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Hagenia abyssinica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Zimbabwe": [
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Psidium guajava", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Sclerocarya birrea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Tanzania": [
    { name: "Dracaena fragrans", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Impatiens walleriana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Drynaria volkensii", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Benein, West Africa": [
    { name: "Vitellaria paradoxa,", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Parkia biglobosa,", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Elaeis guineensis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Ghana": [
    { name: "Xylopia aethiopica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Burkina Faso": [
    { name: "Xylopia aethiopica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Cameroon": [
    { name: "Xylopia aethiopica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Nigeria": [
    { name: "Xylopia aethiopica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Benin": [
    { name: "Xylopia aethiopica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Uganda": [
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Rawanda": [
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
  "Kenya": [
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Traditional medicinal plant" },
  ],
};