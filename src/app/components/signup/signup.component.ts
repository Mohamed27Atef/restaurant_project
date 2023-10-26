import { ReadPropExpr } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('login') login!: ElementRef;

  signUp() {
    let signUpData: any = {
      firstName: this.firstName,
      lastName: this.LastName,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword,
    };
    this.myService.register(signUpData).subscribe({
      next: () => {
        this.login.nativeElement.click();
      },
      error: (errorMassage) => {
        console.log(errorMassage);
      },
    });
  }
}
