import { Component, EventEmitter, Output } from '@angular/core';
import { UserTableServicesService } from 'src/app/services/user-table.service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css'],
})
export class SearchTableComponent {
  restaurantNumber: string = '';
  restaurantName: string = '';
  searchDate: string = '';
  reservationResult: any[] = [];
  @Output() myEvent = new EventEmitter();

  constructor(private userTableService: UserTableServicesService) {
    this.userTableService.getAllUserReservation().subscribe({
      next: (data) => {
        this.reservationResult = data;
        this.myEvent.emit(this.reservationResult);
      },
      error: (err) => console.log(err),
    });
  }
  searchByRestaurantNumber() {
    console.log('Searching for restaurant number: ' + this.restaurantNumber);
    this.reservationResult = [];
    this.userTableService.getAllUserReservation().subscribe({
      next: (data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].tableNumber == this.restaurantNumber)
            this.reservationResult.push(data[i]);
        }
        this.myEvent.emit(this.reservationResult);
      },
      error: (err) => console.log(err),
    });
  }
  searchByRestaurantName() {
    this.reservationResult = [];
    this.userTableService.getAllUserReservation().subscribe({
      next: (data) => {
        let name = ` ِ${this.restaurantName}`;
        for (let i = 0; i < data.length; i++) {
          console.log(
            ' data[i].restaurantName ' + data[i].restaurantName.slice(1)
          );
          console.log(' data[i].restaurantName ' + this.restaurantName);
          const originalString = this.restaurantName;
          if (data[i].restaurantName.slice(1) === this.restaurantName)
            this.reservationResult.push(data[i]);
        }
        this.myEvent.emit(this.reservationResult);
      },
      error: (err) => console.log(err),
    });
  }
  searchByDate() {
    console.log('Searching for restaurant number: ' + this.searchDate);
    this.reservationResult = [];
    this.userTableService.getAllUserReservation().subscribe({
      next: (data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].dateTime.split('T')[0] == this.searchDate)
            this.reservationResult.push(data[i]);
        }
        this.myEvent.emit(this.reservationResult);
      },
      error: (err) => console.log(err),
    });
  }
}