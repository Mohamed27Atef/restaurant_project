import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgxStarRatingModule } from 'ngx-star-rating-latest';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SliderComponent } from './components/slider/slider.component';
import { RestaurantOrdersComponent } from './components/restaurant-orders/restaurant-orders.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ImagesComponent } from './components/restaurant/images/images.component';
import { InfoComponent } from './components/restaurant/info/info.component';
import { OffersComponent } from './components/restaurant/offers/offers.component';
import { ReservationsComponent } from './components/restaurant/reservations/reservations.component';
import { ContactComponent } from './components/restaurant/contact/contact.component';
import { MenuComponent } from './components/restaurant/menu/menu.component';


import { RestaurantOwlCarouselComponent } from './components/restaurant-owl-carousel/restaurant-owl-carousel.component';

import { GetLocationComponent } from './components/get-location/get-location.component';
import { FAQComponent } from './components/faq/faq.component';

import { SerchRetaurantComponent } from './components/serch-retaurant/serch-retaurant.component';
import { ShoppingCartService } from 'src/app/services/ShoppingCart.service';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { RouterModule } from '@angular/router';
import { CartService } from './services/service-cart';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { StepsComponent } from './components/steps/steps.component';

import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { ReservationContainerComponent } from './components/reservation-container/reservation-container.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { RestaurantSelectionComponent } from './components/restaurant-selection/restaurant-selection.component';
import { TableService } from './services/table.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    RecipeDetailsComponent,
    OrderDetailsComponent,
    ShoppingCartComponent,
    LoginComponent,
    SignupComponent,
    FeedbackComponent,
    SliderComponent,
    RestaurantOrdersComponent,
    NavbarComponent,
    MostPopularComponent,
    SearchComponent,
    RestaurantComponent,
    ImagesComponent,
    InfoComponent,
    OffersComponent,
    ReservationsComponent,
    ContactComponent,
    MenuComponent,
    RestaurantOwlCarouselComponent,
    GetLocationComponent,
    FAQComponent,
    SerchRetaurantComponent,
    CartPageComponent,

    CartItemComponent,
    StepsComponent,

    CartItemsComponent,
    ReservationContainerComponent,
    ReservationFormComponent,
    RestaurantSelectionComponent,
  



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    CarouselModule,
    RouterModule,
    SidebarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
