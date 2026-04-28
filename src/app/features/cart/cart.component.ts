import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/models/cart.model';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [], subtotal: 0, discount: 0, shipping: 0, total: 0, itemCount: 0 };

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  updateQty(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  remove(productId: number, name: string): void {
    this.cartService.removeItem(productId);
    this.notificationService.info(`${name} removed from cart`);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.notificationService.info('Cart cleared');
  }
}
