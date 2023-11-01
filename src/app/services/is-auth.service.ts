import { Injectable } from '@angular/core';
import { getCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {
  public isAuth: boolean = false;
  constructor() {
    if(!this.isAuth)
      if(getCookie('User'))
      this.isAuth = true;
   }
}
