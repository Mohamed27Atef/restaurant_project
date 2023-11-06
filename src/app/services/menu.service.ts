import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Menu } from '../interfaces/menu';
import { getCookie } from 'typescript-cookie';

const JsonToken = getCookie('User');
const token = JsonToken != undefined ? JSON.parse(JsonToken) : null;

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
});

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiPort = environment.apiPort;
  baseUrl: string = `https://localhost:${this.apiPort}/api/Menu/`;

  constructor(private httpClient: HttpClient) {}

  createMenu(menu: Menu): Observable<any> {
    return this.httpClient.post(this.baseUrl, menu, {
      headers: headers,
    });
  }

  getMenu(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getMenuByRestaurnatId(restaurantId: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + restaurantId);
  }

  getMostRated(restaurantId: number): Observable<any> {
    return this.httpClient.get(
      this.baseUrl + 'getmostRatedRecipe/' + restaurantId
    );
  }
}
