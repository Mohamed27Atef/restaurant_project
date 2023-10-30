import { Component,Output,EventEmitter } from '@angular/core';
import { Table } from 'src/app/interfaces/table';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
 // tables:Table[] = [];
 tables:Table[]=[{id:1,name:"solo",capacity:1},{id:2,name:"family",capacity:5}]
 @Output() submitSecond = new EventEmitter<void>();
 @Output() backdata = new EventEmitter<void>();
 restaurants:string[]=["abo tarek","el alamia","zizo natana"]
 performAction() {
   this.submitSecond.emit();
 }
 Back(){
  this.backdata.emit();
 }
}
