import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
    })
export class ShoppingCartComponent {
  constructor(private cartService: ShoppingCartService,private router: Router) {}
  isCartVisible: boolean = false;

  getCartItems() {
    return this.cartService.getCartItems();
  }
  calculateTotalPrice(): number {
    const items = this.getCartItems();
    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    return total;
  }
  emptyCart() {
    this.cartService.cartItems = [];
  }
  goToCartPage() {
    this.router.navigate(['/cart']);
  }
  toggleCart() {
    this.cartService.toggleCartVisibility();
  }
}

