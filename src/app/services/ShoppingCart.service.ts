import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems: any[] = [
    {name: 'test', price: 20},
  ];

  private isCartVisibleSource = new BehaviorSubject<boolean>(false);
  isCartVisible$ = this.isCartVisibleSource.asObservable();
  toggleCartVisibility() {
    this.isCartVisibleSource.next(!this.isCartVisibleSource.value);
  }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  incrementCartItem(item: any) {
    const foundItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    if (foundItem) {
      foundItem.quantity++;
    }
  }

  decrementCartItem(item: any) {
    const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        const index = this.cartItems.indexOf(existingItem);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
    }
  }
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }
}

