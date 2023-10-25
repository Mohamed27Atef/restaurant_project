import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit(): void {
    // You can implement form validation and submission logic here
    // For this example, we'll log the data to the console
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Subject:', this.subject);
    console.log('Message:', this.message);
  }
}
