import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private myService: OrdersService) {
    let user = getCookie('User');
    console.log(user);
  }
  ngOnInit(): void {
    this.myService.GetOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
    });
  }
}
