import { Product } from '../models/product.model';
import { Review } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'The most powerful iPhone ever with A17 Pro chip, titanium design, and a breakthrough camera system with 5x optical zoom.',
    price: 999,
    originalPrice: 1099,
    category: 'Electronics',
    categoryId: 1,
    images: [
      'https://picsum.photos/seed/iphone15pro/600/500',
      'https://picsum.photos/seed/iphone15proa/600/500',
      'https://picsum.photos/seed/iphone15prob/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/iphone15pro/400/300',
    rating: 4.8,
    reviewCount: 2341,
    stock: 50,
    brand: 'Apple',
    tags: ['smartphone', 'ios', '5g', 'camera'],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Battery': 'Up to 23 hours',
      'Storage': '128GB / 256GB / 512GB / 1TB'
    },
    featured: true
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality, 30-hour battery life, and multipoint connection.',
    price: 299,
    originalPrice: 379,
    category: 'Electronics',
    categoryId: 1,
    images: [
      'https://picsum.photos/seed/sonyxm5/600/500',
      'https://picsum.photos/seed/sonyxm5a/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/sonyxm5/400/300',
    rating: 4.7,
    reviewCount: 1823,
    stock: 120,
    brand: 'Sony',
    tags: ['headphones', 'noise-canceling', 'wireless', 'bluetooth'],
    specifications: {
      'Driver': '30mm dome type',
      'Battery': 'Up to 30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g',
      'Microphone': '8 microphones'
    },
    featured: true
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    description: 'Supercharged by M3 chip. Up to 18 hours of battery life. Fanless design. 15.3-inch Liquid Retina display.',
    price: 1299,
    originalPrice: 1499,
    category: 'Electronics',
    categoryId: 1,
    images: [
      'https://picsum.photos/seed/macbookairm3/600/500',
      'https://picsum.photos/seed/macbookairm3a/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/macbookairm3/400/300',
    rating: 4.9,
    reviewCount: 987,
    stock: 30,
    brand: 'Apple',
    tags: ['laptop', 'macbook', 'apple', 'm3'],
    specifications: {
      'Chip': 'Apple M3',
      'Display': '15.3-inch Liquid Retina',
      'Memory': '8GB / 16GB',
      'Storage': '256GB – 2TB SSD',
      'Battery': 'Up to 18 hours'
    },
    featured: true
  },
  {
    id: 4,
    name: 'Samsung Galaxy Watch 6',
    description: 'Advanced health monitoring with body composition analysis, sleep coaching, and a vibrant AMOLED display.',
    price: 299,
    originalPrice: 329,
    category: 'Electronics',
    categoryId: 1,
    images: [
      'https://picsum.photos/seed/galaxywatch6/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/galaxywatch6/400/300',
    rating: 4.5,
    reviewCount: 654,
    stock: 80,
    brand: 'Samsung',
    tags: ['smartwatch', 'fitness', 'health', 'samsung'],
    specifications: {
      'Display': '1.5-inch AMOLED',
      'Battery': 'Up to 40 hours',
      'Water Resistance': '5ATM + IP68',
      'Sensors': 'BioActive Sensor',
      'Connectivity': 'LTE, Wi-Fi, Bluetooth 5.3'
    }
  },
  {
    id: 5,
    name: "Levi's 501 Original Jeans",
    description: "The original jean since 1873. Straight leg, button fly, and iconic 501 styling. Made from premium denim.",
    price: 89,
    originalPrice: 110,
    category: 'Clothing',
    categoryId: 2,
    images: [
      'https://picsum.photos/seed/levis501/600/500',
      'https://picsum.photos/seed/levis501a/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/levis501/400/300',
    rating: 4.4,
    reviewCount: 3210,
    stock: 200,
    brand: "Levi's",
    tags: ['jeans', 'denim', 'classic', 'casual'],
    specifications: {
      'Fit': 'Straight',
      'Rise': 'Mid Rise',
      'Closure': 'Button Fly',
      'Material': '100% Cotton',
      'Care': 'Machine Wash Cold'
    },
    featured: true
  },
  {
    id: 6,
    name: 'Nike Air Force 1 Sneakers',
    description: "The Nike Air Force 1 is a cultural icon. The b-ball shoe that started it all has stood the test of time.",
    price: 110,
    category: 'Clothing',
    categoryId: 2,
    images: [
      'https://picsum.photos/seed/nikeaf1/600/500',
      'https://picsum.photos/seed/nikeaf1a/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/nikeaf1/400/300',
    rating: 4.6,
    reviewCount: 5432,
    stock: 150,
    brand: 'Nike',
    tags: ['sneakers', 'shoes', 'casual', 'nike'],
    specifications: {
      'Upper': 'Leather',
      'Sole': 'Rubber',
      'Closure': 'Lace-Up',
      'Cushioning': 'Air-Sole unit',
      'Style': 'Low-Top'
    }
  },
  {
    id: 7,
    name: 'Floral Maxi Dress',
    description: 'Elegant floral print maxi dress with flowing silhouette. Perfect for summer occasions, garden parties, and beach outings.',
    price: 79,
    originalPrice: 99,
    category: 'Clothing',
    categoryId: 2,
    images: [
      'https://picsum.photos/seed/floraldress/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/floraldress/400/300',
    rating: 4.3,
    reviewCount: 892,
    stock: 75,
    brand: 'Zara',
    tags: ['dress', 'maxi', 'floral', 'summer'],
    specifications: {
      'Length': 'Maxi',
      'Material': '100% Viscose',
      'Neckline': 'V-Neck',
      'Sleeve': 'Sleeveless',
      'Care': 'Hand Wash Only'
    }
  },
  {
    id: 8,
    name: 'Slim Fit Oxford Shirt',
    description: 'Classic slim-fit Oxford shirt crafted from breathable cotton. Versatile enough for both business casual and smart casual looks.',
    price: 45,
    originalPrice: 59,
    category: 'Clothing',
    categoryId: 2,
    images: [
      'https://picsum.photos/seed/oxfordshirt/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/oxfordshirt/400/300',
    rating: 4.2,
    reviewCount: 1234,
    stock: 300,
    brand: 'H&M',
    tags: ['shirt', 'oxford', 'slim-fit', 'formal'],
    specifications: {
      'Fit': 'Slim',
      'Material': '100% Cotton',
      'Collar': 'Button-Down',
      'Sleeve': 'Long Sleeve',
      'Care': 'Machine Wash 40°C'
    }
  },
  {
    id: 9,
    name: 'Nespresso Vertuo Coffee Machine',
    description: 'Brew barista-quality coffee at home with Centrifusion technology. Compatible with all Vertuo capsules for espresso and large cups.',
    price: 199,
    originalPrice: 249,
    category: 'Home & Garden',
    categoryId: 3,
    images: [
      'https://picsum.photos/seed/nespresso/600/500',
      'https://picsum.photos/seed/nespressoa/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/nespresso/400/300',
    rating: 4.6,
    reviewCount: 2198,
    stock: 60,
    brand: 'Nespresso',
    tags: ['coffee', 'kitchen', 'espresso', 'appliance'],
    specifications: {
      'Capacity': '1.1L water tank',
      'Pressure': '19 bar',
      'Heat Time': '30 seconds',
      'Cup Sizes': '5 sizes (40ml to 535ml)',
      'Power': '1500W'
    },
    featured: true
  },
  {
    id: 10,
    name: 'Luxury Throw Pillow Set',
    description: 'Set of 4 premium decorative throw pillows with removable covers. Perfect for sofas, beds, and accent chairs.',
    price: 49,
    originalPrice: 69,
    category: 'Home & Garden',
    categoryId: 3,
    images: [
      'https://picsum.photos/seed/throwpillows/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/throwpillows/400/300',
    rating: 4.1,
    reviewCount: 445,
    stock: 180,
    brand: 'IKEA',
    tags: ['pillow', 'home-decor', 'bedroom', 'sofa'],
    specifications: {
      'Set Includes': '4 pillow covers + inserts',
      'Size': '45cm x 45cm',
      'Material': 'Cotton blend',
      'Fill': 'Polyester fiber',
      'Care': 'Machine Washable'
    }
  },
  {
    id: 11,
    name: 'Yankee Candle Gift Set',
    description: 'A curated collection of 6 best-selling Yankee Candle scents. Burn time of 25-40 hours each. Perfect gift for any occasion.',
    price: 65,
    category: 'Home & Garden',
    categoryId: 3,
    images: [
      'https://picsum.photos/seed/yankeecandle/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/yankeecandle/400/300',
    rating: 4.5,
    reviewCount: 789,
    stock: 90,
    brand: 'Yankee Candle',
    tags: ['candle', 'fragrance', 'gift', 'home-decor'],
    specifications: {
      'Quantity': '6 candles',
      'Burn Time': '25-40 hours each',
      'Wax': 'Premium paraffin',
      'Wick': 'Cotton wick',
      'Sizes': 'Small Jar (104g each)'
    }
  },
  {
    id: 12,
    name: 'Cuisinart Digital Air Fryer',
    description: 'Healthier fried food with 60% less fat. 5.5-litre capacity, 1700W, 8 presets including air fry, roast, bake, and grill.',
    price: 129,
    originalPrice: 179,
    category: 'Home & Garden',
    categoryId: 3,
    images: [
      'https://picsum.photos/seed/airfryer/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/airfryer/400/300',
    rating: 4.4,
    reviewCount: 1567,
    stock: 45,
    brand: 'Cuisinart',
    tags: ['air-fryer', 'kitchen', 'cooking', 'healthy'],
    specifications: {
      'Capacity': '5.5 litres',
      'Power': '1700W',
      'Presets': '8 cooking functions',
      'Temperature': '80–200°C',
      'Timer': 'Up to 60 minutes'
    }
  },
  {
    id: 13,
    name: 'Premium Yoga Mat',
    description: 'Extra thick 6mm non-slip yoga mat with superior cushioning and alignment lines. Includes carrying strap.',
    price: 49,
    originalPrice: 65,
    category: 'Sports',
    categoryId: 4,
    images: [
      'https://picsum.photos/seed/yogamat/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/yogamat/400/300',
    rating: 4.5,
    reviewCount: 2340,
    stock: 200,
    brand: 'Adidas',
    tags: ['yoga', 'fitness', 'exercise', 'mat'],
    specifications: {
      'Thickness': '6mm',
      'Dimensions': '183cm x 61cm',
      'Material': 'Natural rubber',
      'Surface': 'Non-slip texture',
      'Weight': '1.5kg'
    },
    featured: true
  },
  {
    id: 14,
    name: 'Nike React Infinity Run Shoes',
    description: 'Designed to help reduce injury with cushioning and stability. Wide platform with React foam for a responsive ride.',
    price: 139,
    originalPrice: 159,
    category: 'Sports',
    categoryId: 4,
    images: [
      'https://picsum.photos/seed/nikereact/600/500',
      'https://picsum.photos/seed/nikereacea/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/nikereact/400/300',
    rating: 4.7,
    reviewCount: 1876,
    stock: 85,
    brand: 'Nike',
    tags: ['running', 'shoes', 'fitness', 'nike'],
    specifications: {
      'Drop': '10mm',
      'Weight': '280g (UK 8)',
      'Midsole': 'Nike React foam',
      'Outsole': 'Rubber',
      'Upper': 'Engineered mesh'
    }
  },
  {
    id: 15,
    name: 'Hydro Flask 32 oz Water Bottle',
    description: 'TempShield double-wall vacuum insulation keeps drinks cold for 24 hrs and hot for 12 hrs. BPA-free and dishwasher safe.',
    price: 45,
    category: 'Sports',
    categoryId: 4,
    images: [
      'https://picsum.photos/seed/hydroflask/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/hydroflask/400/300',
    rating: 4.8,
    reviewCount: 4521,
    stock: 300,
    brand: 'Hydro Flask',
    tags: ['water-bottle', 'hydration', 'sports', 'insulated'],
    specifications: {
      'Capacity': '32 oz (946ml)',
      'Insulation': 'TempShield double-wall',
      'Cold': 'Up to 24 hours',
      'Hot': 'Up to 12 hours',
      'Material': '18/8 pro-grade stainless steel'
    }
  },
  {
    id: 16,
    name: 'Resistance Bands Set (11-Piece)',
    description: 'Complete resistance band set with 5 loop bands, 2 tube bands, handles, door anchor, and ankle straps. For all fitness levels.',
    price: 35,
    originalPrice: 49,
    category: 'Sports',
    categoryId: 4,
    images: [
      'https://picsum.photos/seed/resistancebands/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/resistancebands/400/300',
    rating: 4.3,
    reviewCount: 3456,
    stock: 400,
    brand: 'Theraband',
    tags: ['resistance', 'fitness', 'workout', 'bands'],
    specifications: {
      'Set Includes': '11 pieces',
      'Resistance Levels': 'Extra Light to Extra Heavy',
      'Material': 'Natural latex',
      'Max Resistance': '150 lbs combined',
      'Use': 'Indoor/Outdoor'
    }
  },
  {
    id: 17,
    name: 'Atomic Habits',
    description: "James Clear's New York Times bestseller. An easy and proven way to build good habits and break bad ones. Over 15 million copies sold.",
    price: 18,
    originalPrice: 25,
    category: 'Books',
    categoryId: 5,
    images: [
      'https://picsum.photos/seed/atomichabits/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/atomichabits/400/300',
    rating: 4.8,
    reviewCount: 98765,
    stock: 500,
    brand: 'Penguin Random House',
    tags: ['self-help', 'productivity', 'habits', 'bestseller'],
    specifications: {
      'Author': 'James Clear',
      'Pages': '320',
      'Publisher': 'Avery',
      'Language': 'English',
      'Format': 'Hardcover / Paperback / eBook'
    },
    featured: true
  },
  {
    id: 18,
    name: 'The Lean Startup',
    description: 'How constant innovation creates radically successful businesses. Essential reading for entrepreneurs and business leaders.',
    price: 24,
    category: 'Books',
    categoryId: 5,
    images: [
      'https://picsum.photos/seed/leanstartup/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/leanstartup/400/300',
    rating: 4.6,
    reviewCount: 45678,
    stock: 300,
    brand: 'Crown Currency',
    tags: ['business', 'startup', 'entrepreneurship', 'innovation'],
    specifications: {
      'Author': 'Eric Ries',
      'Pages': '336',
      'Publisher': 'Crown Currency',
      'Language': 'English',
      'Format': 'Hardcover / Paperback / eBook'
    }
  },
  {
    id: 19,
    name: 'CeraVe Skincare Starter Kit',
    description: 'Complete skincare routine for beginners. Includes hydrating cleanser, moisturizing cream, and SPF 30 face sunscreen.',
    price: 89,
    originalPrice: 109,
    category: 'Beauty',
    categoryId: 6,
    images: [
      'https://picsum.photos/seed/ceravekit/600/500',
      'https://picsum.photos/seed/ceravekita/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/ceravekit/400/300',
    rating: 4.7,
    reviewCount: 6789,
    stock: 120,
    brand: 'CeraVe',
    tags: ['skincare', 'moisturizer', 'cleanser', 'spf'],
    specifications: {
      'Kit Includes': 'Cleanser + Moisturizer + SPF 30',
      'Skin Type': 'All skin types',
      'Key Ingredients': 'Ceramides, Hyaluronic Acid',
      'Fragrance': 'Fragrance-free',
      'Dermatologist': 'Developed'
    },
    featured: true
  },
  {
    id: 20,
    name: 'Vitamin C Brightening Serum',
    description: 'Advanced brightening serum with 20% Vitamin C, Hyaluronic Acid, and Vitamin E. Fades dark spots and evens skin tone.',
    price: 22,
    originalPrice: 35,
    category: 'Beauty',
    categoryId: 6,
    images: [
      'https://picsum.photos/seed/vitcserum/600/500'
    ],
    thumbnail: 'https://picsum.photos/seed/vitcserum/400/300',
    rating: 4.5,
    reviewCount: 12340,
    stock: 250,
    brand: 'TruSkin',
    tags: ['serum', 'vitamin-c', 'brightening', 'anti-aging'],
    specifications: {
      'Active Ingredient': '20% Vitamin C',
      'Also Contains': 'Hyaluronic Acid, Vitamin E',
      'Size': '30ml',
      'Skin Type': 'All types',
      'Usage': 'AM & PM'
    }
  }
];

export const MOCK_REVIEWS: Review[] = [
  { id: 1, productId: 1, userId: 1, userName: 'Alex M.', rating: 5, comment: 'Absolutely love this product! Best purchase I\'ve made this year.', date: '2024-11-15' },
  { id: 2, productId: 1, userId: 2, userName: 'Sarah K.', rating: 5, comment: 'Exceeded my expectations. The quality is outstanding.', date: '2024-11-10' },
  { id: 3, productId: 1, userId: 3, userName: 'James L.', rating: 4, comment: 'Great product, very happy with my purchase!', date: '2024-10-28' },
  { id: 4, productId: 2, userId: 4, userName: 'Emma R.', rating: 5, comment: 'The noise cancellation is incredible. Worth every penny.', date: '2024-11-12' },
  { id: 5, productId: 2, userId: 5, userName: 'Chris B.', rating: 4, comment: 'Great sound quality and comfortable to wear all day.', date: '2024-11-05' },
  { id: 6, productId: 3, userId: 6, userName: 'Lisa T.', rating: 5, comment: 'This laptop is incredibly fast and the battery life is amazing.', date: '2024-11-18' },
  { id: 7, productId: 13, userId: 7, userName: 'Mike P.', rating: 5, comment: 'Best yoga mat I\'ve ever used. Great grip and cushioning.', date: '2024-11-20' },
  { id: 8, productId: 17, userId: 8, userName: 'Anna W.', rating: 5, comment: 'This book changed my life. A must-read for everyone.', date: '2024-10-30' },
  { id: 9, productId: 19, userId: 9, userName: 'Rachel G.', rating: 5, comment: 'My skin has never looked better. Amazing kit for beginners.', date: '2024-11-08' },
  { id: 10, productId: 9, userId: 10, userName: 'Tom H.', rating: 4, comment: 'Makes a perfect cup every time. Quick and easy to use.', date: '2024-11-14' }
];
