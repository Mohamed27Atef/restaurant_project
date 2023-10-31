import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from './services/ShoppingCart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant_project';
  constructor(private cartService: ShoppingCartService,private http: HttpClient) {}
  ngOnInit() {
    const product1 = {
      name: 'Name',
      price: 19.99,
      image: 'assets/images/1.jpeg',
      quantity: 1,
      retsurantName:'returant',
      retsurantId:'2'
    };

    const product2 = {
      name: 'Product 2',
      price: 24.99,
      image: 'assets/images/2.jpeg',
      quantity: 1,
      retsurantName:'resturant',
      retsurantId:'2'
    };
    this.cartService.addItemToCart(product1);
    this.cartService.addItemToCart(product2);
    this.cartService.addItemToCart(product2);
  }
}
//here




// ngOnInit() {

//   this.http.get('YOUR_API_ENDPOINT').subscribe((data: any) => {

//     if (Array.isArray(data)) {

//       data.forEach((product: any) => {
//         this.cartService.addItemToCart(product);
//       });
//     }
//   });
// }
