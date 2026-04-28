import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="spinner-wrapper" [class.overlay]="overlay">
      <div class="spinner" [style.width.px]="size" [style.height.px]="size"></div>
      @if (message) { <p class="spinner-message">{{ message }}</p> }
    </div>
  `,
  styles: [`
    .spinner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      gap: 16px;
    }
    .spinner-wrapper.overlay {
      position: fixed;
      inset: 0;
      background: rgba(255,255,255,0.8);
      z-index: 9998;
    }
    .spinner {
      border: 3px solid #e5e7eb;
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .spinner-message { color: #6b7280; font-size: 0.9rem; }
  `]
})
export class LoadingSpinnerComponent {
  @Input() size = 40;
  @Input() overlay = false;
  @Input() message = '';
}
