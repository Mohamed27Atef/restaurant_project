import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderForAdmin } from 'src/app/interfaces/order-for-admin';
import { OrderItems } from 'src/app/interfaces/order-items';
import { AdminOrderService } from 'src/app/services/admin-order.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent {
  @Input() orderObj:any;
  @Input() status:string="";
 restaurantId:number=1;
  @Output() backdata = new EventEmitter<void>();
  
  orderItems:OrderItems[]=[]

  constructor(private _AdminOrderService:AdminOrderService){}

  ngOnInit(){
    console.log(this.restaurantId)
    this._AdminOrderService.GetCartItemsbyOrderId(this.orderObj.orderId,this.restaurantId).subscribe((data)=>{
      this. orderItems=data
      console.log(data)
    }) 
  }

  Back(){
    this.backdata.emit();
   }
}
