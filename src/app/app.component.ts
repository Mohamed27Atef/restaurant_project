import { Component } from '@angular/core';
import Isotope from 'isotope-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant_project';
  cartItems: any[];

  constructor() {
    this.cartItems = [
      {
        name: 'Product 1',
        description: 'Description 1',
        price: 19.99,
        image: '/assets/TaskDay3/1.jpg',
        quantity: 1, // Initial quantity
      },
      {
        name: 'Product 2',
        description: 'Description 2',
        price: 24.99,
        image: '/assets/TaskDay3/2.jpg',
        quantity: 1, // Initial quantity
      },
    ];
  }
}
