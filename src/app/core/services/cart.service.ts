import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart, CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly CART_KEY = 'ez_cart';
  private cart$ = new BehaviorSubject<Cart>(this.loadCart());

  getCart(): Observable<Cart> {
    return this.cart$.asObservable();
  }

  getItemCount(): Observable<number> {
    return this.cart$.pipe(map(c => c.itemCount));
  }

  addItem(product: Product, quantity = 1): void {
    const cart = { ...this.cart$.value, items: [...this.cart$.value.items] };
    const existing = cart.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, product.stock);
    } else {
      cart.items.push({ product, quantity });
    }
    this.save(cart);
  }

  removeItem(productId: number): void {
    const cart = { ...this.cart$.value };
    cart.items = cart.items.filter(i => i.product.id !== productId);
    this.save(cart);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) { this.removeItem(productId); return; }
    const cart = { ...this.cart$.value, items: [...this.cart$.value.items] };
    const item = cart.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity = Math.min(quantity, item.product.stock);
      this.save(cart);
    }
  }

  clearCart(): void {
    const empty = this.emptyCart();
    this.cart$.next(empty);
    localStorage.removeItem(this.CART_KEY);
  }

  private save(cart: Cart): void {
    cart.itemCount = cart.items.reduce((s, i) => s + i.quantity, 0);
    cart.subtotal = cart.items.reduce((s, i) => s + i.product.price * i.quantity, 0);
    cart.shipping = cart.subtotal > 0 && cart.subtotal < 50 ? 9.99 : 0;
    cart.total = cart.subtotal + cart.shipping - cart.discount;
    this.cart$.next({ ...cart });
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  private loadCart(): Cart {
    try {
      const saved = localStorage.getItem(this.CART_KEY);
      return saved ? JSON.parse(saved) : this.emptyCart();
    } catch {
      return this.emptyCart();
    }
  }

  private emptyCart(): Cart {
    return { items: [], subtotal: 0, discount: 0, shipping: 0, total: 0, itemCount: 0 };
  }
}
