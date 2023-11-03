import jwtDecode from 'jwt-decode';
import { OrderUserDetailsService } from 'src/app/services/order-user-details.service';
import { getCookie } from 'typescript-cookie';

import { Component, Input, OnInit } from '@angular/core';
import { CartItemsOrder } from 'src/app/interfaces/cart-items-order';
import { CartitemService } from 'src/app/services/cartitem.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-order-user-details',
  templateUrl: './order-user-details.component.html',
  styleUrls: ['./order-user-details.component.css'],
})

export class OrderUserDetailsComponent implements OnInit {
  @Input() orderId!: number;
  @Input() orderStatus!: string;
  @Input() totalOrderDetials!: number
  userName: string = '';

  cartItems!: CartItemsOrder[];
  constructor(private cartItemService: CartitemService, private route: ActivatedRoute){
    console.log(route.snapshot.params["id"])

    
        let jsonTokenWithoutDecode: any = getCookie('User');
    let tokenDecoded: any = jwtDecode(jsonTokenWithoutDecode);
    this.userName =
      tokenDecoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];

  }


  ngOnInit(): void {
    this.cartItemService.getOrderDetails(this.orderId).subscribe({
      next: data => this.cartItems = data
    })
  }
}
