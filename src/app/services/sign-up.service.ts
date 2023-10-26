import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private myClient: HttpClient) {}
  private DB_URL = 'https://localhost:7058/api/Account/register';

  register(registerData: any) {
    return this.myClient.post(this.DB_URL, registerData);
  }
}
