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
      next: (data) => {
        this.orders = data;
        for (let i = 0; i < this.orders.length; i++) {
          const status = this.orders[i].status;
          switch (status) {
            case 'processed':
              this.statusColor = 'bg-primary';
              break;
            case 'shipped':
              this.statusColor = 'bg-warning';
              break;
            case 'enRoute':
              this.statusColor = 'bg-info';
              break;
            case 'arrived':
              this.statusColor = 'bg-success';
              break;
            case 'Canceled':
              this.statusColor = 'bg-danger';
              break;
            default:
              this.statusColor = 'bg-Light';
              break;
          }
        }
        console.log(this.orders);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
