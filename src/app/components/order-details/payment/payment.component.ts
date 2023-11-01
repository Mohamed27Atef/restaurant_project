import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/interfaces/order-details';
import { OrderdAddress } from 'src/app/interfaces/orderd-address';
import { CreateorderService } from 'src/app/services/createorder.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  street: string = '';
  city: string = '';
  country: string = '';

  orderAddress: OrderdAddress = {
    street: '123 Main St',
    city: 'Example City',
    country: 'Example Country',
    TotalPrice: 100.0, // Replace with the actual value
  };

  CartItemSumary!: OrderDetails[];

  constructor(
    private orderdetailService: OrderDetailsService,
    private createorder: CreateorderService
  ) {
    this.orderdetailService.getAllCartItems().subscribe({
      next: (data) => {
        console.log(data);
        this.CartItemSumary = data;

        console.log(this.CartItemSumary);
      },
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {
    // this.orderdetailService.getAllCartItems().subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.CartItemSumary = data;
    //     console.log(this.CartItemSumary);
    //   },
    //   error: (err) => console.log(err),
    // });
  }

  calculateTotalPrice() {
    return this.CartItemSumary.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
  }

  makeOrder() {
    this.orderAddress.street = this.street;
    this.orderAddress.city = this.city;
    this.orderAddress.country = this.country;
    this.orderAddress.TotalPrice = this.calculateTotalPrice();
    this.createorder.postCartItem(this.orderAddress).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }
}
