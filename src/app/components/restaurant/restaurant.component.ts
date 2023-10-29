import { Component } from '@angular/core';
import { data } from 'isotope-layout';
import { RestaurantInfo } from 'src/app/interfaces/restaurant-info';
import { RestaurantService } from 'src/app/services/restaurant.service';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  currentRestaurant!: RestaurantInfo;
  id: number = 1;
  images!: string[];

  constructor(private restaurantService: RestaurantService){
    this.restaurantService.getRestaurantById(this.id).subscribe({
      next: data => {this.currentRestaurant = data;console.log(data)}
    })
    this.restaurantService.getRestaurantImages(this.id).subscribe({
      next: data => this.images = data
    })
  }


}
