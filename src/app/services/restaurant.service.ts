import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiPort = environment.apiPort;
  private BaseUrl: string = `https://localhost:${this.apiPort}/api/Resturant`;

  constructor(private httpClient: HttpClient) {}

  createResturant(resturant: Restaurant) {
    return this.httpClient.post(this.BaseUrl, resturant);
  }
  getRestaurantByCategoryId(categoryId: number): Observable<any> {
    return this.httpClient.get(this.BaseUrl + '/getByCategory/' + categoryId);
  }

  searchRestaurantByNameAndCategory(
    name: string,
    categoryId: number
  ): Observable<any> {
    return this.httpClient.get(
      this.BaseUrl + '/search/?q=' + name + '&cat=' + categoryId
    );
  }

  getAllRestaurant(): Observable<any> {
    return this.httpClient.get(this.BaseUrl);
  }
  getRestaurantByName(q: string): Observable<any> {
    return this.httpClient.get(this.BaseUrl + '/search/' + q);
  }

  getRestaurantById(id: number): Observable<any> {
    return this.httpClient.get(this.BaseUrl + '/' + id);
  }

  getRestaurantByLocation(location: string): Observable<any> {
    return this.httpClient.get(this.BaseUrl + '/getByAddress/' + location);
  }

  getRestaurantImages(id: number): Observable<any> {
    return this.httpClient.get(this.BaseUrl + '/getimages/' + id);
  }
}
