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
  }
}
