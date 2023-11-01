import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CoponService {
  private apiPort = environment.apiPort;
  private DB_URL = `https://localhost:${this.apiPort}/api/Copon`;
  constructor(private myClient: HttpClient) {}

  getCoponByName(name: string) {
    return this.myClient.get(this.DB_URL + '?name=' + name);
  }
}
