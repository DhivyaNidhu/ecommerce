import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly KEY = 'ez_orders';

  getOrders(userId: number): Observable<Order[]> {
    const orders = this.load().filter(o => o.userId === userId);
    return of(orders).pipe(delay(300));
  }

  getOrderById(id: string): Observable<Order | undefined> {
    return of(this.load().find(o => o.id === id)).pipe(delay(200));
  }

  createOrder(data: Omit<Order, 'id' | 'createdAt' | 'status' | 'trackingNumber' | 'estimatedDelivery'>): Observable<Order> {
    const order: Order = {
      ...data,
      id: 'ORD-' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      trackingNumber: 'TRK-' + Math.random().toString(36).substring(2, 11).toUpperCase(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    const orders = [order, ...this.load()];
    localStorage.setItem(this.KEY, JSON.stringify(orders));
    return of(order).pipe(delay(600));
  }

  private load(): Order[] {
    try {
      const saved = localStorage.getItem(this.KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }
}
