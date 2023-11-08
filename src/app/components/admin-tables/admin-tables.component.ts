import { Component } from '@angular/core';
import { AdminTable } from 'src/app/interfaces/admin-table';
import { AdminReservationsService } from 'src/app/services/admin-reservations.service';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
  styleUrls: ['./admin-tables.component.css']
})
export class AdminTablesComponent {
reservations:AdminTable[]=[] 
filteredReservations: AdminTable[] = [];

filterTableId: string = "";
filterCustomerName: string = "";
filterDate: string = "";

constructor(private _AdminReservationsService :AdminReservationsService ){}
ngOnInit(){
  this._AdminReservationsService .GetReservationsByRestaurantId().subscribe((data)=>{
    this.reservations=data
    this.filteredReservations = data;
    console.log(data)
  }) 
}


applyFilters() {
  this.filteredReservations = this.reservations.filter((reservation) => {
    const tableIdMatch = this.filterTableId === "" || reservation.tableNumber.toString() === this.filterTableId;
    const customerMatch = this.filterCustomerName === "" || reservation.customerName.toLowerCase().includes(this.filterCustomerName.toLowerCase());
    const dateMatch = this.filterDate === "" || reservation.dateTime.toLowerCase().includes(this.filterDate.toLowerCase());
    return tableIdMatch && customerMatch && dateMatch;
  });
}

placeholderText: string = 'Default Placeholder';

onFocus() {
  this.placeholderText = 'Custom Placeholder';
}

onBlur() {
  this.placeholderText = 'Default Placeholder';
}


}
