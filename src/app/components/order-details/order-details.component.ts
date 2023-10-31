import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CartItem } from 'src/app/interfaces/CartItem';
import { OrderDetails } from 'src/app/interfaces/order-details';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  CartItems!: OrderDetails[];
  constructor(private orderdetailService: OrderDetailsService) {}

  ngOnInit(): void {
    this.orderdetailService.getAllCartItems().subscribe({
      next: (data) => {
        this.CartItems = data;
      },
      error: (err) => console.log(err),
    });
  }

  decreaseQuantity(item: OrderDetails) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice -= item.recipePrice;
      item.isChanged = true;
    }
  }

  increaseQuantity(item: OrderDetails) {
    item.quantity++;
    item.totalPrice += item.recipePrice;
    item.isChanged = true;
  }

  calculateTotalPrice() {
    return this.CartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  updateCartItem() {
    const updateObservables = this.CartItems.filter(
      (cartItem) => cartItem.isChanged
    ).map((cartItem) => {
      return this.orderdetailService.updateCartItem(cartItem);
    });

    forkJoin(updateObservables).subscribe({
      next: (results) => {
        console.log('All cart items updated successfully');
      },
      error: (error) => {
        console.error('Error updating cart items:', error);
      },
    });
  }
}
