import { Component } from '@angular/core';
import { CartItem } from 'src/app/interfaces/CartItem';

@Component({
  selector: 'app-cart-items-page',
  templateUrl: './cart-items-page.component.html',
  styleUrls: ['./cart-items-page.component.css']
})
export class CartItemsPageComponent {
  cartProducts: CartItem[] = [];
  increaseQuantity(product: CartItem) {
    const selectedProduct = this.cartProducts.find((p) => p.id === product.id);

    if (selectedProduct) {
      selectedProduct.quantity++;
    }
  }
  decreaseQuantity(product: CartItem) {
    const selectedProduct = this.cartProducts.find((p) => p.id === product.id);

    if (selectedProduct) {
      if (selectedProduct.quantity > 0) {
        selectedProduct.quantity--;
      }
    }
  }
  getTotalNumberOfProducts() {
    let total = 0;

    for (const product of this.cartProducts) {
      total += product.quantity;
    }

    return total;
  }
  getTotalPrice() {
    let total = 0;

    for (const product of this.cartProducts) {
      total += product.price * product.quantity;
    }

    return total;
  }
  }

