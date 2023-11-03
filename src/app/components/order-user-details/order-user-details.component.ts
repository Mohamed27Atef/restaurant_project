import { Component, Input, OnInit } from '@angular/core';
import { CartItemsOrder } from 'src/app/interfaces/cart-items-order';
import { CartitemService } from 'src/app/services/cartitem.service';

@Component({
  selector: 'app-order-user-details',
  templateUrl: './order-user-details.component.html',
  styleUrls: ['./order-user-details.component.css']
})
export class OrderUserDetailsComponent implements OnInit {
  @Input() orderId!: number;
  cartItems!: CartItemsOrder[];
  constructor(private cartItemService: CartitemService){

  }


  ngOnInit(): void {
    this.cartItemService.getOrderDetails(this.orderId).subscribe({
      next: data => this.cartItems = data
    })
  }
}
