import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("search") searchComponent! : SearchComponent;
  
  
  
  
  ngOnInit(): void {
    console.log(this.searchComponent.category_id);
  }



}
