import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../core/services/wishlist.service';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../products/product-card/product-card.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  wishlist: Product[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe(items => this.wishlist = items);
  }

  addAllToCart(): void {
    this.wishlist.filter(p => p.stock > 0).forEach(p => this.cartService.addItem(p));
    this.notificationService.success('All available items added to cart');
  }

  clearWishlist(): void {
    this.wishlist.forEach(p => this.wishlistService.remove(p.id));
    this.notificationService.info('Wishlist cleared');
  }
}
