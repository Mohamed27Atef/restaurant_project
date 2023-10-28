
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';

import { Block } from '@angular/compiler';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { getCookie } from 'typescript-cookie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
    if (this.navbarCollapsed) {
      this.divClass = 'collapse navbar-collapse';
      this.toggalClass = 'navbar-toggler navbar-toggler-right';
      this.toggalClass = 'navbar-toggler collapsed';
    } else {
      this.toggalClass = 'navbar-toggler collapsed';
      this.divClass = 'collapse navbar-collapse show';
    }
  }
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('goToLogin') goToLogin!: ElementRef;

  closeModalClick() {
    this.closeModal.nativeElement.click();
  }
  goToLoginClick() {
    this.goToLogin.nativeElement.click();
  }
  JsonToken: any = getCookie('User');

  Token: any = this.JsonToken != undefined ? JSON.parse(this.JsonToken) : null;
  name: any =
    this.Token != null
      ? this.Token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
      : '';
  logOutButton = document.getElementById('logOut');
  userIcon() {
    if (this.name != '') {
      console.log(this.userIcon);
      // this.logOutButton?.style.display = 'Block';
    }
  }
}
