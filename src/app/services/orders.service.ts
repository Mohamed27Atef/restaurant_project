import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private myClient: HttpClient) {}
  private apiPort = environment.apiPort;

  private DB_URL = `https://localhost:${this.apiPort}/api/Order`;

  GetOrders() {
    return this.myClient.get(this.DB_URL);
  }
}
