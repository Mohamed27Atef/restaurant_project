import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product: any;
  decreaseQuantity() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
      this.updatePrice();
    }
  }

  increaseQuantity() {
    this.product.quantity++;
    this.updatePrice();
  }

  updatePrice() {
    // Calculate the price based on the quantity (you can implement your logic)
    this.product.price = this.product.quantity * 19.99; // Example calculation
  }
}
