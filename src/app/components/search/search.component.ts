import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private categoryService : CategoryService, private RestaurantService: RestaurantService){

  }

  categories!: Category[];
  
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: data => {
        this.categories = data;
      },
      error: err => console.log(err)
    })
   

  }

  SelectCategory(categorySelected : string) {
    this.RestaurantService.getRestaurantByCategoryId(Number(categorySelected)).subscribe({
      next: data => {
        console.log(data)
      },
      error: err => console.log(err)
    })
  }

  searchOfRestaurantByName(name : string) {
    this.RestaurantService.searchRestaurantByName(name).subscribe({
      next: data => {
        console.log(data)
      },
      error: err => console.log(err)
    })
  }

}
