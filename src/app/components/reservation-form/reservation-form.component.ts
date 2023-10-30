import { Component,Output,EventEmitter,Input, OnInit } from '@angular/core';
import { Table } from 'src/app/interfaces/table';
import { TableService } from 'src/app/services/table.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { error } from 'jquery';
@Component({ 
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  tables:Table[] = [];
 @Input() RestaurantId:number=1;
 @Output() submitSecond = new EventEmitter<void>();
 @Output() backdata = new EventEmitter<void>();

 //tables:Table[]=[{id:1,name:"solo",capacity:1},{id:2,name:"family",capacity:5}]


 constructor(private _TableService:TableService){
  
 }
  ngOnInit(): void {
   this._TableService.getTableByRestaurantId(this.RestaurantId).subscribe((data)=>{
      this.tables=data
    }) 
  }


reservationForm:FormGroup=new FormGroup({
  firstName:new FormControl(null,[Validators.required,Validators.minLength(3)]), 
  lastName:new FormControl(null,[Validators.required,Validators.minLength(3)]), 
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]), 
  date:new FormControl(null,[Validators.required]), 
  time:new FormControl(null,[Validators.required]), 
  tableType:new FormControl(null,[Validators.required])
})


 performAction() {
  const reservationData = {
   dateTime:new Date(`${this.reservationForm.value.date}T${this.reservationForm.value.time}`).toISOString(),
    restaurantId:this.RestaurantId ,
    tableType: this.reservationForm.value.tableType,
    name: this.reservationForm.value.firstName + ' ' + this.reservationForm.value.lastName,
    phone: this.reservationForm.value.phone
  };
  this._TableService.reserveTable(reservationData).subscribe({
    next:(Response)=>console.log(Response),
    error:(err)=>console.log(err)
  })
   this.submitSecond.emit();
 }

 getTableType(tableType:string):string{
  return this._TableService.getTableType(tableType)
 }

 Back(){
  this.backdata.emit();
 }
}
