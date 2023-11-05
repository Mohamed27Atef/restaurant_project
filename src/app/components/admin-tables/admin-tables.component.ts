import { Component } from '@angular/core';
import { AdminTable } from 'src/app/interfaces/admin-table';
import { AdminReservationsService } from 'src/app/services/admin-reservations.service';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
  styleUrls: ['./admin-tables.component.css']
})
export class AdminTablesComponent {
restaurantId:number=1
reservations:AdminTable[]=[] 
constructor(private _AdminReservationsService :AdminReservationsService ){}
ngOnInit(){
  this._AdminReservationsService .GetReservationsByRestaurantId(this.restaurantId).subscribe((data)=>{
    this.reservations=data
    console.log(data)
  }) 
}

}
