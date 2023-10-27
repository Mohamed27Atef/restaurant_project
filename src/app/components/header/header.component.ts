import { Component } from '@angular/core';
import { CartService } from 'src/app/services/service-cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private cartService: CartService) {}

  openCart() {
    this.cartService.toggleCart();
  }
  navbarCollapsed = true;
  toggalClass = "navbar-toggler navbar-toggler-right";
  divClass = "collapse navbar-collapse";

  showToggle() {
    this.navbarCollapsed = !this.navbarCollapsed;
    if(this.navbarCollapsed) {
      this.divClass = "collapse navbar-collapse";
    this.toggalClass = "navbar-toggler navbar-toggler-right";
      this.toggalClass = "navbar-toggler collapsed"
    }else {
      this.toggalClass = "navbar-toggler collapsed"
      this.divClass = "collapse navbar-collapse show"
    }
  }
}
