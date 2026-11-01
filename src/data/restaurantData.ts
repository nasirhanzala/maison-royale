import { MenuItem, EventSpace, CateringPackage, Testimonial, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Maison Royale',
  tagline: 'Where Every Evening Becomes an Occasion',
  address: '1400 Atwood Avenue, Johnston, Rhode Island 02919',
  phone: '(401) 555-0188',
  email: 'concierge@maisonroyale-ri.demo',
  executiveChef: 'Chef Julian Laurent',
  sommelier: 'Élodie Mercier',
  generalManager: 'Marcus Vance',
  valetAvailable: true,
  dressCode: 'Sophisticated Casual & Cocktail Attire. Athletic wear and beachwear strictly discouraged.',
  parking: 'Complimentary on-site valet parking available Thursday through Sunday evenings.',
  disclaimer: 'Demonstration restaurant website concept for Maison Royale (Johnston, Rhode Island). Bookings and inquiries are stored locally for review.',
};

export const IMAGES = {
  heroInterior: '/images/hero_restaurant_interior_1793470199755.jpg',
  wagyuSteak: '/images/signature_wagyu_steak_1793470244249.jpg',
  panSearedScallops: '/images/dish_pan_seared_scallops_1793470250076.jpg',
  privateBanquet: '/images/private_event_banquet_hall_1793470248236.jpg',
  cocktailBar: '/images/craft_cocktail_bar_1793470201929.jpg',
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 'starter-1',
    name: 'Pan-Seared Georges Bank Sea Scallops',
    category: 'starters',
    price: 32,
    description: 'Golden caramelized Rhode Island day-boat scallops served atop saffron cauliflower purée, Siberian imperial caviar, chive oil, and tender watercress.',
    dietary: ['GF', 'Chef Signature'],
    image: IMAGES.panSearedScallops,
    winePairing: '2022 Domaine Leflaive Puligny-Montrachet',
    featured: true,
  },
  {
    id: 'starter-2',
    name: 'Hudson Valley Foie Gras Torchon',
    category: 'starters',
    price: 36,
    description: 'Silky artisanal duck foie gras with mission fig reduction, spiced brioche crisp, marcona almond dust, and fleur de sel.',
    dietary: ['Chef Signature'],
    winePairing: '2018 Château d’Yquem Sauternes',
  },
  {
    id: 'starter-3',
    name: 'Hamachi Yellowtail Crudo',
    category: 'starters',
    price: 28,
    description: 'Thinly sliced Pacific yellowtail, yuzu kosho vinaigrette, pickled shallots, compressed honeydew, and serrano pepper microgreens.',
    dietary: ['GF'],
    winePairing: '2021 Sancerre Chavignol',
  },
  {
    id: 'starter-4',
    name: 'Crispy Black Truffle Arancini',
    category: 'starters',
    price: 24,
    description: 'Carnaroli risotto infused with black winter truffle and aged fontina cheese, paired with roasted garlic aioli and fresh shaved parmigiano.',
    dietary: ['V'],
  },

  // SOUPS & SALADS
  {
    id: 'soup-1',
    name: 'Narragansett Bay Lobster Bisque',
    category: 'soups-salads',
    price: 26,
    description: 'Slow-simmered Maine & Rhode Island lobster velvet, aged cognac infusion, tarragon crème fraîche, and butter-poached lobster knuckle medallion.',
    dietary: ['GF', 'Chef Signature'],
    winePairing: '2020 Meursault Premier Cru',
    featured: true,
  },
  {
    id: 'salad-1',
    name: 'Maison Heirloom Beet & Burrata',
    category: 'soups-salads',
    price: 22,
    description: 'Roasted golden and candy-stripe beets, artisanal Pugliese burrata, candied pistachios, blood orange vinaigrette, and wild arugula.',
    dietary: ['GF', 'V'],
  },
  {
    id: 'salad-2',
    name: 'Royale Caesar with Brioche Croutons',
    category: 'soups-salads',
    price: 19,
    description: 'Crisp baby gem lettuce hearts, white Cantabrian anchovy dressing, shaved 36-month Parmigiano-Reggiano, and house-baked garlic herb croutons.',
    dietary: ['Chef Signature'],
  },

  // MAIN COURSES
  {
    id: 'main-1',
    name: 'Roasted Sonoma Duck Breast',
    category: 'main-courses',
    price: 52,
    description: 'Spice-rubbed Liberty Farms duck breast, sour cherry demi-glace, parsnip purée, caramelized sunchokes, and wilted rainbow chard.',
    dietary: ['GF'],
    winePairing: '2019 Domaine Dujac Morey-Saint-Denis',
  },
  {
    id: 'main-2',
    name: 'Handcrafted Black Truffle Agnolotti',
    category: 'main-courses',
    price: 44,
    description: 'Piedmontese pinched ravioli filled with roasted wild mushrooms and sweet ricotta, glazed in brown butter with freshly shaved Norcia winter truffles.',
    dietary: ['V', 'Chef Signature'],
    winePairing: '2018 Barolo Serralunga d’Alba',
    featured: true,
  },
  {
    id: 'main-3',
    name: 'Berkshire Heritage Pork Chop',
    category: 'main-courses',
    price: 48,
    description: 'Thick double-cut Berkshire pork chop, bourbon-braised honeycrisp apples, smoked cipollini onions, grain mustard jus, and polenta taragna.',
    dietary: ['GF'],
  },

  // SEAFOOD
  {
    id: 'seafood-1',
    name: 'Chilean Sea Bass en Papillote',
    category: 'seafood',
    price: 58,
    description: 'Miso-mirin glazed wild Patagonian sea bass, baby bok choy, ginger dashi broth, shiitake mushrooms, and scallion curls.',
    dietary: ['GF', 'Chef Signature'],
    winePairing: '2021 Louis Jadot Chassagne-Montrachet',
  },
  {
    id: 'seafood-2',
    name: 'Butter-Poached Whole Coldwater Lobster Tail',
    category: 'seafood',
    price: 64,
    description: 'Two 7oz Maine lobster tails gently poached in Meyer lemon clarified butter, served with sweet corn risotto and asparagus spears.',
    dietary: ['GF'],
    winePairing: '2022 Far Niente Chardonnay, Napa Valley',
  },
  {
    id: 'seafood-3',
    name: 'Crispy Skinned Mediterranean Branzino',
    category: 'seafood',
    price: 46,
    description: 'Pan-roasted branzino filet, caperberry salsa verde, braised fennel bulb, and fingerling potato confit.',
    dietary: ['GF'],
  },

  // STEAKS
  {
    id: 'steak-1',
    name: 'Prime Dry-Aged Wagyu Ribeye (14 oz)',
    category: 'steaks',
    price: 88,
    description: 'Miyazaki A5 marble cross wagyu ribeye, 45-day dry-aged in-house, finished with black garlic herb compound butter and heirloom baby root vegetables.',
    dietary: ['GF', 'Chef Signature'],
    image: IMAGES.wagyuSteak,
    winePairing: '2017 Opus One Bordeaux Blend, Oakville',
    featured: true,
  },
  {
    id: 'steak-2',
    name: 'Center-Cut Filet Mignon (8 oz)',
    category: 'steaks',
    price: 68,
    description: 'Certified USDA Prime Angus tenderloin, bone marrow bordelaise, pomme mousseline, and charred broccolini.',
    dietary: ['GF'],
    winePairing: '2019 Caymus Cabernet Sauvignon, Napa Valley',
  },
  {
    id: 'steak-3',
    name: 'USDA Prime Porterhouse for Two (36 oz)',
    category: 'steaks',
    price: 155,
    description: 'Dry-aged 35 days, carved tableside with roasted shallot jus, roasted garlic head, and chimichurri.',
    dietary: ['GF'],
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Valrhona Grand Cru Dark Chocolate Fondant',
    category: 'desserts',
    price: 18,
    description: 'Warm liquid chocolate center, Madagascar vanilla bean gelato, hazelnut praline tuile, and edible 24k gold leaf accent.',
    dietary: ['V', 'Chef Signature'],
    winePairing: 'Taylor Fladgate 20 Year Old Tawny Port',
    featured: true,
  },
  {
    id: 'dessert-2',
    name: 'Tahitian Vanilla Bean Crème Brûlée',
    category: 'desserts',
    price: 16,
    description: 'Silky baked custard with crackling caramelized raw sugar crust, accompanied by macerated Rhode Island field strawberries.',
    dietary: ['GF', 'V'],
  },
  {
    id: 'dessert-3',
    name: 'Artisanal New England Cheese Trolley',
    category: 'desserts',
    price: 24,
    description: 'Selection of 4 regional small-batch cheeses, honeycomb, house-pickled cherries, marcona almonds, and warm walnut sourdough.',
    dietary: ['V'],
  },

  // BEVERAGES
  {
    id: 'bev-1',
    name: 'The Smoked Royale Old Fashioned',
    category: 'beverages',
    price: 22,
    description: 'WhistlePig 10-Year Rye, Demerara nectar, Angostura & orange bitters, smoked with Rhode Island applewood under glass cloche.',
    dietary: ['Chef Signature'],
    image: IMAGES.cocktailBar,
    featured: true,
  },
  {
    id: 'bev-2',
    name: 'Midnight in Newport Martini',
    category: 'beverages',
    price: 21,
    description: 'Grey Goose VX, dry vermouth, blue cheese-stuffed Colossal olives, lemon oil mist, served ice-cold in Austrian crystal.',
  },
  {
    id: 'bev-3',
    name: 'Dom Pérignon Vintage Champagne (Glass)',
    category: 'beverages',
    price: 45,
    description: '2013 Vintage, Épernay, France. Aromas of toasted brioche, lemon peel, and white peach with persistent fine effervescence.',
  },
  {
    id: 'bev-4',
    name: 'Non-Alcoholic Spiced Orchard Sparkler',
    category: 'beverages',
    price: 14,
    description: 'Locally pressed Rhode Island honeycrisp cider, ginger-cardamom reduction, fresh thyme sprig, and sparkling mineral water.',
    dietary: ['VG'],
  },
];

export const EVENT_SPACES: EventSpace[] = [
  {
    id: 'space-grand-ballroom',
    name: 'The Grand Royale Ballroom',
    capacity: {
      seated: 120,
      cocktail: 160,
    },
    squareFeet: 2400,
    description: 'Our premier venue space featuring handcrafted Austrian crystal chandeliers, private full-service bar, mahogany parquet dance floor, and state-of-the-art audiovisual capabilities.',
    features: [
      'Private bar & cocktail lounge',
      'Dedicated private kitchen & service team',
      'Integrated Bose ambient sound & speech audio',
      'Valet drop-off dedicated entrance',
      'Customizable floral & table linen settings',
    ],
    image: IMAGES.privateBanquet,
  },
  {
    id: 'space-cellar',
    name: 'The Sommelier’s Wine Vault',
    capacity: {
      seated: 18,
      cocktail: 24,
    },
    squareFeet: 620,
    description: 'An intimate, temperature-controlled subterranean sanctuary surrounded by over 3,000 vintage bottles. Crafted for executive board dinners, milestone anniversaries, and bespoke tasting menus.',
    features: [
      'Private sommelier guided pairing experience',
      'Reclaimed solid walnut boardroom dining table',
      'Private acoustic isolation',
      'Customized tasting printed menus with guest monogram',
    ],
    image: IMAGES.heroInterior,
  },
  {
    id: 'space-solarium',
    name: 'The Glass Solarium & Terrace',
    capacity: {
      seated: 48,
      cocktail: 65,
    },
    squareFeet: 1100,
    description: 'Enclosed in soaring floor-to-ceiling glass looking out onto illuminated formal garden courtyards. Ideal for bridal showers, rehearsal dinners, and twilight champagne receptions.',
    features: [
      'Year-round climate control with openable glass walls',
      'Private garden terrace access with fire pits',
      'Natural ambient daylight transitioning to romantic starlight',
      'Bespoke cocktail service station',
    ],
    image: IMAGES.cocktailBar,
  },
  {
    id: 'space-chefs-salon',
    name: 'The Chef’s Tasting Salon',
    capacity: {
      seated: 12,
      cocktail: 15,
    },
    squareFeet: 450,
    description: 'Directly adjacent to the open exhibition kitchen, offering an unobstructed view of culinary wizardry with personalized courses plated before your eyes by Chef Julian Laurent.',
    features: [
      'Live culinary narration by Executive Chef',
      'Direct kitchen counter presentation',
      '7-course or 9-course customizable tasting itineraries',
      'Pre-dinner welcome champagne toast included',
    ],
    image: IMAGES.wagyuSteak,
  },
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'pkg-executive',
    name: 'Executive Boardroom Gala',
    tagline: 'Refined corporate dining engineered to impress distinguished clients and partners.',
    pricePerPerson: 115,
    minimumGuests: 15,
    courses: [
      {
        title: 'Hors d’Oeuvres (Selection of 3)',
        items: [
          'Hudson Valley Foie Gras Mousse on Brioche',
          'Miniature Crab Cakes with Old Bay Remoulade',
          'Wild Mushroom & Fontina Tartlets',
        ],
      },
      {
        title: 'Appetizer & Salad',
        items: ['Maison Heirloom Beet & Burrata with Blood Orange Dressing'],
      },
      {
        title: 'Entrée (Choice of Two)',
        items: [
          'Certified Angus Prime Filet Mignon with Bordelaise',
          'Pan-Seared Chilean Sea Bass with Ginger Dashi',
        ],
      },
      {
        title: 'Dessert Platter',
        items: ['Valrhona Dark Chocolate Ganache Truffles & French Macarons'],
      },
    ],
  },
  {
    id: 'pkg-wedding',
    name: 'The Royale Wedding Collection',
    tagline: 'An unforgettable matrimonial celebration curated with culinary perfection.',
    pricePerPerson: 165,
    minimumGuests: 40,
    courses: [
      {
        title: 'Cocktail Hour Canopy (Selection of 5)',
        items: [
          'Georges Bank Day-Boat Scallop Spoons with Caviar',
          'A5 Wagyu Beef Carpaccio on Crispy Crostini',
          'Ahi Tuna Tartare in Crisp Sesame Cones',
          'Smoked Duck Breast with Cherry Glaze',
          'Truffled Goat Cheese Gougères',
        ],
      },
      {
        title: 'First Course',
        items: ['Narragansett Bay Lobster Bisque with Cognac Cream'],
      },
      {
        title: 'Duet Entrée',
        items: [
          'Petite Prime Tenderloin & Butter-Poached Coldwater Lobster Tail with Pomme Purée and Asparagus',
        ],
      },
      {
        title: 'Dessert & Late-Night Bites',
        items: [
          'Plated Grand Cru Fondant with Gelato',
          'Late-Night Artisanal Sliders & Truffle Pommes Frites',
        ],
      },
    ],
  },
  {
    id: 'pkg-cocktail',
    name: 'Bespoke Twilight Cocktail Soirée',
    tagline: 'High-energy reception with roaming luxury canapés and mixology bars.',
    pricePerPerson: 85,
    minimumGuests: 25,
    courses: [
      {
        title: 'Passed Savory Canapés (Continuous Service)',
        items: [
          'Jumbo Lump Crab Croquettes',
          'Truffled Beef Tartare with Quail Egg',
          'Prosciutto di San Daniele & Fig Skewers',
          'Crispy Polenta with Roasted Artichoke',
        ],
      },
      {
        title: 'Interactive Carving & Raw Station',
        items: [
          'Chilled Raw Oyster & Jumbo Shrimp Ice Bar with Mignonette',
          'Herb-Crusted Whole Roasted Beef Tenderloin Carved to Order',
        ],
      },
      {
        title: 'Sweet Mignardises',
        items: ['Miniature Meyer Lemon Tarts, Espresso Pots de Crème, Pistachio Cannoli'],
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Maison Royale provided the most extraordinary dining experience in Rhode Island. The A5 Wagyu paired with the sommelier’s 2017 Opus One selection was pure perfection. The hospitality is unmatched.',
    author: 'Victoria Sterling',
    title: 'Private Collector & Patron',
    date: 'October 2026',
    rating: 5,
  },
  {
    id: 't-2',
    quote: 'We hosted our annual corporate partner celebration in The Grand Ballroom. From the initial inquiry to the final champagne toast, Marcus and Chef Julian executed every detail with white-glove precision.',
    author: 'David R. Kensington',
    title: 'Managing Director, Providence Capital',
    date: 'September 2026',
    rating: 5,
  },
  {
    id: 't-3',
    quote: 'The Georges Bank Scallops and hand-crafted Black Truffle Agnolotti transported us back to Northern Italy. The atmosphere, glowing chandeliers, and discrete staff make it our favorite sanctuary.',
    author: 'Elena & Dr. Christopher Hayes',
    title: 'Longtime Johnston Residents',
    date: 'October 2026',
    rating: 5,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Grand Dining Room & Crystal Chandeliers',
    category: 'interior',
    image: IMAGES.heroInterior,
    caption: 'Our main dining hall with hand-finished dark wood boiserie, plush velvet banquettes, and dim ambient candlelight.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-2',
    title: 'Prime Dry-Aged Wagyu Ribeye',
    category: 'food',
    image: IMAGES.wagyuSteak,
    caption: 'In-house dry aged 45-day Miyazaki marble wagyu cooked over white oak charcoals with roasted root vegetables.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-3',
    title: 'Pan-Seared Sea Scallops with Saffron Purée',
    category: 'food',
    image: IMAGES.panSearedScallops,
    caption: 'Day-boat Rhode Island sea scallops with Imperial Caviar garnish and saffron velvet.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-4',
    title: 'The Grand Ballroom Banquet Setting',
    category: 'events',
    image: IMAGES.privateBanquet,
    caption: 'Prepared for an exclusive 80-guest anniversary dinner with custom botanical centerpieces and fine bone china.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-5',
    title: 'The Smoked Royale Old Fashioned',
    category: 'food',
    image: IMAGES.cocktailBar,
    caption: 'Artisanal cocktails crafted with house-pressed tinctures, clear hand-carved ice, and fragrant applewood smoke.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-6',
    title: 'Intimate Candlelit Table Setting',
    category: 'experience',
    image: IMAGES.heroInterior,
    caption: 'Table reservations set with Belgian linen, Riedel stemware, and personalized evening menus.',
    aspectRatio: 'landscape',
  },
];

export const OPERATING_HOURS = [
  { day: 'Monday', hours: 'Closed (Available for Private Buyouts)', note: 'Private events upon advance reservation' },
  { day: 'Tuesday – Thursday', hours: '5:00 PM – 10:00 PM', note: 'Dinner Service & Cocktail Lounge' },
  { day: 'Friday', hours: '5:00 PM – 11:00 PM', note: 'Dinner Service & Late Lounge' },
  { day: 'Saturday', hours: '4:30 PM – 11:00 PM', note: 'Dinner Service & Sommelier Pairings' },
  { day: 'Sunday', hours: '11:00 AM – 3:00 PM · 4:30 PM – 9:00 PM', note: 'Grand Brunch & Twilight Dinner' },
];

export const HOLIDAY_HOURS_NOTICE = 'Special 5-Course Holiday Tasting Menus available on Thanksgiving, Christmas Eve, and New Year’s Eve. Reservations open 60 days in advance.';
