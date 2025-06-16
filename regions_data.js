const regions = {
  "Unspecified": [
    { name: "Moringa oleifera (arid zones)Gliricidia sepium (green manure)Cocoa systems with diverse upper canopy treesOlive trees in Mediterranean silvopastoral systems", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhances biodiversity and habitat for pollinators and beneficial insects, Supports soil fertility and water retention. Reduces wildfire risk and erosion Provides carbon sequestration (notably in olive groves and cocoa systems)Acts as a buffer against extreme climate events Not directly addressed, though Moringa noted for health and soil rehabilitation uses Recognizes farmers’ traditional ecological knowledge (though not indigenous-specific)Emphasizes the need for education and community-led innovation Home gardens and agroforestry retain historical knowledge on tree management Agroforestry enhances farm resilience and provides multiple income sources. Wood biomass is promoted as a renewable energy source. Cocoa agroforestry contributes significantly to rural livelihoods (e.g., Cameroon, Ghana)" },
    { name: "Faidherbia albida (West Africa )Prosopis cineraria (India) Acacia senegal (gum arabic systems) Coffee", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, erosion control, nutrient cycling, microclimate amelioration, slope stabilization, climate mitigation via carbon sequestration. homegardens and forest farming are noted to include traditional medicinal species. cultural land use embedded in systems like homegardens and multistrata systems. Recognizes that traditional knowledge shapes spatial and temporal arrangements of crops and trees Systems provide subsistence (homegardens), commercial outputs (gum arabic), mixed income (coffee/cacao under shade trees), and rotational income (e.g., taungya and improved fallows)." },
    { name: "cacao", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, erosion control, nutrient cycling, microclimate amelioration, slope stabilization, climate mitigation via carbon sequestration. homegardens and forest farming are noted to include traditional medicinal species. cultural land use embedded in systems like homegardens and multistrata systems. Recognizes that traditional knowledge shapes spatial and temporal arrangements of crops and trees Systems provide subsistence (homegardens), commercial outputs (gum arabic), mixed income (coffee/cacao under shade trees), and rotational income (e.g., taungya and improved fallows)." },
    { name: "coconut", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, erosion control, nutrient cycling, microclimate amelioration, slope stabilization, climate mitigation via carbon sequestration. homegardens and forest farming are noted to include traditional medicinal species. cultural land use embedded in systems like homegardens and multistrata systems. Recognizes that traditional knowledge shapes spatial and temporal arrangements of crops and trees Systems provide subsistence (homegardens), commercial outputs (gum arabic), mixed income (coffee/cacao under shade trees), and rotational income (e.g., taungya and improved fallows)." },
    { name: "multipurpose fodder trees", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, erosion control, nutrient cycling, microclimate amelioration, slope stabilization, climate mitigation via carbon sequestration. homegardens and forest farming are noted to include traditional medicinal species. cultural land use embedded in systems like homegardens and multistrata systems. Recognizes that traditional knowledge shapes spatial and temporal arrangements of crops and trees Systems provide subsistence (homegardens), commercial outputs (gum arabic), mixed income (coffee/cacao under shade trees), and rotational income (e.g., taungya and improved fallows)." },
    { name: "Not listed in detail", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
    { name: "but examples include Faidherbia albida", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
    { name: "Acacia senegal", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
    { name: "coffee", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
    { name: "cacao", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
    { name: "oil palm", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
    { name: "nut and fruit trees across various systems.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Enhanced biodiversity

Microclimate regulation

Carbon sequestration

Soil fertility and erosion control

Climate resilience and landscape restoration paper notes that many traditional systems—especially homegardens—include medicinal plants as part of their multifunctionality. Agroforestry is rooted in long-standing local practices, making it highly adaptable and acceptable. It integrates cultural traditions through farm-family forestry, community participation, and collective land stewardship. Provides multiple products (fuel, fodder, food, timber), reduces risk through diversification, and increases labor efficiency. Agroforestry is recognized as a resilient income strategy in both subsistence and commercial contexts." },
  ],
  "Ethiopia (Southern, Central Highlands, Northern, Eastern, South-western, North-western, and Mid-Rift Valley)": [
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Millettia ferruginea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Ficus vasta", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Albizia gummifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Croton macrostachyus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Faidherbia albida", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Vernonia amygdalina", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Acacia nilotica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Erythrina brucei", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Citrus medica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Annona senegalensis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Moringa stenopetala", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Ficus sur", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
    { name: "Schefflera abyssinica and others", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improve soil fertility, conserve biodiversity, control erosion, mitigate climate change, provide shade, support nutrient cycling, and sequester carbon Vernonia amygdalina, Erythrina brucei, Croton macrostachyus, Moringa stenopetala, Cordia africana, Albizia gummifera, and Olea europaea used to treat toothaches, stomach issues, heart disease, wounds, and livestock illnesses Sacred trees like Cordia africana and Ficus sur serve in spiritual rituals and communal gatherings. Ethnomedicinal use and cultural ceremonies rely on species like Rhamnus prinoides. Agroforestry supports cultural continuity and traditional knowledge transmission. Provides food, fodder, fuelwood, timber, construction wood, honey, tools, income from fruit/tree product sales, employment creation, and household financial security" },
  ],
  "Western Ethiopia (Wollega Zones: Kellem, West, East, and Horro-Guduru)": [
    { name: "Mango", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "orange", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "papaya", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "avocado", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "lemon", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "lime", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "banana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Persea americana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Mangifera indica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Albizia schimperiana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Erythrina abyssinica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Ficus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Podocarpus falcatus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "Coffea arabica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "spices (cardamom", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "ginger)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
    { name: "and cereals.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil conservation, biodiversity protection, microclimate regulation, pest control, nitrogen fixation, water conservation, erosion prevention, and increased resilience to climate variability. Cila-Addam, Damakasee, Qarabichoo used for traditional healing; also used for making local fermented drinks (e.g., booka, farsoo); various trees provide herbal remedies and play roles in maintaining health. Sites for traditional ceremonies, ancestral land memory, indigenous conflict resolution under sacred trees, use of tree planting in rites of passage. Agroforestry sustains traditional food knowledge and spiritual-cultural plant uses. Income from fruits, timber, honey, livestock, firewood, spices (ginger, cardamom), coffee, khat, and tobacco. Agroforestry supports food security through consistent crop diversity and provides materials for construction and fuel." },
  ],
  "Ethiopia (Amhara Region: Gozamen, Gubalafto, Jabitehnan)": [
    { name: "Coffea arabica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Catha edulis (khat)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Rhamnus prinoides (gesho)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Enset ventricosum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Eucalyptus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Carica papaya", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Olea europaea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
    { name: "Musa spp. (banana)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High carbon sequestration in soil and biomass
- Improves soil organic matter, structure, and fertility
- Reduces GHG emissions
- Supports climate resilience and adaptation
- Restores degraded land and contributes to REDD+ goals Not a focus of this paper, but species like Enset and Gesho are used traditionally for health and beverages Systems rooted in traditional knowledge and land stewardship  - Use of livestock manure and farmyard inputs linked to local management practices  - Provides ecosystem services essential for local livelihoods Generates income from cash crops (coffee, khat, gesho) and firewood
- Enhances long-term productivity and profitability through diversified farming systems" },
  ],
  "Global (focus on Latin America, especially Brazil, plus Central America, India, Ethiopia, Philippines, Mexico)": [
    { name: "Fruits (banana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "citrus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "cacao", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "acai", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "etc.)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "Staples (cassava", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "beans", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "maize", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "yam)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "Timber and fuelwood species", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "Ornamentals and spiritual plants", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "Agroforestry trees (teak", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
    { name: "coffee shade trees)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservationRestoration of degraded ecosystemsClimate resilience and microclimate regulationEcosystem services (pollination, soil fertility, erosion control) Indigenous systems maintain and cultivate medicinal plants Transmission of ancestral knowledge

Land as sacred and cultural space

Role of women in knowledge preservation and management

Spiritual significance of land and biodiversity Income generation from diverse sources (e.g., fruits, crafts, medicinal plants)

Resilience through income diversification

Viable economic returns using NPV, IRR, and other investment metrics

Alternative to monoculture and industrial agriculture" },
  ],
  "Global non African context": [
    { name: "Bixa orellana (onoto)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "Cissus gongylodes (Kupa)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "banana (Musa spp.)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "manioc", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "yam", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "papaya", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "taro", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "- Shade trees", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "resins (e.g.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "Shorea species)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "hardwoods", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "fiber plants", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
    { name: "- Natural regeneration of timber and fruit species selectively managed", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil fertility restoration
- Forest regeneration and rewilding
- Climate resilience
- Habitat creation for biodiversity and wildlife
- Enhanced carbon sequestration Kayapo fallows: 94% of late-phase plants have medicinal use Ritual and ceremonial tree use
- Management passed down through generations
- Sacred species and cultural landscape stewardship
- Spiritual value of forest succession and biodiversity Income from long-term crops (banana, onoto, timber)
- Year-round harvests from fallow systems
- Marketable NTFPs: rope fiber, resins, dyes, honey
- Food, timber, medicine, and construction from rotating plots" },
  ],
  "Shinyanga Region, Northern Tanzania": [
    { name: "Acacia albida (Faidherbia albida)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Commiphora africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Cordia sinensis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Balanites aegyptiaca", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Terminalia brownii", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Acacia tortilis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Grewia bicolor", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Boscia angustifolia", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Albizia spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
    { name: "Ziziphus mauritiana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Regeneration of degraded rangelands
- Soil stabilization and moisture retention
- Tree regeneration and biodiversity recovery
- Reduction in erosion and desertification
- Restoration of vegetative cover and ecological resilience Many species used for treating wounds, fevers, stomach illnesses, and livestock health
- Traditional healers rely on species like Albizia, Commiphora, and Ziziphus for herbal remedies Indigenous tree management tied to customary land tenure systems
- Use of trees in rituals, shade, community meetings, and spiritual practices
- Ecological knowledge transferred through generations and linked to pastoralist traditions
- Cattle-based culture integral to tree use in communal landscapes Provides fodder, fuelwood, timber, construction poles, and shade for livestock
- Tree products used for household tools, medicine, and fencing
- Cattle productivity supported through improved grazing regimes
- Some potential for sale of tree products and sustainable livestock intensification" },
  ],
  "Tanzania (Tanga Region, East Africa)": [
    { name: "Afzelia quanzensis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
    { name: "Combretum molle", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
    { name: "Acacia nilotica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
    { name: "Ficus sycomorus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
    { name: "Albizia gummifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
    { name: "and other locally valued multipurpose trees", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Increases tree cover and soil carbon
- Improves soil fertility and structure
- Enhances water retention
- Reduces deforestation pressures by providing on-farm fuelwood sources many indigenous species also serve medicinal functions Local knowledge on species selection and regeneration
- Some trees serve spiritual or ceremonial functions
- Intergenerational knowledge transmission on land care Provides household energy needs (fuelwood)
- Potential for commercial fuelwood supply to nearby towns
- Trees support diversified household income and labor-sharing arrangements" },
  ],
  "Sheka Zone, Southwest Ethiopia (Shato core area of Sheka Biosphere Reserve)": [
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
    { name: "Ficus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
    { name: "Croton macrostachyus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
    { name: "wild coffee", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
    { name: "enset", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
    { name: "forest bamboo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
    { name: "and various endemic herbs", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of endemic and native biodiversity
- Forest regeneration and maintenance of ecological corridors
- Erosion control and water source protection
- Reduced habitat fragmentation Plants used to treat fevers, wounds, digestive issues, and spiritual ailments; rituals include the use of specific sacred trees Forests are viewed as sacred and used in rituals, burials, and conflict resolution
- Elders, priests, and local leaders enforce taboos and access rules
- Strong intergenerational knowledge transfer about trees and land stewardship Forests provide coffee, spices, medicinal plants, honey, timber, and bamboo
- Informal forest economy supports livelihoods without external inputs" },
  ],
  "Cameroon, Central and South Regions (Obala, Akongo, Mintom, Talba, Mbonge)": [
    { name: "Terminalia superba", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Dacryodes edulis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Persea americana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Elaeis guineensis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Musa sapientum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Mangifera indica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Milicia excelsa", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Ceiba pentandra", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
    { name: "Citrus sinensis.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity, shade tree canopies, habitat for biodiversity, support for ecological resilience, lower pesticide use, potential for long-term carbon sequestration. Akongo plots were noted to have the highest diversity of trees used for medicinal purposes. Species were not individually named for medicinal use Maintains traditional land management practices, intergenerational inheritance, family labor reliance, social structure embedded in land use traditions. Cocoa yield complemented by fruit and timber tree products; diversified income streams; resilience to cocoa price fluctuations." },
  ],
  "Global (with case studies from South and Southeast Asia, Africa, Latin America)": [
    { name: "Common components include food crops", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "fruit trees", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "timber trees", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "medicinal plants", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "fuelwood species", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "ornamentals", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "and palms.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "Region-specific species like Cocos nucifera (coconut)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "Artocarpus heterophyllus (jackfruit)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
    { name: "and Mangifera indica (mango).", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "High species diversity and biophysical advantages (nutrient cycling, soil protection).

Structural and functional mimicry of natural forests.

High carbon sequestration potential (10–126 Mg C ha⁻¹).

Prevention of soil erosion and nutrient leaching.

Habitat for biodiversity and conservation of endangered species. 27% of 272 species in Congo (Zaire) homegardens used for medicinal purposes. Reflect traditional lifestyles and cultural practices.

Women play key roles in species selection and management.

Facilitate gender equality and transfer of traditional knowledge.

Serve as a repository for spiritual and medicinal plants. Contribute to subsistence needs and nutritional security (3–44% of calorie intake).

Generate income through sale of fruits, vegetables, fuelwood, and NTFPs.

Provide employment, particularly for women and family labor.

Act as buffers during lean agricultural periods." },
  ],
  "Southwest Ethiopian Highlands (Keffa Zone)": [
    { name: "Coffea arabica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Croton macrostachyus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Albizia gummifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Millettia ferruginea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Ensete ventricosum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Persea americana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "Rhamnus prinoides", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
    { name: "and others", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Biodiversity conservation (especially shade-tolerant species)
- Carbon sequestration
- Soil moisture retention
- Buffering against land degradation
- Enhances resilience to climate variability and drought Rhamnus prinoides (used in traditional fermentation and medicinal applications); several indigenous species are retained for household medicine use Traditional knowledge informs management decisions
- Trees linked with identity and continuity of agroecological culture
- Community cohesion through land-use cooperation Income from coffee, spices, fruit, fuelwood, timber, and medicinal plants
- Agroforestry provides safety nets in times of crop failure
- Diversified livelihoods reduce vulnerability to market or climate shocks" },
  ],
  "South Central Ethiopia (Langano catchment across four agro-ecological zones)": [
    { name: "86 species identified", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "71 indigenous", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "15 exotic", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Common species include: Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Croton macrostachyus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Albizia gummifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Ficus sur", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Hagenia abyssinica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Eucalyptus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Podocarpus falcatus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
    { name: "Ziziphus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 71 indigenous woody species
- Species richness exceeding that of nearby natural forests
- Improved soil fertility and microclimate
- Landscape biodiversity retention across altitude gradients Not individually detailed, but many indigenous species (e.g. Hagenia abyssinica, Ziziphus spp.) have known traditional medicinal uses within the context of Ethiopian agroforestry Traditional knowledge shapes species selection and management
- Practices differ by household wealth, cultural customs, and location
- Trees serve spiritual, livelihood, and communal functions Eucalyptus, coffee, and Rhamnus prinoides dominate for market demand
- Tree use for construction, fodder, food, fuelwood, and income generation
- Larger landholders maintain higher species richness" },
  ],
  "Southern Africa (Malawi, Zambia, Zimbabwe, South Africa, Tanzania)": [
    { name: "Gliricidia sepium", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Acacia spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Acacia albida", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Leucaena spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Sesbania spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Tephrosia vogelii", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Uapaca kirkiana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Sclerocarya birrea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
    { name: "Strychnos cocculoides", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "In situ and circa situ conservation of agrobiodiversity
- Maintenance of belowground biodiversity
- Reduction of pressure on natural forests
- Enhanced soil fertility, carbon sequestration, and microclimate regulation High reliance on indigenous medicinal plants (e.g., African wild ginger, pepper bark tree)
- 770 species harvested in South Africa; overharvesting threatens extinction
- Medicinal use is a major driver for species retention in agroforestry Local knowledge governs species retention and land use decisions
- High reliance on traditional medicinal and fruit trees
- Supports cultural practices of indigenous communities Income from non-timber forest products, fruits, fuelwood, fodder, and medicinal plants
- Employment from harvesting and trading of wild and cultivated medicinal plants (over 66,000 in South Africa)" },
  ],
  "Nhema Communal Area, Midlands Province, Zimbabwe": [
    { name: "Common species: Mangifera indica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Psidium guajava", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Citrus limon", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Sclerocarya birrea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Carica papaya", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Zea mays", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Ipomoea batatas", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Phaseolus vulgaris", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Solanum tuberosum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Cucumis maxima", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Brassica oleracea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
    { name: "Lycopersicon esculentum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Conservation of 69 plant species across 35 families
- Maintenance of agro-biodiversity
- Reduced reliance on forest harvesting
- Enhanced soil fertility through compost and organic inputs Widespread use of local plants such as Moringa oleifera, Psidium guajava, Eucalyptus spp., Sclerocarya birrea for flu, fever, and digestive issues
- Knowledge protected due to cultural beliefs about efficacy being lost when shared Strong traditional plant knowledge
- Intergenerational transfer of gardening skills
- Cultural taboos around medicinal plants
- Strengthens family and social bonds through food sharing and seed exchanges Supplementary income from fruit and vegetable sales
- Year-round food production reduces household vulnerability
- Buffer during economic shocks and droughts
- Relatively low-cost entry point for the poor" },
  ],
  "Gutu District, Masvingo Province, Zimbabwe": [
    { name: "Uapaca kirkiana (muzhanje)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Ficus capensis (muonde)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Azanza garckeana (mutohwe)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Strychnos cocculoides (mutamba)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Euphorbia ingens", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Leucaena", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Acacia", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Sesbania", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
    { name: "Brachystegia spiciformis", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Potential for soil fertility improvement and erosion control
- Restoration of tree cover on degraded land
- Localized biodiversity conservation Culturally important species like Euphorbia ingens believed to offer protection; other indigenous trees have known traditional medicinal roles though specifics are not detailed Trees play cultural roles (e.g., Euphorbia ingens to ward off evil)
- Cutting indigenous fruit trees is taboo
- Women and elders play key roles in home-based planting decisions Fruit trees support household nutrition and income
- Fuelwood, construction poles, and shade trees serve subsistence needs
- Limited cash return from agroforestry due to market and resource constraints" },
  ],
  "Mt. Kilimanjaro, Tanzania (Southern and Southeastern slopes)": [
    { name: "Trees: Albizia schimperiana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Persea americana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Mangifera indica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Rauvolfia caffra", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Grevillea robusta", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Ficus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Syzygium cumini", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "- Crops: Musa spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Coffea arabica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Colocasia esculenta", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
    { name: "Carica papaya", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Over 523 vascular plant species, 400+ non-cultivated
- Conservation of forest remnants and apophytic species
- Refuge for epiphytes, lianas, and endangered species
- Soil protection, water regulation, carbon storage Many indigenous species used for medicine (e.g., Dracaena fragrans, Impatiens walleriana, ferns like Drynaria volkensii), although specific ailments often remain culturally protected knowledge Deeply tied to Chagga cultural identity
- Trees like Dracaena fragrans used in rituals and as burial hedges
- Knowledge passed intergenerationally
- Historical irrigation systems and land tenure embedded in culture Bananas (25+ varieties), coffee, fruits, firewood, timber
- Livelihood support through subsistence farming and small-scale trade
- 1/4 to 1/3 of fuelwood needs met by homegardens
- Bee-keeping as additional income source" },
  ],
  "Benin, West Africa": [
    { name: "Vitellaria paradoxa (Shea tree)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Elaeis guineensis (Palm oil tree)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Parkia biglobosa (African locust bean)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Mangifera indica (Mango)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Pterocarpus erinaceus (African kino)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Afzelia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Prosopis africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
    { name: "Vitex doniana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Improved soil fertility

Biodiversity conservation

Climate regulation

Shade provision 91.6% of farmers identified species for medicinal uses

Vitellaria paradoxa, Parkia biglobosa, and Elaeis guineensis commonly used for medicinal purposes Ritual and mystical species functions (limited but recognized)

Gendered knowledge impacts species selection and prioritization

Farmers' endogenous knowledge is central to species valuation and use Multipurpose trees contribute to income (firewood, saleable fruits, fodder)

Prioritized species offer medicinal and edible products for livelihoods

Women emphasized commercial and subsistence uses more than structural uses" },
  ],
  "Sub-Saharan Africa (focus on Ethiopia and East Africa)": [
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "Croton macrostachyus", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "Millettia ferruginea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "Persea americana (avocado)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "Mangifera indica (mango)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "Coffea arabica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "Ensete ventricosum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "various spices", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "vegetables", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
    { name: "legumes", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil and water conservation
- Biodiversity conservation
- Microclimate regulation
- Carbon sequestration (above- and below-ground biomass)
- Reduced deforestation and pressure on natural forests Species like Moringa oleifera and local herbs serve dual roles in nutrition and healing Strengthens family bonds and cultural ties
- Facilitates intergenerational knowledge transfer
- Symbol of household status
- Enhances social cohesion and local labor use Year-round food production
- Income from fruits, fuelwood, medicinal plants
- Risk aversion through system diversification
- Reduces dependence on external inputs" },
  ],
  "Didu District, Ilu Aba Bor Zone, Southwestern Ethiopia": [
    { name: "Albizia gummifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil nutrient enhancement (93.1%), water conservation (88%), erosion control (93.1%), improved soil fertility, and microclimate regulation. AF contributes to health through improved income allowing medical expenditure. Also supports food diversity and household resilience. Adopters earn more (ETB 38,912 vs. ETB 30,809), benefit from tree and fruit sales, livestock, beekeeping, and garden coffee. Improves income, education access, health care, and housing." },
    { name: "Millettia ferruginea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil nutrient enhancement (93.1%), water conservation (88%), erosion control (93.1%), improved soil fertility, and microclimate regulation. AF contributes to health through improved income allowing medical expenditure. Also supports food diversity and household resilience. Adopters earn more (ETB 38,912 vs. ETB 30,809), benefit from tree and fruit sales, livestock, beekeeping, and garden coffee. Improves income, education access, health care, and housing." },
    { name: "Pouteria adolfi-friederici", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil nutrient enhancement (93.1%), water conservation (88%), erosion control (93.1%), improved soil fertility, and microclimate regulation. AF contributes to health through improved income allowing medical expenditure. Also supports food diversity and household resilience. Adopters earn more (ETB 38,912 vs. ETB 30,809), benefit from tree and fruit sales, livestock, beekeeping, and garden coffee. Improves income, education access, health care, and housing." },
    { name: "Schefflera abyssinica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil nutrient enhancement (93.1%), water conservation (88%), erosion control (93.1%), improved soil fertility, and microclimate regulation. AF contributes to health through improved income allowing medical expenditure. Also supports food diversity and household resilience. Adopters earn more (ETB 38,912 vs. ETB 30,809), benefit from tree and fruit sales, livestock, beekeeping, and garden coffee. Improves income, education access, health care, and housing." },
    { name: "Sapium ellipticum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Soil nutrient enhancement (93.1%), water conservation (88%), erosion control (93.1%), improved soil fertility, and microclimate regulation. AF contributes to health through improved income allowing medical expenditure. Also supports food diversity and household resilience. Adopters earn more (ETB 38,912 vs. ETB 30,809), benefit from tree and fruit sales, livestock, beekeeping, and garden coffee. Improves income, education access, health care, and housing." },
  ],
  "Sub-Saharan Africa (pan-African with case studies in Cameroon, Benin, Nigeria, Ghana, Mali, Burkina Faso, and others)": [
    { name: "Ficus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Vitex spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Ziziphus mauritiana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Lannea spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Balanites aegyptiaca", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Xylopia aethiopica", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Carapa procera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Borassus aethiopium", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Baobab (Adansonia digitata)", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Chrysophyllum albidum", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
    { name: "Cirina butyrospermii", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "Agroforestry linked to agrobiodiversity conservation  - Promotes ecosystem services like soil health, climate mitigation  - Encourages sustainable use of underutilized native crops and reduces pressure on wild biodiversity Xylopia aethiopica and Moringa oleifera noted for medicinal and food preservation properties
- Traditional systems use wild plants for healing and enhancing food storage longevity Strong relationship between cultural identity and food species (e.g., sacred, ceremonial uses)
- Highlights ethnobotanical value and spiritual significance of native crops
- Knowledge embedded in gender, generation, and ritual contexts Commercialization of non-timber forest products (NTFPs) like shea butter, baobab, and Xylopia aethiopica
- Local market income for women, such as through Borassus aethiopium
- Value-chain development improves livelihoods and reduces rural poverty" },
  ],
  "East Africa (Ethiopia, Kenya, Tanzania, Uganda, Rwanda": [
    { name: "Faidherbia albida", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Grevillea robusta", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Cordia africana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Moringa oleifera", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Sesbania sesban", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Leucaena leucocephala", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Acacia spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
    { name: "Eucalyptus spp.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Leaf_icon_green.png", description: "nhances biodiversity and tree cover
- Improves soil fertility and water conservation
- Increases above-ground biomass and carbon stocks
- Reduces land degradation and promotes ecosystem services (e.g., Moringa oleifera, Cordia africana) used in traditional medicine; Supports food and nutritional security
- Involves indigenous knowledge and community stewardship of land
- Local tree preferences shaped by cultural values and utility Provides firewood, fruits, medicine, fodder, timber, and cash crops
- Increases household income
- Reduces reliance on external inputs
- Some systems (e.g., boundary planting) used for economic demarcation" },
  ],
};