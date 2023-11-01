import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl: string = 'https://localhost:44397/api/Menu/';

  constructor(private httpClient: HttpClient) { }
  getMenuByRestaurnatId(restaurantId: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + restaurantId);
  }

  getMostRated(restaurantId: number): Observable<any>{
    return this.httpClient.get(this.baseUrl + "getmostRatedRecipe/" + restaurantId);
  }

}
