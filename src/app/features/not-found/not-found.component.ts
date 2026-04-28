import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <div class="content">
        <div class="code">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
        <div class="actions">
          <a routerLink="/" class="btn-home">Go to Homepage</a>
          <a routerLink="/products" class="btn-shop">Browse Products</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px 24px;
      text-align: center;
    }
    .code {
      font-size: 8rem;
      font-weight: 900;
      color: #e2e8f0;
      line-height: 1;
      margin-bottom: 16px;
    }
    h1 { font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
    p { color: #64748b; font-size: 1rem; max-width: 400px; margin: 0 auto 32px; line-height: 1.7; }
    .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .btn-home {
      padding: 12px 28px;
      background: var(--primary, #2563eb);
      color: #fff;
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      transition: background 0.2s;
    }
    .btn-home:hover { background: #1d4ed8; }
    .btn-shop {
      padding: 12px 28px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-weight: 700;
      color: #475569;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-shop:hover { border-color: var(--primary, #2563eb); color: var(--primary, #2563eb); }
  `]
})
export class NotFoundComponent {}
