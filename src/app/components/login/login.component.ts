import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private myServices: LoginService) {}
  email: any = '';
  password: any = '';

  signIn() {
    let loginData: any = {
      email: this.email,
      password: this.password,
    };

    this.myServices.login(loginData).subscribe({
      next: (loginResponse: any) => {
        let token: any = jwtDecode(loginResponse.token);
        let tokenExpiration: any = new Date(loginResponse.expiration);
        setCookie('User', token, {
          expires: tokenExpiration,
          path: '',
        });
      },
      error: (errorMassage) => {
        if (errorMassage) {
          console.log(errorMassage);
        }
      },
    });
  }
}
