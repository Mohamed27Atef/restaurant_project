import { Component } from '@angular/core';
import { CartService  } from 'src/app/services/service-cart';
import { CartItem } from 'src/app/interfaces/CartItem';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: any[] = [];
  constructor(private cartService: CartService) {}

  isOpen = false;

  ngOnInit() {
    this.cartService.isCartOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
    this.cartItems = this.cartService.getCartItems();
  }
    removeFromCart(item: CartItem) {
      this.cartService.removeFromCart(item);
    }

    getTotalItems(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  }

