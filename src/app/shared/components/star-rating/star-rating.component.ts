import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  template: `
    <div class="stars" [attr.title]="rating + ' out of 5'">
      @for (star of stars; track $index) {
        <span class="star" [class.filled]="star === 'full'" [class.half]="star === 'half'">★</span>
      }
      @if (showCount && reviewCount !== undefined) {
        <span class="review-count">({{ reviewCount | number }})</span>
      }
    </div>
  `,
  styles: [`
    .stars { display: inline-flex; align-items: center; gap: 2px; }
    .star { color: #d1d5db; font-size: inherit; line-height: 1; }
    .star.filled { color: #f59e0b; }
    .star.half {
      position: relative;
      color: #d1d5db;
      display: inline-block;
    }
    .star.half::before {
      content: '★';
      position: absolute;
      left: 0;
      width: 50%;
      overflow: hidden;
      color: #f59e0b;
    }
    .review-count { font-size: 0.8em; color: #6b7280; margin-left: 4px; }
  `],
  imports: [DecimalPipe]
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() reviewCount?: number;
  @Input() showCount = false;

  get stars(): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (this.rating >= i + 1) return 'full';
      if (this.rating >= i + 0.5) return 'half';
      return 'empty';
    });
  }
}
