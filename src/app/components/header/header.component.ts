//here
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';
import { Observable,of } from 'rxjs';

import { Block } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  HostListener,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { getCookie, removeCookie } from 'typescript-cookie';
import jwtDecode from 'jwt-decode';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

  cartItems$: Observable<any[]>; // Change this to an Observable
 
export class HeaderComponent{
 totalPrice: number = 0;
  myroute!: string;
  jsonTokenWithoutDecode!: any;

  constructor(private cartService: ShoppingCartService, public route:Router) {
    this.jsonTokenWithoutDecode = getCookie('User');
    try {
      let Token: any = jwtDecode(this.jsonTokenWithoutDecode);
      this.name =
        Token != null
          ? Token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
          : '';
    } catch (error) {
      // console.error('Error decoding JWT:', error);
    }
  }
  isCartVisible: boolean = false;

  @ViewChild('cart') cart!: ElementRef;
  @HostListener('document:click', ['$event'])
  clickOutsideCart(event: Event) {
    if (!this.cart.nativeElement.contains(event.target) && this.isCartVisible) {
      this.isCartVisible = false;
    }
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
    if (this.isCartVisible) {
      this.cartService.getCartItems().subscribe((items) => {
        this.cartItems$ = of(items);
        this.updateTotalPrice();
      });
    }
  }
  updateTotalPrice() {
    this.cartItems$.subscribe((items) => {
      this.totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    });
  }
  navbarCollapsed = true;
  toggalClass = 'navbar-toggler navbar-toggler-right';
  divClass = 'collapse navbar-collapse';

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

  name: string = '';

  userName(name: string) {
    this.name = name;
  }

  toggleLogoutButton(event: Event) {
    if (this.name != '') {
      event.preventDefault();
      const logOutButton = document.getElementById('logOut');
      if (logOutButton) {
        logOutButton.classList.toggle('hidden');
        if (window.innerWidth <= 768) {
          logOutButton.style.top = logOutButton.classList.contains('hidden')
            ? '260px'
            : '275px';
        } else {
          logOutButton.style.top = logOutButton.classList.contains('hidden')
            ? '-60px'
            : '75px';
        }
      }
    }
  }

  LogOut() {
    this.name = '';
    removeCookie('User');
  }

  clearLink(){
    this.myroute = this.route.url.split("#")[0];
    
  }
}
