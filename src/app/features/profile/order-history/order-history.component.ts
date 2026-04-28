import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.model';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [RouterLink, DecimalPipe, DatePipe, TitleCasePipe, LoadingSpinnerComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  expandedOrder: string | null = null;

  constructor(private authService: AuthService, private orderService: OrderService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.orderService.getOrders(user.id).subscribe(orders => {
        this.orders = orders;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  toggleExpand(orderId: string): void {
    this.expandedOrder = this.expandedOrder === orderId ? null : orderId;
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      pending: 'status-pending',
      processing: 'status-processing',
      shipped: 'status-shipped',
      delivered: 'status-delivered',
      cancelled: 'status-cancelled'
    };
    return colors[status] || 'status-pending';
  }
}
