import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PaymentComponent } from './components/order-details/payment/payment.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { UserTableServicesService } from './services/user-table.service';
import { TableReservationComponent } from './components/restaurant/table-reservation/table-reservation.component';
import { ReserveTableComponent } from './components/reserve-table/reserve-table.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: '', component: HomeComponent },
  { path: 'test', component: RecipeComponent },
  { path: 'userTableReservation', component: ReserveTableComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'orderDetials', component: OrderDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
