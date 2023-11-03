import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { OrderUserDetailsService } from 'src/app/services/order-user-details.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-order-user-details',
  templateUrl: './order-user-details.component.html',
  styleUrls: ['./order-user-details.component.css'],
})
export class OrderUserDetailsComponent {
  constructor(private myService: OrderUserDetailsService) {
    let jsonTokenWithoutDecode: any = getCookie('User');
    let tokenDecoded: any = jwtDecode(jsonTokenWithoutDecode);
    this.userName =
      tokenDecoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
  }
  userName: string = '';
}
