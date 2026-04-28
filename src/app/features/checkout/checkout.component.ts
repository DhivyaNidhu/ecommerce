import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { Cart } from '../../core/models/cart.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, DecimalPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cart: Cart = { items: [], subtotal: 0, discount: 0, shipping: 0, total: 0, itemCount: 0 };
  step: 1 | 2 | 3 = 1;
  submitting = false;

  shippingForm: FormGroup;
  paymentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.shippingForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      apartment: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['United States', Validators.required]
    });

    this.paymentForm = this.fb.group({
      method: ['card', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]],
      cardName: ['', Validators.required],
      expiry: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      if (cart.items.length === 0) this.router.navigate(['/cart']);
    });
    const user = this.authService.getCurrentUser();
    if (user) {
      this.shippingForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone || ''
      });
    }
  }

  nextStep(): void {
    if (this.step === 1 && this.shippingForm.valid) this.step = 2;
    else if (this.step === 1) this.shippingForm.markAllAsTouched();
    else if (this.step === 2 && this.paymentForm.valid) this.step = 3;
    else if (this.step === 2) this.paymentForm.markAllAsTouched();
  }

  prevStep(): void {
    if (this.step > 1) this.step = (this.step - 1) as 1 | 2 | 3;
  }

  placeOrder(): void {
    if (this.submitting) return;
    this.submitting = true;

    const user = this.authService.getCurrentUser();
    const sf = this.shippingForm.value;

    this.orderService.createOrder({
      userId: user?.id || 0,
      items: this.cart.items.map(i => ({
        productId: i.product.id,
        productName: i.product.name,
        productImage: i.product.thumbnail,
        quantity: i.quantity,
        price: i.product.price
      })),
      subtotal: this.cart.subtotal,
      discount: this.cart.discount,
      shipping: this.cart.shipping,
      total: this.cart.total,
      shippingAddress: {
        street: sf.street,
        apartment: sf.apartment,
        city: sf.city,
        state: sf.state,
        zipCode: sf.zipCode,
        country: sf.country
      },
      paymentMethod: this.paymentForm.value.method === 'card' ? 'Credit Card' : 'PayPal'
    }).subscribe(order => {
      this.cartService.clearCart();
      this.notificationService.success('Order placed successfully!');
      this.router.navigate(['/checkout/success'], { queryParams: { orderId: order.id } });
    });
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let val = input.value.replace(/\D/g, '').substring(0, 16);
    val = val.replace(/(.{4})/g, '$1 ').trim();
    this.paymentForm.patchValue({ cardNumber: val }, { emitEvent: false });
    input.value = val;
  }

  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    let val = input.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
    this.paymentForm.patchValue({ expiry: val }, { emitEvent: false });
    input.value = val;
  }

  f(form: FormGroup, field: string) { return form.get(field); }
  isInvalid(form: FormGroup, field: string) {
    const c = form.get(field);
    return c?.invalid && c?.touched;
  }
}
