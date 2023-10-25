import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private BaseUrl: string = 'https://localhost:44397/api/Resturant/';

  constructor(private httpClient : HttpClient) { }

  getRestaurantByCategoryId(categoryId: number) : Observable<any> {
    return this.httpClient.get(this.BaseUrl + "getByCategory/" + categoryId);
  }
  searchRestaurantByName(name: string) : Observable<any> {
    return this.httpClient.get(this.BaseUrl + "getByName/" + name);
  }
}
