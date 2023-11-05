import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

import { UserOrders } from 'src/app/interfaces/user-orders';

import { OrdersService } from 'src/app/services/orders.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders!: UserOrders[];
  statusColor: string = 'bg-success';

  constructor(private myService: OrdersService) {
    let user = getCookie('User');
  }
  ngOnInit(): void {
    this.myService.getUserOrder().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.log(err),
    });
  }


  getSatausColor(status: string) {
    switch (status) {
      case 'processed':
       return 'bg-primary';
      case 'shipped':
       return 'bg-warning';
      case 'enRoute':
       return 'bg-info';
      case 'arrived':
       return 'bg-success';
      case 'Canceled':
       return 'bg-danger';
      default:
       return 'bg-Light';
    }
  }
}
