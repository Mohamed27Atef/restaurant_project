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
  @Output() userName: any = new EventEmitter();

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
        let JsonToken = JSON.stringify(token);
        setCookie('User', JsonToken, {
          expires: tokenExpiration,
          path: '',
        });
        console.log(JsonToken);
        this.clickEvent.emit();
        this.userName.emit(true);
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
