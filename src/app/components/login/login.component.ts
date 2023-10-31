import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';
import { getCookie, setCookie } from 'typescript-cookie';
import { UserLogin } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private myServices: LoginService) {}
  userLogin: UserLogin = {
    email: '',
    password: '',
  };

  @Output() userName: any = new EventEmitter();

  @Output() clickEvent = new EventEmitter<void>();

  signIn() {
    let loginData: any = {
      email: this.userLogin.email,
      password: this.userLogin.password,
    };
    this.myServices.login(loginData).subscribe({
      next: (loginResponse: any) => {
        let tokenDecoded: any = jwtDecode(loginResponse.token);
        let tokenExpiration: any = new Date(loginResponse.expiration);
        let jsonTokenWithoutDecode = JSON.stringify(loginResponse.token);
        setCookie('User', jsonTokenWithoutDecode, {
          expires: tokenExpiration,
          path: '',
        });
        this.clickEvent.emit();
        this.userName.emit(
          tokenDecoded[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
          ]
        );
      },
      error: (errorMassage) => {
        if (errorMassage) {
          console.log(errorMassage);
          if (this.userLogin.email == '') {
            this.userLogin.emailError = 'Email is required.';
          }
          if (this.userLogin.password == '') {
            this.userLogin.passwordError = 'Password is required.';
          }
          if ((this.userLogin.email && this.userLogin.password) != '') {
            this.userLogin.emailOrPasswordError =
              'Email Or Password Is Incorrect';
          }
        }
      },
    });
  }

  togglePasswordVisibility() {
    this.userLogin.passwordVisible = !this.userLogin.passwordVisible;
  }
}
