import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  isCartVisible: boolean = false;
  totalPrice: number = 0;
  cartItems: any[] = [];

  constructor(private cartService: ShoppingCartService, private router: Router, private el: ElementRef, private renderer: Renderer2) { }

  increaseQuantity(item: any) {
    item.quantity++;
    this.updatePrice();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updatePrice();
    }
  }

  updatePrice() {
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }

  closeCart() {
    this.isCartVisible = false;
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.updatePrice();
    });
  }

  goToCartPage() {
    this.router.navigate(['/cart']);
  }

  toggleCart() {
    this.cartService.toggleCartVisibility();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }


  clearCart() {
    this.cartService.emptyCart();
  }
}

