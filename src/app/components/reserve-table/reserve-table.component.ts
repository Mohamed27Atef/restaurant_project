import { Component } from '@angular/core';
import { UserTableServicesService } from 'src/app/services/user-table.service';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.component.html',
  styleUrls: ['./reserve-table.component.css'],
})
export class ReserveTableComponent {
  reservationTable: any[] = [];
  constructor(private userTableService: UserTableServicesService) {}

  getReservation(reservation: any) {
    this.reservationTable = reservation;
  }
}
