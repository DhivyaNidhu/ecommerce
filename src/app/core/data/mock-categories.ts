import { Category } from '../models/category.model';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    icon: '💻',
    description: 'Latest gadgets, smartphones, laptops, and more',
    productCount: 4
  },
  {
    id: 2,
    name: 'Clothing',
    slug: 'clothing',
    icon: '👗',
    description: 'Fashion for every style and occasion',
    productCount: 4
  },
  {
    id: 3,
    name: 'Home & Garden',
    slug: 'home-garden',
    icon: '🏠',
    description: 'Everything you need for your home',
    productCount: 4
  },
  {
    id: 4,
    name: 'Sports',
    slug: 'sports',
    icon: '⚽',
    description: 'Gear and equipment for an active lifestyle',
    productCount: 4
  },
  {
    id: 5,
    name: 'Books',
    slug: 'books',
    icon: '📚',
    description: 'Bestsellers, classics, and educational titles',
    productCount: 2
  },
  {
    id: 6,
    name: 'Beauty',
    slug: 'beauty',
    icon: '✨',
    description: 'Skincare, makeup, and wellness products',
    productCount: 2
  }
];
