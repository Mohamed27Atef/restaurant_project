import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartItems: any[];

  constructor(private cartService: ShoppingCartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  incrementItem(item: any) {

    this.cartService.incrementCartItem(item);
  }

  decrementItem(item: any) {
    this.cartService.decrementCartItem(item);
  }

  calculateTotalPrice(): number {
    return this.cartService.calculateTotalPrice();
  }
}

