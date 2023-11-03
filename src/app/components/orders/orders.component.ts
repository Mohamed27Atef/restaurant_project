import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { OrdersService } from 'src/app/services/orders.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private myService: OrdersService) {}
  ngOnInit(): void {
    this.myService.GetOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
