import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { Product, ProductFilter } from '../../../core/models/product.model';
import { Category } from '../../../core/models/category.model';
import { MOCK_CATEGORIES } from '../../../core/data/mock-categories';
import { ProductCardComponent } from '../product-card/product-card.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, ProductCardComponent, LoadingSpinnerComponent, DecimalPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: Category[] = MOCK_CATEGORIES;
  loading = true;

  filter: ProductFilter = { sortBy: 'newest' };
  selectedCategory: number | undefined;
  priceRange = { min: 0, max: 1500 };
  maxPrice = 1500;
  searchQuery = '';

  sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'name', label: 'Name A-Z' }
  ];

  private sub?: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.maxPrice = this.productService.getMaxPrice();
    this.priceRange.max = this.maxPrice;

    this.sub = this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] ? Number(params['category']) : undefined;
      this.searchQuery = params['search'] || '';
      this.filter = {
        ...this.filter,
        categoryId: this.selectedCategory,
        search: this.searchQuery || undefined
      };
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.loading = true;
    const f: ProductFilter = {
      ...this.filter,
      minPrice: this.priceRange.min,
      maxPrice: this.priceRange.max < this.maxPrice ? this.priceRange.max : undefined
    };
    this.productService.getProducts(f).subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }

  onCategoryChange(categoryId: number | undefined): void {
    this.selectedCategory = categoryId;
    this.filter.categoryId = categoryId;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: categoryId, search: this.searchQuery || undefined },
      queryParamsHandling: 'merge'
    });
  }

  onFilterChange(): void {
    this.loadProducts();
  }

  onSortChange(sortBy: string): void {
    this.filter.sortBy = sortBy as ProductFilter['sortBy'];
    this.loadProducts();
  }

  clearFilters(): void {
    this.selectedCategory = undefined;
    this.filter = { sortBy: 'newest' };
    this.priceRange = { min: 0, max: this.maxPrice };
    this.searchQuery = '';
    this.router.navigate(['/products']);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.selectedCategory) count++;
    if (this.priceRange.min > 0 || this.priceRange.max < this.maxPrice) count++;
    if (this.filter.minRating) count++;
    return count;
  }

  getCategoryName(id: number): string {
    return this.categories.find(c => c.id === id)?.name || '';
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
