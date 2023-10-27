import { Component, EventEmitter, Output } from '@angular/core';
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
  emailError: string = '';
  passwordError: string = '';
  emailOrPasswordError: string = '';

  @Output() clickEvent = new EventEmitter<void>();

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
        this.clickEvent.emit();
        console.log(token);
      },
      error: (errorMassage) => {
        if (errorMassage) {
          console.log(errorMassage);
          if (this.email == '') {
            this.emailError = 'Email is required.';
          }
          if (this.password == '') {
            this.passwordError = 'Password is required.';
          }
          if ((this.email && this.password) != '') {
            this.emailOrPasswordError = 'Email Or Password Is Incorrect';
          }
        }
      },
    });
  }
}
