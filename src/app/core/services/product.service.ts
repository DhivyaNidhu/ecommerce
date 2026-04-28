import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Product, ProductFilter, Review } from '../models/product.model';
import { MOCK_PRODUCTS, MOCK_REVIEWS } from '../data/mock-products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = MOCK_PRODUCTS;
  private reviews = MOCK_REVIEWS;

  getProducts(filter?: ProductFilter): Observable<Product[]> {
    let result = [...this.products];

    if (filter) {
      if (filter.categoryId) {
        result = result.filter(p => p.categoryId === filter.categoryId);
      }
      if (filter.minPrice !== undefined) {
        result = result.filter(p => p.price >= filter.minPrice!);
      }
      if (filter.maxPrice !== undefined) {
        result = result.filter(p => p.price <= filter.maxPrice!);
      }
      if (filter.minRating !== undefined) {
        result = result.filter(p => p.rating >= filter.minRating!);
      }
      if (filter.search) {
        const search = filter.search.toLowerCase();
        result = result.filter(p =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search) ||
          p.brand.toLowerCase().includes(search) ||
          p.tags.some(t => t.includes(search))
        );
      }
      if (filter.sortBy) {
        switch (filter.sortBy) {
          case 'price-asc': result.sort((a, b) => a.price - b.price); break;
          case 'price-desc': result.sort((a, b) => b.price - a.price); break;
          case 'rating': result.sort((a, b) => b.rating - a.rating); break;
          case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
          case 'newest': result.sort((a, b) => b.id - a.id); break;
        }
      }
    }

    return of(result).pipe(delay(300));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id)).pipe(delay(200));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products.filter(p => p.featured)).pipe(delay(200));
  }

  getRelatedProducts(productId: number, categoryId: number): Observable<Product[]> {
    return of(
      this.products.filter(p => p.categoryId === categoryId && p.id !== productId).slice(0, 4)
    ).pipe(delay(200));
  }

  getReviews(productId: number): Observable<Review[]> {
    return of(this.reviews.filter(r => r.productId === productId)).pipe(delay(200));
  }

  getMaxPrice(): number {
    return Math.max(...this.products.map(p => p.price));
  }
}
