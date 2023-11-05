import { Component, EventEmitter, Output } from '@angular/core';
import { OrderForAdmin } from 'src/app/interfaces/order-for-admin';
import { AdminOrderService } from 'src/app/services/admin-order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders:OrderForAdmin[] = [];

  restaurantId:number=1;
  status:string[]=[ "processed","shipped","enRoute","arrived","Canceled"]
 
  @Output() changeDataEvent = new EventEmitter<any>();
 
  constructor(private _AdminOrderService:AdminOrderService){}

  ngOnInit(){ 
    this._AdminOrderService.GetOrdersByRestaurantId(this.restaurantId).subscribe((data)=>{
      this.orders=data
      console.log(data)
    }) 
  }


  detailsAction(orderWithstatus:any[]){
    this.changeDataEvent.emit(orderWithstatus);
    
  }
  onSelectionChange(selection: [string, number]){
    const selectedValue = selection[0];
    console.log(selectedValue)
    const orderId = selection[1];
    console.log(orderId)
    this._AdminOrderService.updateOrderStatusByOrderId(orderId,selectedValue).subscribe({
      next:(Response)=>console.log(Response),
      error:(err)=>console.log(err)
    })
  }
}
