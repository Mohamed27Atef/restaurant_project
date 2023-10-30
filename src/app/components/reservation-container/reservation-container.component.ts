import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-container',
  templateUrl: './reservation-container.component.html',
  styleUrls: ['./reservation-container.component.css']
})
export class ReservationContainerComponent {
  showFirstForm = true;
  showSecondForm = false;
  handleChangeDataEvent() {
    this.showFirstForm = false;
    this.showSecondForm =true;
  }
  handlesubmitSecond(){
    this.showFirstForm = true;
    this.showSecondForm =false;  
  }
  handleBack(){
    this.showFirstForm = false;
    this.showSecondForm =true;  
  }
}
