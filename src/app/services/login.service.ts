import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private myClient: HttpClient) {}
  private DB_URL = 'https://localhost:7058/api/Account/LogIn';

  login(loginData: any) {
    return this.myClient.post(this.DB_URL, loginData);
  }
}
