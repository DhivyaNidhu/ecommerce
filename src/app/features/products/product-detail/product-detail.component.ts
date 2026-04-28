import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Product, Review } from '../../../core/models/product.model';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, DecimalPipe, StarRatingComponent, ProductCardComponent, LoadingSpinnerComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  reviews: Review[] = [];
  relatedProducts: Product[] = [];
  selectedImage = '';
  quantity = 1;
  activeTab: 'description' | 'specs' | 'reviews' = 'description';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading = true;
      const id = Number(params['id']);
      this.productService.getProductById(id).subscribe(product => {
        if (product) {
          this.product = product;
          this.selectedImage = product.images[0];
          this.quantity = 1;
          this.productService.getReviews(id).subscribe(r => this.reviews = r);
          this.productService.getRelatedProducts(id, product.categoryId).subscribe(p => this.relatedProducts = p);
        }
        this.loading = false;
      });
    });
  }

  get isWishlisted(): boolean {
    return this.product ? this.wishlistService.isInWishlist(this.product.id) : false;
  }

  get discount(): number {
    if (!this.product?.originalPrice) return 0;
    return Math.round((1 - this.product.price / this.product.originalPrice) * 100);
  }

  get specs(): { key: string; value: string }[] {
    if (!this.product?.specifications) return [];
    return Object.entries(this.product.specifications).map(([key, value]) => ({ key, value }));
  }

  addToCart(): void {
    if (!this.product) return;
    if (this.product.stock === 0) { this.notificationService.warning('Out of stock'); return; }
    this.cartService.addItem(this.product, this.quantity);
    this.notificationService.success(`${this.product.name} added to cart`);
  }

  toggleWishlist(): void {
    if (!this.product) return;
    const added = this.wishlistService.toggle(this.product);
    this.notificationService.info(added ? 'Added to wishlist' : 'Removed from wishlist');
  }

  updateQty(delta: number): void {
    if (!this.product) return;
    this.quantity = Math.max(1, Math.min(this.quantity + delta, this.product.stock));
  }
}
