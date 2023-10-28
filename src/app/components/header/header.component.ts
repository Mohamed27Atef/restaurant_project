import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private cartService: ShoppingCartService) {}
  isCartVisible: boolean = false;

  toggleCart() {
    console.log('toggleCart called');
    this.isCartVisible = !this.isCartVisible;
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
