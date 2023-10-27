import { ReadPropExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private myService: SignUpService) {}

  firstName: any;
  LastName: any;
  email: any;
  password: any;
  repeatPassword: any;

  signUp() {
    let signUpData: any = {
      firstName: this.firstName,
      lastName: this.LastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.repeatPassword,
      phone: '63010714182',
      address: 'string',
    };
    this.myService.register(signUpData).subscribe({
      next: () => {
        console.log('Success');
      },
      error: (errorMassage) => {
        console.log(errorMassage);
      },
    });
  }
}
