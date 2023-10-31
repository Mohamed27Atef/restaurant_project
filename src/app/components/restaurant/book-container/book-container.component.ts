import { Component } from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  showSecondForm = false;
  handleChangeDataEvent() {
    this.showSecondForm =true;
  } 
  handlesubmitSecond(){
    this.showSecondForm =false;  
  }
  handleBack(){
    this.showSecondForm =false;  
  }
}
