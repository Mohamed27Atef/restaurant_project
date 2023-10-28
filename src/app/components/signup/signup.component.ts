import { Component, EventEmitter, Output } from '@angular/core';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private myService: SignUpService) {}

  firstName: any = '';
  LastName: any = '';
  email: any = null;
  password: any = '';
  confirmPassword: any = '';
  firstNameError: any;
  LastNameError: any;
  emailError: any;
  passwordError: any;
  confirmPasswordError: any;

  @Output() clickEvent = new EventEmitter<void>();
  registerCheck: boolean = false;
  checkboxError: boolean = false;
  signUp() {
    let signUpData: any = {
      firstName: this.firstName,
      lastName: this.LastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phone: '63010714182',
      address: 'string',
    };
    if (!this.registerCheck) {
      this.checkboxError = true; // Apply the red border
    } else {
      this.checkboxError = false; // Remove the red border
    }
    this.myService.register(signUpData).subscribe({
      next: () => {
        console.log('Success Sign Up');
        this.clickEvent.emit();
      },
      error: (errorMassage) => {
        console.log(errorMassage);
        this.firstNameError =
          this.firstName == ''
            ? 'First Name is required.'
            : errorMassage.error.errors.FirstName;
        this.LastNameError =
          this.LastName == ''
            ? 'Last Name is required.'
            : errorMassage.error.errors.LastName;
        this.emailError =
          this.email == null
            ? 'Email is required.'
            : errorMassage.error.errors.Email[0];
        this.passwordError =
          this.password == ''
            ? 'Password is required.'
            : errorMassage.error.errors.Password;
        this.confirmPasswordError =
          this.confirmPassword == ''
            ? 'Confirm Password is required.'
            : errorMassage.error.errors.ConfirmPassword;
        console.log(errorMassage.error.errors.Email[0]);
      },
    });
  }
}
