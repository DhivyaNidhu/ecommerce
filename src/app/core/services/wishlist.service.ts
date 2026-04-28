import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly KEY = 'ez_wishlist';
  private wishlist$ = new BehaviorSubject<Product[]>(this.load());

  getWishlist(): Observable<Product[]> {
    return this.wishlist$.asObservable();
  }

  getCount(): Observable<number> {
    return this.wishlist$.pipe(map(items => items.length));
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist$.value.some(p => p.id === productId);
  }

  toggle(product: Product): boolean {
    const current = this.wishlist$.value;
    const exists = current.some(p => p.id === product.id);
    const updated = exists ? current.filter(p => p.id !== product.id) : [...current, product];
    this.save(updated);
    return !exists;
  }

  remove(productId: number): void {
    this.save(this.wishlist$.value.filter(p => p.id !== productId));
  }

  private save(items: Product[]): void {
    this.wishlist$.next(items);
    localStorage.setItem(this.KEY, JSON.stringify(items));
  }

  private load(): Product[] {
    try {
      const saved = localStorage.getItem(this.KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }
}
