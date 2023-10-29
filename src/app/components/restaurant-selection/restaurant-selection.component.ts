import { Component,Output,EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';
@Component({
  selector: 'app-restaurant-selection',
  templateUrl: './restaurant-selection.component.html',
  styleUrls: ['./restaurant-selection.component.css']
})
export class RestaurantSelectionComponent {
  @Output() changeDataEvent = new EventEmitter<void>();
  //restaurants: Restaurant[] = [];
  restaurants:string[]=["abo tarek","el alamia","zizo natana"]
  performAction() {
    this.changeDataEvent.emit();
  }

}
