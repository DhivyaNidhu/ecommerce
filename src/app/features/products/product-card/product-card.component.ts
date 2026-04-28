import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { NotificationService } from '../../../core/services/notification.service';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, DecimalPipe, StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private notificationService: NotificationService
  ) {}

  get isWishlisted(): boolean {
    return this.wishlistService.isInWishlist(this.product.id);
  }

  get discount(): number {
    if (!this.product.originalPrice) return 0;
    return Math.round((1 - this.product.price / this.product.originalPrice) * 100);
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.product.stock === 0) { this.notificationService.warning('Product is out of stock'); return; }
    this.cartService.addItem(this.product);
    this.notificationService.success(`${this.product.name} added to cart`);
  }

  toggleWishlist(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const added = this.wishlistService.toggle(this.product);
    this.notificationService.info(added ? `${this.product.name} added to wishlist` : `Removed from wishlist`);
  }
}
