import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    const todayIndex = new Date().getDay(); 
    const listItems = document.querySelectorAll('.opening-hours li');

    if (listItems && listItems.length > todayIndex) {
      listItems[todayIndex].classList.add('today');
    }
  }
}


