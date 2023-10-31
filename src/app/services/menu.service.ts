import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiPort = environment.apiPort;
  baseUrl: string = `https://localhost:${this.apiPort}/api/Menu/`;

  constructor(private httpClient: HttpClient) {}
  getMenuByRestaurnatId(restaurantId: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + restaurantId);
  }
}
