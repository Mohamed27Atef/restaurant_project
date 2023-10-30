import { Component } from '@angular/core';
import { CartItem } from 'src/app/interfaces/CartItem';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartItems: CartItem[];

  constructor(private cartService: ShoppingCartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  incrementItem(item: CartItem) {

    this.cartService.incrementCartItem(item);
  }

  decrementItem(item: CartItem) {
    this.cartService.decrementCartItem(item);
  }

  calculateTotalPrice(): number {
    return this.cartService.calculateTotalPrice();
  }
}

