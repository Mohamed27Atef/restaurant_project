import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  CartItemSumary!: any[];
  constructor(private orderdetailService: OrderDetailsService) {}

  ngOnInit(): void {
    this.orderdetailService.getAllCartItems().subscribe({
      next: (data) => {
        console.log(data);
        this.CartItemSumary = data;

        console.log(this.CartItemSumary);
      },
      error: (err) => console.log(err),
    });
  }

}
