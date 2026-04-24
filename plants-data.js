const plants = [
{
name:"Tomato",
scientific:"Solanum lycopersicum",
type:"Outdoor",
area:"Pot or Ground",
season:"Rabi / Winter / Spring",
sun:"6-8 hours",
water:"Daily",
grow:"60 days",
maturity:"75 days",
organic:"Compost",
inorganic:"NPK",
problems:"Aphids, leaf curl",
steps:[
"Prepare well drained soil",
"Sow seeds 1cm deep",
"Water lightly daily",
"Provide full sunlight",
"Support with stake"
]
},

{
name:"Potato",
scientific:"Solanum tuberosum",
type:"Outdoor",
area:"Pot or Ground",
season:"Rabi / Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"70 days",
maturity:"90 days",
organic:"Farmyard manure",
inorganic:"NPK",
problems:"Blight",
steps:[
"Use seed potatoes",
"Plant in loose soil",
"Water moderately",
"Hill soil around plant",
"Harvest when leaves dry"
]
},

{
name:"Onion",
scientific:"Allium cepa",
type:"Outdoor",
area:"Pot or Ground",
season:"Rabi",
sun:"Full sunlight",
water:"Moderate",
grow:"80 days",
maturity:"100 days",
organic:"Compost",
inorganic:"DAP",
problems:"Thrips",
steps:[
"Sow seeds shallow",
"Thin seedlings",
"Water lightly",
"Provide sunlight",
"Harvest when tops fall"
]
},

{
name:"Garlic",
scientific:"Allium sativum",
type:"Outdoor",
area:"Pot or Ground",
season:"Rabi",
sun:"Full sunlight",
water:"Low",
grow:"90 days",
maturity:"120 days",
organic:"Cow dung",
inorganic:"NPK",
problems:"Rot",
steps:[
"Plant cloves",
"Use loose soil",
"Water lightly",
"Keep sunny location",
"Harvest when leaves dry"
]
},

{
name:"Carrot",
scientific:"Daucus carota",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"70 days",
maturity:"90 days",
organic:"Compost",
inorganic:"DAP",
problems:"Forking",
steps:[
"Sow seeds directly",
"Thin seedlings",
"Water regularly",
"Loose soil required",
"Harvest when mature"
]
},{
name:"Spinach",
scientific:"Spinacia oleracea",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter / Spring",
sun:"Partial sunlight",
water:"Regular",
grow:"30 days",
maturity:"40 days",
organic:"Vermicompost",
inorganic:"Urea",
problems:"Leaf miner",
steps:[
"Sow seeds shallow",
"Water lightly",
"Provide partial sun",
"Harvest leaves early",
"Cut and regrow"
]
},

{
name:"Cabbage",
scientific:"Brassica oleracea",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Regular",
grow:"80 days",
maturity:"100 days",
organic:"Compost",
inorganic:"NPK",
problems:"Caterpillars",
steps:[
"Start in nursery",
"Transplant seedlings",
"Water regularly",
"Provide sunlight",
"Harvest firm heads"
]
},

{
name:"Cauliflower",
scientific:"Brassica oleracea var botrytis",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Regular",
grow:"85 days",
maturity:"110 days",
organic:"Farm manure",
inorganic:"DAP",
problems:"Curd rot",
steps:[
"Start nursery",
"Transplant after 20 days",
"Water regularly",
"Provide sunlight",
"Harvest white heads"
]
},

{
name:"Peas",
scientific:"Pisum sativum",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"50 days",
maturity:"70 days",
organic:"Compost",
inorganic:"NPK",
problems:"Powdery mildew",
steps:[
"Sow seeds directly",
"Provide support",
"Water moderately",
"Full sunlight needed",
"Harvest pods"
]
},

{
name:"Chili",
scientific:"Capsicum annuum",
type:"Outdoor",
area:"Pot or Ground",
season:"Summer / Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"60 days",
maturity:"90 days",
organic:"Vermicompost",
inorganic:"NPK",
problems:"Aphids",
steps:[
"Start nursery",
"Transplant seedlings",
"Water regularly",
"Provide sunlight",
"Harvest chillies"
]
},{
name:"Brinjal",
scientific:"Solanum melongena",
type:"Outdoor",
area:"Pot or Ground",
season:"Spring / Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"65 days",
maturity:"95 days",
organic:"Compost",
inorganic:"NPK",
problems:"Fruit borer",
steps:[
"Start seeds in tray",
"Transplant seedlings",
"Water regularly",
"Provide sunlight",
"Harvest tender fruits"
]
},

{
name:"Cucumber",
scientific:"Cucumis sativus",
type:"Outdoor",
area:"Ground",
season:"Summer / Zaid",
sun:"Full sunlight",
water:"High",
grow:"45 days",
maturity:"60 days",
organic:"Cow dung",
inorganic:"DAP",
problems:"Powdery mildew",
steps:[
"Sow seeds directly",
"Provide trellis",
"Water regularly",
"Full sunlight needed",
"Harvest green fruits"
]
},

{
name:"Bottle Gourd",
scientific:"Lagenaria siceraria",
type:"Outdoor",
area:"Ground",
season:"Summer / Zaid",
sun:"Full sunlight",
water:"High",
grow:"50 days",
maturity:"70 days",
organic:"Farm manure",
inorganic:"NPK",
problems:"Fruit rot",
steps:[
"Sow seeds",
"Provide support",
"Water regularly",
"Add compost",
"Harvest tender gourds"
]
},

{
name:"Bitter Gourd",
scientific:"Momordica charantia",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"55 days",
maturity:"75 days",
organic:"Compost",
inorganic:"DAP",
problems:"Fruit fly",
steps:[
"Sow seeds",
"Provide trellis",
"Water regularly",
"Full sunlight",
"Harvest green fruits"
]
},

{
name:"Pumpkin",
scientific:"Cucurbita maxima",
type:"Outdoor",
area:"Ground",
season:"Summer / Monsoon",
sun:"Full sunlight",
water:"Moderate",
grow:"80 days",
maturity:"110 days",
organic:"Cow dung",
inorganic:"NPK",
problems:"Powdery mildew",
steps:[
"Sow seeds in ground",
"Provide space",
"Water regularly",
"Add compost",
"Harvest mature pumpkins"
]
},
{
name:"Radish",
scientific:"Raphanus sativus",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"30 days",
maturity:"45 days",
organic:"Vermicompost",
inorganic:"Urea",
problems:"Root cracking",
steps:[
"Sow seeds directly",
"Water lightly",
"Loose soil needed",
"Provide sunlight",
"Harvest early"
]
},

{
name:"Beetroot",
scientific:"Beta vulgaris",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"55 days",
maturity:"70 days",
organic:"Compost",
inorganic:"NPK",
problems:"Leaf spot",
steps:[
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Thin seedlings",
"Harvest roots"
]
},

{
name:"Lettuce",
scientific:"Lactuca sativa",
type:"Indoor/Outdoor",
area:"Pot",
season:"Winter / Spring",
sun:"Partial sunlight",
water:"Regular",
grow:"35 days",
maturity:"50 days",
organic:"Compost",
inorganic:"Urea",
problems:"Aphids",
steps:[
"Sow seeds shallow",
"Water lightly",
"Partial sunlight",
"Thin plants",
"Harvest leaves"
]
},

{
name:"Mint",
scientific:"Mentha",
type:"Indoor/Outdoor",
area:"Pot",
season:"All seasons",
sun:"Partial sunlight",
water:"Regular",
grow:"25 days",
maturity:"40 days",
organic:"Compost",
inorganic:"Urea",
problems:"Leaf rust",
steps:[
"Use cuttings",
"Plant in pot",
"Water regularly",
"Partial sunlight",
"Harvest leaves"
]
},

{
name:"Coriander",
scientific:"Coriandrum sativum",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Regular",
grow:"30 days",
maturity:"45 days",
organic:"Vermicompost",
inorganic:"Urea",
problems:"Bolting",
steps:[
"Sow crushed seeds",
"Water regularly",
"Provide sunlight",
"Thin plants",
"Harvest leaves"
]
},{
name:"Radish",
scientific:"Raphanus sativus",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"30 days",
maturity:"45 days",
organic:"Vermicompost",
inorganic:"Urea",
problems:"Root cracking",
steps:[
"Sow seeds directly",
"Water lightly",
"Loose soil needed",
"Provide sunlight",
"Harvest early"
]
},

{
name:"Beetroot",
scientific:"Beta vulgaris",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"55 days",
maturity:"70 days",
organic:"Compost",
inorganic:"NPK",
problems:"Leaf spot",
steps:[
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Thin seedlings",
"Harvest roots"
]
},

{
name:"Lettuce",
scientific:"Lactuca sativa",
type:"Indoor/Outdoor",
area:"Pot",
season:"Winter / Spring",
sun:"Partial sunlight",
water:"Regular",
grow:"35 days",
maturity:"50 days",
organic:"Compost",
inorganic:"Urea",
problems:"Aphids",
steps:[
"Sow seeds shallow",
"Water lightly",
"Partial sunlight",
"Thin plants",
"Harvest leaves"
]
},

{
name:"Mint",
scientific:"Mentha",
type:"Indoor/Outdoor",
area:"Pot",
season:"All seasons",
sun:"Partial sunlight",
water:"Regular",
grow:"25 days",
maturity:"40 days",
organic:"Compost",
inorganic:"Urea",
problems:"Leaf rust",
steps:[
"Use cuttings",
"Plant in pot",
"Water regularly",
"Partial sunlight",
"Harvest leaves"
]
},

{
name:"Coriander",
scientific:"Coriandrum sativum",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Regular",
grow:"30 days",
maturity:"45 days",
organic:"Vermicompost",
inorganic:"Urea",
problems:"Bolting",
steps:[
"Sow crushed seeds",
"Water regularly",
"Provide sunlight",
"Thin plants",
"Harvest leaves"
]
},
{
name:"Money Plant",
scientific:"Epipremnum aureum",
type:"Indoor",
area:"Pot",
season:"All seasons",
sun:"Indirect sunlight",
water:"Moderate",
grow:"30 days",
maturity:"60 days",
organic:"Liquid compost",
inorganic:"NPK",
problems:"Yellow leaves",
steps:[
"Use cutting",
"Place in water/soil",
"Indirect sunlight",
"Water weekly",
"Trim regularly"
]
},

{
name:"Snake Plant",
scientific:"Sansevieria trifasciata",
type:"Indoor",
area:"Pot",
season:"All seasons",
sun:"Low to bright light",
water:"Low",
grow:"40 days",
maturity:"70 days",
organic:"Compost",
inorganic:"NPK",
problems:"Root rot",
steps:[
"Plant division",
"Use well drained soil",
"Water rarely",
"Indirect sunlight",
"Clean leaves"
]
},

{
name:"Peace Lily",
scientific:"Spathiphyllum",
type:"Indoor",
area:"Pot",
season:"All seasons",
sun:"Low light",
water:"Moderate",
grow:"50 days",
maturity:"80 days",
organic:"Compost",
inorganic:"Liquid feed",
problems:"Brown tips",
steps:[
"Plant in pot",
"Keep indoor shade",
"Water weekly",
"Clean leaves",
"Add compost"
]
},

{
name:"Areca Palm",
scientific:"Dypsis lutescens",
type:"Indoor",
area:"Pot",
season:"All seasons",
sun:"Indirect sunlight",
water:"Moderate",
grow:"90 days",
maturity:"120 days",
organic:"Compost",
inorganic:"NPK",
problems:"Yellowing",
steps:[
"Plant in pot",
"Indirect sunlight",
"Water weekly",
"Clean leaves",
"Trim dry leaves"
]
},

{
name:"Neem",
scientific:"Azadirachta indica",
type:"Outdoor",
area:"Ground",
season:"Monsoon / Kharif",
sun:"Full sunlight",
water:"Low",
grow:"1 year",
maturity:"3 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Leaf spot",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Add compost yearly",
"Minimal care needed"
]
},
{
name:"Tulip",
scientific:"Tulipa",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"60 days",
maturity:"90 days",
organic:"Compost",
inorganic:"DAP",
problems:"Bulb rot",
steps:[
"Plant bulbs",
"Water lightly",
"Provide sunlight",
"Keep soil loose",
"Allow flowering"
]
},

{
name:"Marigold",
scientific:"Tagetes",
type:"Outdoor",
area:"Pot or Ground",
season:"All seasons",
sun:"Full sunlight",
water:"Moderate",
grow:"40 days",
maturity:"60 days",
organic:"Vermicompost",
inorganic:"NPK",
problems:"Aphids",
steps:[
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Pinch tops",
"Harvest flowers"
]
},

{
name:"Hibiscus",
scientific:"Hibiscus rosa-sinensis",
type:"Outdoor",
area:"Pot or Ground",
season:"All seasons",
sun:"Full sunlight",
water:"Regular",
grow:"90 days",
maturity:"120 days",
organic:"Compost",
inorganic:"NPK",
problems:"White flies",
steps:[
"Plant cutting",
"Water regularly",
"Full sunlight",
"Prune regularly",
"Add compost monthly"
]
},

{
name:"Lavender",
scientific:"Lavandula",
type:"Outdoor",
area:"Pot",
season:"Spring",
sun:"Full sunlight",
water:"Low",
grow:"70 days",
maturity:"120 days",
organic:"Compost",
inorganic:"NPK",
problems:"Root rot",
steps:[
"Sow seeds",
"Use sandy soil",
"Water lightly",
"Provide sunlight",
"Harvest flowers"
]
},

{
name:"Daisy",
scientific:"Bellis perennis",
type:"Outdoor",
area:"Pot or Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"50 days",
maturity:"70 days",
organic:"Compost",
inorganic:"DAP",
problems:"Powdery mildew",
steps:[
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Thin plants",
"Allow flowering"
]
},{
name:"Mango",
scientific:"Mangifera indica",
type:"Outdoor",
area:"Ground",
season:"Spring / Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3-5 years",
organic:"Cow dung manure",
inorganic:"NPK",
problems:"Fruit fly",
steps:[
"Plant grafted sapling",
"Full sunlight needed",
"Water weekly",
"Add manure yearly",
"Prune lightly"
]
},

{
name:"Guava",
scientific:"Psidium guajava",
type:"Outdoor",
area:"Ground or Large Pot",
season:"Spring / Monsoon",
sun:"Full sunlight",
water:"Moderate",
grow:"8 months",
maturity:"2 years",
organic:"Compost",
inorganic:"DAP",
problems:"Fruit fly",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Add compost",
"Prune yearly"
]
},

{
name:"Papaya",
scientific:"Carica papaya",
type:"Outdoor",
area:"Ground",
season:"Spring / Summer",
sun:"Full sunlight",
water:"Regular",
grow:"6 months",
maturity:"9 months",
organic:"Cow dung",
inorganic:"NPK",
problems:"Root rot",
steps:[
"Sow seeds",
"Thin seedlings",
"Water regularly",
"Full sunlight",
"Harvest fruits"
]
},

{
name:"Banana",
scientific:"Musa",
type:"Outdoor",
area:"Ground",
season:"All seasons",
sun:"Full sunlight",
water:"High",
grow:"8 months",
maturity:"12 months",
organic:"Farm manure",
inorganic:"NPK",
problems:"Leaf spot",
steps:[
"Plant sucker",
"Water heavily",
"Add manure",
"Full sunlight",
"Harvest bunch"
]
},

{
name:"Pomegranate",
scientific:"Punica granatum",
type:"Outdoor",
area:"Ground or Pot",
season:"Spring",
sun:"Full sunlight",
water:"Low to moderate",
grow:"8 months",
maturity:"2 years",
organic:"Compost",
inorganic:"DAP",
problems:"Fruit cracking",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Prune branches",
"Harvest fruits"
]
},
{
name:"Tulip",
scientific:"Tulipa",
type:"Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"60 days",
maturity:"90 days",
organic:"Compost",
inorganic:"DAP",
problems:"Bulb rot",
steps:[
"Plant bulbs",
"Water lightly",
"Provide sunlight",
"Keep soil loose",
"Allow flowering"
]
},

{
name:"Marigold",
scientific:"Tagetes",
type:"Outdoor",
area:"Pot or Ground",
season:"All seasons",
sun:"Full sunlight",
water:"Moderate",
grow:"40 days",
maturity:"60 days",
organic:"Vermicompost",
inorganic:"NPK",
problems:"Aphids",
steps:[
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Pinch tops",
"Harvest flowers"
]
},

{
name:"Hibiscus",
scientific:"Hibiscus rosa-sinensis",
type:"Outdoor",
area:"Pot or Ground",
season:"All seasons",
sun:"Full sunlight",
water:"Regular",
grow:"90 days",
maturity:"120 days",
organic:"Compost",
inorganic:"NPK",
problems:"White flies",
steps:[
"Plant cutting",
"Water regularly",
"Full sunlight",
"Prune regularly",
"Add compost monthly"
]
},

{
name:"Lavender",
scientific:"Lavandula",
type:"Outdoor",
area:"Pot",
season:"Spring",
sun:"Full sunlight",
water:"Low",
grow:"70 days",
maturity:"120 days",
organic:"Compost",
inorganic:"NPK",
problems:"Root rot",
steps:[
"Sow seeds",
"Use sandy soil",
"Water lightly",
"Provide sunlight",
"Harvest flowers"
]
},

{
name:"Daisy",
scientific:"Bellis perennis",
type:"Outdoor",
area:"Pot or Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"50 days",
maturity:"70 days",
organic:"Compost",
inorganic:"DAP",
problems:"Powdery mildew",
steps:[
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Thin plants",
"Allow flowering"
]
},{
name:"Apple",
scientific:"Malus domestica",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"4 years",
organic:"Compost",
inorganic:"NPK",
problems:"Scab disease",
steps:[
"Plant grafted plant",
"Provide sunlight",
"Water weekly",
"Prune annually",
"Harvest fruits"
]
},

{
name:"Orange",
scientific:"Citrus sinensis",
type:"Outdoor",
area:"Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Cow dung",
inorganic:"DAP",
problems:"Leaf curl",
steps:[
"Plant sapling",
"Water regularly",
"Provide sunlight",
"Add manure",
"Harvest fruits"
]
},

{
name:"Lemon",
scientific:"Citrus limon",
type:"Outdoor",
area:"Ground or Pot",
season:"All seasons",
sun:"Full sunlight",
water:"Moderate",
grow:"8 months",
maturity:"2 years",
organic:"Compost",
inorganic:"NPK",
problems:"Leaf miner",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Prune lightly",
"Harvest lemons"
]
},

{
name:"Chikoo",
scientific:"Manilkara zapota",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Fruit drop",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Add manure",
"Harvest fruits"
]
},

{
name:"Jamun",
scientific:"Syzygium cumini",
type:"Outdoor",
area:"Ground",
season:"Monsoon",
sun:"Full sunlight",
water:"Low",
grow:"1 year",
maturity:"4 years",
organic:"Compost",
inorganic:"DAP",
problems:"Fruit fly",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Minimal care",
"Harvest fruits"
]
},{
name:"Strawberry",
scientific:"Fragaria × ananassa",
type:"Indoor/Outdoor",
area:"Pot or Ground",
season:"Winter",
sun:"Full sunlight",
water:"Regular",
grow:"45 days",
maturity:"70 days",
organic:"Compost",
inorganic:"NPK",
problems:"Fruit rot",
steps:[
"Plant runners",
"Water regularly",
"Provide sunlight",
"Use mulch",
"Harvest berries"
]
},

{
name:"Blueberry",
scientific:"Vaccinium",
type:"Outdoor",
area:"Pot",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"6 months",
maturity:"2 years",
organic:"Acidic compost",
inorganic:"NPK",
problems:"Bird damage",
steps:[
"Plant sapling",
"Use acidic soil",
"Water regularly",
"Full sunlight",
"Harvest berries"
]
},

{
name:"Blackberry",
scientific:"Rubus",
type:"Outdoor",
area:"Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"6 months",
maturity:"2 years",
organic:"Compost",
inorganic:"DAP",
problems:"Cane blight",
steps:[
"Plant cutting",
"Provide support",
"Water weekly",
"Prune yearly",
"Harvest berries"
]
},

{
name:"Grapes",
scientific:"Vitis vinifera",
type:"Outdoor",
area:"Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"2 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Powdery mildew",
steps:[
"Plant vine",
"Provide trellis",
"Water weekly",
"Prune yearly",
"Harvest grapes"
]
},

{
name:"Watermelon",
scientific:"Citrullus lanatus",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"High",
grow:"70 days",
maturity:"90 days",
organic:"Cow dung",
inorganic:"NPK",
problems:"Fruit rot",
steps:[
"Sow seeds",
"Provide space",
"Water heavily",
"Full sunlight",
"Harvest fruits"
]
},
{
name:"Muskmelon",
scientific:"Cucumis melo",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"High",
grow:"65 days",
maturity:"85 days",
organic:"Farm manure",
inorganic:"NPK",
problems:"Fruit cracking",
steps:[
"Sow seeds",
"Provide space",
"Water regularly",
"Full sunlight",
"Harvest fruits"
]
},

{
name:"Pineapple",
scientific:"Ananas comosus",
type:"Outdoor",
area:"Ground or Pot",
season:"Summer",
sun:"Full sunlight",
water:"Low",
grow:"8 months",
maturity:"18 months",
organic:"Compost",
inorganic:"NPK",
problems:"Root rot",
steps:[
"Plant crown",
"Water lightly",
"Full sunlight",
"Add compost",
"Harvest fruit"
]
},

{
name:"Dragon Fruit",
scientific:"Hylocereus",
type:"Outdoor",
area:"Ground or Pot",
season:"Summer",
sun:"Full sunlight",
water:"Low",
grow:"6 months",
maturity:"1 year",
organic:"Compost",
inorganic:"NPK",
problems:"Stem rot",
steps:[
"Plant cutting",
"Provide support",
"Water lightly",
"Full sunlight",
"Harvest fruits"
]
},

{
name:"Kiwi",
scientific:"Actinidia deliciosa",
type:"Outdoor",
area:"Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Compost",
inorganic:"DAP",
problems:"Leaf spot",
steps:[
"Plant vine",
"Provide support",
"Water weekly",
"Prune yearly",
"Harvest fruits"
]
},

{
name:"Peach",
scientific:"Prunus persica",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Leaf curl",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Prune yearly",
"Harvest fruits"
]
},{
name:"Pear",
scientific:"Pyrus communis",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Compost",
inorganic:"NPK",
problems:"Fire blight",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Prune yearly",
"Harvest fruits"
]
},

{
name:"Plum",
scientific:"Prunus domestica",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Farm manure",
inorganic:"DAP",
problems:"Brown rot",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Prune yearly",
"Harvest fruits"
]
},

{
name:"Apricot",
scientific:"Prunus armeniaca",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Compost",
inorganic:"NPK",
problems:"Leaf curl",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Prune yearly",
"Harvest fruits"
]
},

{
name:"Cherry",
scientific:"Prunus avium",
type:"Outdoor",
area:"Ground",
season:"Winter",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"4 years",
organic:"Farm manure",
inorganic:"DAP",
problems:"Bird damage",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Prune yearly",
"Harvest fruits"
]
},

{
name:"Fig",
scientific:"Ficus carica",
type:"Outdoor",
area:"Ground or Pot",
season:"Summer",
sun:"Full sunlight",
water:"Low",
grow:"8 months",
maturity:"2 years",
organic:"Compost",
inorganic:"NPK",
problems:"Fruit drop",
steps:[
"Plant cutting",
"Water weekly",
"Full sunlight",
"Prune lightly",
"Harvest fruits"
]
},{
name:"Guava Pink",
scientific:"Psidium guajava",
type:"Outdoor",
area:"Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"8 months",
maturity:"2 years",
organic:"Compost",
inorganic:"NPK",
problems:"Fruit fly",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Add compost",
"Harvest fruits"
]
},

{
name:"Custard Apple",
scientific:"Annona squamosa",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Low",
grow:"1 year",
maturity:"3 years",
organic:"Farm manure",
inorganic:"DAP",
problems:"Fruit drop",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Minimal pruning",
"Harvest fruits"
]
},

{
name:"Mulberry",
scientific:"Morus alba",
type:"Outdoor",
area:"Ground",
season:"Spring",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"2 years",
organic:"Compost",
inorganic:"NPK",
problems:"Leaf spot",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Prune yearly",
"Harvest berries"
]
},

{
name:"Lychee",
scientific:"Litchi chinensis",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"4 years",
organic:"Cow dung",
inorganic:"NPK",
problems:"Fruit cracking",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Add manure",
"Harvest fruits"
]
},

{
name:"Sapota",
scientific:"Manilkara zapota",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"3 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Fruit drop",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Add compost",
"Harvest fruits"
]
},

{
name:"Coconut",
scientific:"Cocos nucifera",
type:"Outdoor",
area:"Ground",
season:"All seasons",
sun:"Full sunlight",
water:"High",
grow:"1 year",
maturity:"5 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Leaf yellowing",
steps:[
"Plant seed nut",
"Water regularly",
"Full sunlight",
"Add manure yearly",
"Harvest coconuts"
]
},

{
name:"Date Palm",
scientific:"Phoenix dactylifera",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Low",
grow:"1 year",
maturity:"4 years",
organic:"Compost",
inorganic:"NPK",
problems:"Scale insects",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Minimal pruning",
"Harvest dates"
]
},

{
name:"Jackfruit",
scientific:"Artocarpus heterophyllus",
type:"Outdoor",
area:"Ground",
season:"Monsoon",
sun:"Full sunlight",
water:"Moderate",
grow:"1 year",
maturity:"4 years",
organic:"Farm manure",
inorganic:"DAP",
problems:"Fruit rot",
steps:[
"Plant sapling",
"Water weekly",
"Full sunlight",
"Add compost",
"Harvest fruits"
]
},

{
name:"Star Fruit",
scientific:"Averrhoa carambola",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Moderate",
grow:"8 months",
maturity:"2 years",
organic:"Compost",
inorganic:"NPK",
problems:"Leaf spot",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Prune lightly",
"Harvest fruits"
]
},

{
name:"Wood Apple",
scientific:"Limonia acidissima",
type:"Outdoor",
area:"Ground",
season:"Summer",
sun:"Full sunlight",
water:"Low",
grow:"1 year",
maturity:"5 years",
organic:"Farm manure",
inorganic:"NPK",
problems:"Fruit cracking",
steps:[
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Minimal care",
"Harvest fruits"
]
},
{
name: "Neem Bonsai",
scientific: "Azadirachta indica (miniature)",
type: "Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "90 days",
maturity: "1 year",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf drop",
steps: [
"Plant sapling in small pot",
"Prune regularly for shape",
"Water sparingly",
"Provide full sunlight",
"Trim roots occasionally"
]
},

{
name: "Spider Plant",
scientific: "Chlorophytum comosum",
type: "Indoor",
area: "Pot",
season: "All seasons",
sun: "Indirect sunlight",
water: "Moderate",
grow: "30 days",
maturity: "60 days",
organic: "Compost",
inorganic: "Liquid fertilizer",
problems: "Brown tips",
steps: [
"Plant in pot",
"Keep in indirect light",
"Water weekly",
"Remove dead leaves",
"Allow baby plants to grow"
]
},

{
name: "Rubber Plant",
scientific: "Ficus elastica",
type: "Indoor",
area: "Pot",
season: "All seasons",
sun: "Indirect sunlight",
water: "Moderate",
grow: "60 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf drop",
steps: [
"Plant in pot",
"Keep in bright indirect light",
"Water when soil is dry",
"Wipe leaves regularly",
"Do not overwater"
]
},

{
name: "Dracaena",
scientific: "Dracaena marginata",
type: "Indoor",
area: "Pot",
season: "All seasons",
sun: "Low to medium light",
water: "Low",
grow: "50 days",
maturity: "100 days",
organic: "Compost",
inorganic: "Liquid feed",
problems: "Yellow leaves",
steps: [
"Plant in pot",
"Keep in shade",
"Water lightly",
"Trim dry leaves",
"Rotate pot occasionally"
]
},

{
name: "Cactus Barrel",
scientific: "Ferocactus",
type: "Indoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Very low",
grow: "90 days",
maturity: "2 years",
organic: "Sandy compost",
inorganic: "Low NPK",
problems: "Root rot",
steps: [
"Use sandy soil",
"Water rarely",
"Keep in sunlight",
"Avoid overwatering",
"Minimal care needed"
]
},

{
name: "Aloe Aristata",
scientific: "Aloe aristata",
type: "Indoor",
area: "Pot",
season: "All seasons",
sun: "Indirect sunlight",
water: "Low",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: [
"Plant in pot",
"Use well-drained soil",
"Water lightly",
"Keep in shade",
"Avoid excess water"
]
},

{
name: "Lavender English",
scientific: "Lavandula angustifolia",
type: "Outdoor",
area: "Pot or Ground",
season: "Spring",
sun: "Full sunlight",
water: "Low",
grow: "70 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: [
"Plant seeds",
"Use sandy soil",
"Water lightly",
"Provide sunlight",
"Harvest flowers"
]
},

{
name: "Sunflower Giant",
scientific: "Helianthus annuus",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "50 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Bird damage",
steps: [
"Sow seeds directly",
"Water regularly",
"Provide support",
"Ensure sunlight",
"Harvest seeds"
]
},

{
name: "Lotus",
scientific: "Nelumbo nucifera",
type: "Outdoor",
area: "Water pot",
season: "Summer",
sun: "Full sunlight",
water: "High",
grow: "60 days",
maturity: "120 days",
organic: "Aquatic compost",
inorganic: "NPK tablets",
problems: "Algae growth",
steps: [
"Plant in water container",
"Provide sunlight",
"Change water regularly",
"Add nutrients",
"Allow flowering"
]
},

{
name: "Water Lily",
scientific: "Nymphaea",
type: "Outdoor",
area: "Water",
season: "Summer",
sun: "Full sunlight",
water: "High",
grow: "50 days",
maturity: "100 days",
organic: "Aquatic compost",
inorganic: "NPK tablets",
problems: "Algae",
steps: [
"Plant in pond",
"Ensure sunlight",
"Maintain clean water",
"Add nutrients",
"Allow bloom"
]
},

{
name: "Mint Chocolate",
scientific: "Mentha × piperita",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Partial sunlight",
water: "Moderate",
grow: "25 days",
maturity: "40 days",
organic: "Compost",
inorganic: "Urea",
problems: "Aphids",
steps: [
"Plant cutting",
"Water regularly",
"Partial sunlight",
"Harvest leaves",
"Prune often"
]
},

{
name: "Stevia",
scientific: "Stevia rebaudiana",
type: "Outdoor",
area: "Pot or Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: [
"Plant seedlings",
"Water regularly",
"Provide sunlight",
"Harvest leaves",
"Dry leaves for use"
]
},

{
name: "Ashwagandha",
scientific: "Withania somnifera",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Low",
grow: "90 days",
maturity: "120 days",
organic: "Farm manure",
inorganic: "NPK",
problems: "Root rot",
steps: [
"Sow seeds",
"Water lightly",
"Provide sunlight",
"Harvest roots",
"Dry for use"
]
},

{
name: "Moringa",
scientific: "Moringa oleifera",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Low",
grow: "60 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Pests",
steps: [
"Plant seeds",
"Water weekly",
"Provide sunlight",
"Harvest leaves",
"Trim regularly"
]
},

{
name: "Okra Hybrid",
scientific: "Abelmoschus esculentus",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "45 days",
maturity: "70 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fruit borer",
steps: [
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Harvest pods",
"Remove pests"
]
},

{
name: "Sweet Potato",
scientific: "Ipomoea batatas",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: [
"Plant slips",
"Water regularly",
"Loosen soil",
"Provide sunlight",
"Harvest tubers"
]
},

{
name: "Mustard Green",
scientific: "Brassica juncea",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "30 days",
maturity: "50 days",
organic: "Compost",
inorganic: "Urea",
problems: "Aphids",
steps: [
"Sow seeds",
"Water regularly",
"Thin plants",
"Provide sunlight",
"Harvest leaves"
]
},

{
name: "Fenugreek",
scientific: "Trigonella foenum-graecum",
type: "Outdoor",
area: "Pot or Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "25 days",
maturity: "40 days",
organic: "Compost",
inorganic: "Urea",
problems: "Leaf spot",
steps: [
"Sow seeds",
"Water lightly",
"Provide sunlight",
"Harvest leaves",
"Regrow again"
]
},

{
name: "Curry Leaf Plant",
scientific: "Murraya koenigii",
type: "Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: [
"Plant sapling",
"Water weekly",
"Provide sunlight",
"Prune regularly",
"Harvest leaves"
]
},

{
name: "Betel Leaf",
scientific: "Piper betle",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Partial sunlight",
water: "Moderate",
grow: "60 days",
maturity: "100 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fungal infection",
steps: [
"Plant vine",
"Provide support",
"Water regularly",
"Keep in shade",
"Harvest leaves"
]
},

{
name: "Bamboo",
scientific: "Bambusoideae",
type: "Outdoor",
area: "Ground",
season: "All seasons",
sun: "Full sunlight",
water: "Moderate",
grow: "6 months",
maturity: "2 years",
organic: "Compost",
inorganic: "NPK",
problems: "Root spread",
steps: [
"Plant rhizome",
"Water regularly",
"Provide sunlight",
"Control spreading",
"Prune yearly"
]
},

{
name: "Bougainvillea",
scientific: "Bougainvillea spectabilis",
type: "Outdoor",
area: "Ground or Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "60 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf drop",
steps: [
"Plant cutting",
"Provide sunlight",
"Water sparingly",
"Prune regularly",
"Support climbing"
]
},

{
name: "Hollyhock",
scientific: "Alcea rosea",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "70 days",
maturity: "120 days",
organic: "Compost",
inorganic: "DAP",
problems: "Rust disease",
steps: [
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Support stems",
"Harvest flowers"
]
},

{
name: "Zinnia",
scientific: "Zinnia elegans",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "40 days",
maturity: "70 days",
organic: "Compost",
inorganic: "NPK",
problems: "Powdery mildew",
steps: [
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Deadhead flowers",
"Allow blooming"
]
},

{
name: "Petunia",
scientific: "Petunia hybrida",
type: "Outdoor",
area: "Pot",
season: "Winter / Spring",
sun: "Full sunlight",
water: "Moderate",
grow: "50 days",
maturity: "80 days",
organic: "Compost",
inorganic: "Liquid fertilizer",
problems: "Aphids",
steps: [
"Plant seedlings",
"Water regularly",
"Provide sunlight",
"Remove dead flowers",
"Feed monthly"
]
},

{
name: "Geranium",
scientific: "Pelargonium",
type: "Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Moderate",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: [
"Plant cutting",
"Water moderately",
"Provide sunlight",
"Prune regularly",
"Remove dry leaves"
]
},

{
name: "Coriander Thai",
scientific: "Eryngium foetidum",
type: "Outdoor",
area: "Pot or Ground",
season: "All seasons",
sun: "Partial sunlight",
water: "Moderate",
grow: "30 days",
maturity: "50 days",
organic: "Compost",
inorganic: "Urea",
problems: "Leaf yellowing",
steps: [
"Sow seeds",
"Water regularly",
"Partial shade",
"Harvest leaves",
"Regrow again"
]
},

{
name: "Celery",
scientific: "Apium graveolens",
type: "Outdoor",
area: "Pot or Ground",
season: "Winter",
sun: "Full sunlight",
water: "High",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Blight",
steps: [
"Start seedlings",
"Transplant after 4 weeks",
"Water regularly",
"Provide sunlight",
"Harvest stems"
]
},

{
name: "Broccoli",
scientific: "Brassica oleracea italica",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "70 days",
maturity: "100 days",
organic: "Compost",
inorganic: "DAP",
problems: "Caterpillars",
steps: [
"Start nursery",
"Transplant seedlings",
"Water regularly",
"Provide sunlight",
"Harvest heads"
]
},

{
name: "Kale",
scientific: "Brassica oleracea acephala",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "50 days",
maturity: "80 days",
organic: "Compost",
inorganic: "Urea",
problems: "Aphids",
steps: [
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Harvest leaves",
"Regrow leaves"
]
},

{
name: "Swiss Chard",
scientific: "Beta vulgaris subsp. vulgaris",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "40 days",
maturity: "70 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: [
"Sow seeds",
"Water regularly",
"Thin seedlings",
"Provide sunlight",
"Harvest leaves"
]
},

{
name: "Ridge Gourd",
scientific: "Luffa acutangula",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "50 days",
maturity: "70 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fruit rot",
steps: [
"Sow seeds",
"Provide trellis",
"Water regularly",
"Full sunlight",
"Harvest young fruits"
]
},

{
name: "Snake Gourd",
scientific: "Trichosanthes cucumerina",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "55 days",
maturity: "80 days",
organic: "Compost",
inorganic: "DAP",
problems: "Fruit fly",
steps: [
"Sow seeds",
"Provide support",
"Water regularly",
"Sunlight needed",
"Harvest tender fruits"
]
},

{
name: "Ash Gourd",
scientific: "Benincasa hispida",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "70 days",
maturity: "100 days",
organic: "Compost",
inorganic: "NPK",
problems: "Powdery mildew",
steps: [
"Sow seeds",
"Provide space",
"Water regularly",
"Full sunlight",
"Harvest mature fruits"
]
},

{
name: "Corn Sweet",
scientific: "Zea mays",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Stem borer",
steps: [
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Support growth",
"Harvest cobs"
]
},

{
name: "Barley",
scientific: "Hordeum vulgare",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Low",
grow: "60 days",
maturity: "90 days",
organic: "Farm manure",
inorganic: "NPK",
problems: "Rust",
steps: [
"Sow seeds",
"Water lightly",
"Provide sunlight",
"Harvest grains",
"Dry properly"
]
},

{
name: "Wheat",
scientific: "Triticum aestivum",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Farm manure",
inorganic: "NPK",
problems: "Rust disease",
steps: [
"Sow seeds",
"Water regularly",
"Provide sunlight",
"Harvest grains",
"Dry crop"
]
},

{
name: "Rice",
scientific: "Oryza sativa",
type: "Outdoor",
area: "Flooded field",
season: "Monsoon",
sun: "Full sunlight",
water: "High",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "Urea",
problems: "Blast disease",
steps: [
"Transplant seedlings",
"Maintain water level",
"Provide sunlight",
"Control weeds",
"Harvest grains"
]
},

{
name: "Sugarcane",
scientific: "Saccharum officinarum",
type: "Outdoor",
area: "Ground",
season: "All seasons",
sun: "Full sunlight",
water: "High",
grow: "8 months",
maturity: "12 months",
organic: "Farm manure",
inorganic: "NPK",
problems: "Stem borer",
steps: [
"Plant cane setts",
"Water regularly",
"Provide sunlight",
"Add manure",
"Harvest stalks"
]
},

{
name: "Peanut",
scientific: "Arachis hypogaea",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: [
"Sow seeds",
"Water moderately",
"Provide sunlight",
"Hill soil",
"Harvest pods"
]
},

{
name: "Cabbage Red",
scientific: "Brassica oleracea var. capitata f. rubra",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "70 days",
maturity: "100 days",
organic: "Compost",
inorganic: "NPK",
problems: "Caterpillars",
steps: ["Start nursery","Transplant","Water regularly","Sunlight","Harvest heads"]
},

{
name: "Cauliflower Purple",
scientific: "Brassica oleracea var. botrytis",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "80 days",
maturity: "110 days",
organic: "Compost",
inorganic: "DAP",
problems: "Curd rot",
steps: ["Nursery","Transplant","Water","Sunlight","Harvest"]
},

{
name: "Kohlrabi",
scientific: "Brassica oleracea gongylodes",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Cracking",
steps: ["Sow seeds","Water","Thin plants","Sunlight","Harvest bulbs"]
},

{
name: "Turnip",
scientific: "Brassica rapa",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "50 days",
maturity: "70 days",
organic: "Compost",
inorganic: "Urea",
problems: "Root cracking",
steps: ["Sow seeds","Water","Thin seedlings","Sunlight","Harvest roots"]
},

{
name: "Parsnip",
scientific: "Pastinaca sativa",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: ["Sow seeds","Water","Loosen soil","Sunlight","Harvest roots"]
},

{
name: "Artichoke",
scientific: "Cynara cardunculus",
type: "Outdoor",
area: "Ground",
season: "Spring",
sun: "Full sunlight",
water: "Moderate",
grow: "120 days",
maturity: "180 days",
organic: "Compost",
inorganic: "DAP",
problems: "Aphids",
steps: ["Plant crown","Water","Sunlight","Prune","Harvest buds"]
},

{
name: "Asparagus",
scientific: "Asparagus officinalis",
type: "Outdoor",
area: "Ground",
season: "Spring",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "2 years",
organic: "Compost",
inorganic: "NPK",
problems: "Rust",
steps: ["Plant crowns","Water","Sunlight","Mulch","Harvest shoots"]
},

{
name: "Leek",
scientific: "Allium ampeloprasum",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "80 days",
maturity: "120 days",
organic: "Compost",
inorganic: "Urea",
problems: "Thrips",
steps: ["Sow seeds","Transplant","Water","Sunlight","Harvest stalks"]
},

{
name: "Shallot",
scientific: "Allium cepa var. aggregatum",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "70 days",
maturity: "100 days",
organic: "Compost",
inorganic: "NPK",
problems: "Rot",
steps: ["Plant bulbs","Water","Sunlight","Weed control","Harvest bulbs"]
},

{
name: "Chives",
scientific: "Allium schoenoprasum",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Partial sunlight",
water: "Moderate",
grow: "30 days",
maturity: "60 days",
organic: "Compost",
inorganic: "Urea",
problems: "Leaf yellowing",
steps: ["Sow seeds","Water","Sunlight","Cut leaves","Regrow"]
},

{
name: "Oregano",
scientific: "Origanum vulgare",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "40 days",
maturity: "70 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: ["Plant cutting","Sunlight","Water lightly","Harvest leaves","Prune"]
},

{
name: "Thyme",
scientific: "Thymus vulgaris",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "50 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fungal infection",
steps: ["Plant cutting","Sunlight","Water lightly","Harvest","Prune"]
},

{
name: "Rosemary",
scientific: "Salvia rosmarinus",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "60 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: ["Plant cutting","Sunlight","Water lightly","Prune","Harvest"]
},

{
name: "Sage",
scientific: "Salvia officinalis",
type: "Indoor/Outdoor",
area: "Pot",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "60 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: ["Plant cutting","Sunlight","Water lightly","Harvest leaves","Prune"]
},

{
name: "Bay Leaf",
scientific: "Laurus nobilis",
type: "Outdoor",
area: "Pot or Ground",
season: "All seasons",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "2 years",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf curl",
steps: ["Plant sapling","Water","Sunlight","Prune","Harvest leaves"]
},

{
name: "Cardamom",
scientific: "Elettaria cardamomum",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Partial sunlight",
water: "High",
grow: "1 year",
maturity: "3 years",
organic: "Compost",
inorganic: "DAP",
problems: "Rhizome rot",
steps: ["Plant suckers","Shade","Water","Mulch","Harvest pods"]
},

{
name: "Clove",
scientific: "Syzygium aromaticum",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Partial sunlight",
water: "Moderate",
grow: "1 year",
maturity: "4 years",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: ["Plant sapling","Water","Shade","Prune","Harvest buds"]
},

{
name: "Black Pepper",
scientific: "Piper nigrum",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Partial sunlight",
water: "High",
grow: "1 year",
maturity: "3 years",
organic: "Compost",
inorganic: "NPK",
problems: "Wilt",
steps: ["Plant vine","Support tree","Water","Shade","Harvest berries"]
},

{
name: "Nutmeg",
scientific: "Myristica fragrans",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Partial sunlight",
water: "Moderate",
grow: "1 year",
maturity: "5 years",
organic: "Compost",
inorganic: "NPK",
problems: "Fruit rot",
steps: ["Plant sapling","Water","Shade","Prune","Harvest seeds"]
},

{
name: "Betel Nut Palm",
scientific: "Areca catechu",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Full sunlight",
water: "High",
grow: "1 year",
maturity: "4 years",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf blight",
steps: ["Plant sapling","Water","Sunlight","Mulch","Harvest nuts"]
},

{
name: "Taro",
scientific: "Colocasia esculenta",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Partial sunlight",
water: "High",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf blight",
steps: ["Plant corms","Keep soil wet","Partial shade","Weed control","Harvest tubers"]
},

{
name: "Yam",
scientific: "Dioscorea alata",
type: "Outdoor",
area: "Ground",
season: "Monsoon",
sun: "Full sunlight",
water: "Moderate",
grow: "120 days",
maturity: "180 days",
organic: "Farm manure",
inorganic: "NPK",
problems: "Rot",
steps: ["Plant tubers","Provide support","Water regularly","Mulch","Harvest yams"]
},

{
name: "Fenugreek",
scientific: "Trigonella foenum-graecum",
type: "Outdoor",
area: "Pot or Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "25 days",
maturity: "40 days",
organic: "Compost",
inorganic: "Urea",
problems: "Leaf spot",
steps: ["Sow seeds","Water lightly","Sunlight","Harvest leaves","Regrow"]
},

{
name: "Mustard",
scientific: "Brassica juncea",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "30 days",
maturity: "60 days",
organic: "Compost",
inorganic: "DAP",
problems: "Aphids",
steps: ["Sow seeds","Water","Thin plants","Sunlight","Harvest leaves"]
},

{
name: "Sesame",
scientific: "Sesamum indicum",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Low",
grow: "80 days",
maturity: "100 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf curl",
steps: ["Sow seeds","Minimal water","Sunlight","Harvest pods","Dry seeds"]
},

{
name: "Sorghum",
scientific: "Sorghum bicolor",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Low",
grow: "90 days",
maturity: "120 days",
organic: "Farm manure",
inorganic: "NPK",
problems: "Stem borer",
steps: ["Sow seeds","Water moderately","Sunlight","Weed control","Harvest grains"]
},

{
name: "Millet",
scientific: "Pennisetum glaucum",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Low",
grow: "70 days",
maturity: "100 days",
organic: "Compost",
inorganic: "NPK",
problems: "Rust",
steps: ["Sow seeds","Minimal water","Sunlight","Harvest grains","Dry crop"]
},

{
name: "Foxtail Millet",
scientific: "Setaria italica",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Low",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: ["Sow seeds","Water lightly","Sunlight","Weed control","Harvest grains"]
},

{
name: "Buckwheat",
scientific: "Fagopyrum esculentum",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "40 days",
maturity: "70 days",
organic: "Compost",
inorganic: "DAP",
problems: "Fungal disease",
steps: ["Sow seeds","Water","Sunlight","Harvest seeds","Dry grains"]
},

{
name: "Amaranth",
scientific: "Amaranthus",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "30 days",
maturity: "60 days",
organic: "Compost",
inorganic: "Urea",
problems: "Leaf spot",
steps: ["Sow seeds","Water regularly","Sunlight","Harvest leaves","Regrow"]
},

{
name: "Chia",
scientific: "Salvia hispanica",
type: "Outdoor",
area: "Pot or Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Root rot",
steps: ["Sow seeds","Water lightly","Sunlight","Harvest seeds","Dry"]
},

{
name: "Quinoa",
scientific: "Chenopodium quinoa",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "90 days",
maturity: "120 days",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf miner",
steps: ["Sow seeds","Water","Sunlight","Harvest grains","Dry seeds"]
},

{
name: "Okra",
scientific: "Abelmoschus esculentus",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "50 days",
maturity: "70 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fruit borer",
steps: ["Sow seeds","Water regularly","Sunlight","Harvest pods","Repeat"]
},

{
name: "Capsicum Yellow",
scientific: "Capsicum annuum",
type: "Outdoor",
area: "Pot or Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "60 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Aphids",
steps: ["Start nursery","Transplant","Water","Sunlight","Harvest peppers"]
},

{
name: "Eggplant White",
scientific: "Solanum melongena alba",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "65 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fruit borer",
steps: ["Start nursery","Transplant","Water","Sunlight","Harvest fruits"]
},

{
name: "Pumpkin Green",
scientific: "Cucurbita pepo",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "High",
grow: "80 days",
maturity: "110 days",
organic: "Farm manure",
inorganic: "NPK",
problems: "Powdery mildew",
steps: ["Sow seeds","Water","Space vines","Sunlight","Harvest fruits"]
},

{
name: "Melon Honeydew",
scientific: "Cucumis melo inodorus",
type: "Outdoor",
area: "Ground",
season: "Summer",
sun: "Full sunlight",
water: "Moderate",
grow: "70 days",
maturity: "90 days",
organic: "Compost",
inorganic: "NPK",
problems: "Fruit cracking",
steps: ["Sow seeds","Water","Sunlight","Support vines","Harvest fruits"]
},

{
name: "Loquat",
scientific: "Eriobotrya japonica",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "Moderate",
grow: "1 year",
maturity: "3 years",
organic: "Compost",
inorganic: "DAP",
problems: "Fruit fly",
steps: ["Plant sapling","Water","Sunlight","Prune","Harvest fruits"]
},

{
name: "Olive",
scientific: "Olea europaea",
type: "Outdoor",
area: "Ground",
season: "All seasons",
sun: "Full sunlight",
water: "Low",
grow: "1 year",
maturity: "5 years",
organic: "Compost",
inorganic: "NPK",
problems: "Leaf spot",
steps: ["Plant sapling","Water lightly","Sunlight","Prune","Harvest olives"]
},

{
name: "Cranberry",
scientific: "Vaccinium macrocarpon",
type: "Outdoor",
area: "Ground",
season: "Winter",
sun: "Full sunlight",
water: "High",
grow: "6 months",
maturity: "2 years",
organic: "Acidic compost",
inorganic: "NPK",
problems: "Fungal infection",
steps: ["Plant runners","Water","Acid soil","Sunlight","Harvest berries"]
},
];