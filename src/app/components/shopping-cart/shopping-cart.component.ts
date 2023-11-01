import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/interfaces/CartItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  isCartVisible: boolean = false;
  totalPrice: number = 0;
  cartItems: CartItem[] = [];

  constructor(private cartService: ShoppingCartService, private router: Router, private el: ElementRef, private renderer: Renderer2) { }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.updatePrice(item);
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updatePrice(item);
    }
  }

  updatePrice(item: CartItem) {
    item.totalPrice = item.recipePrice * item.quantity;
    this.updatetotal();
  }

  updatetotal() {
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.totalPrice;
    }
    return total;
  }

  closeCart() {
    this.isCartVisible = false;
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe({
      next: items => {
        this.cartItems = items;
        this.updatetotal();
      }
    })
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

