import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profile: boolean = true;
  profileSecurity: boolean = false;
  openProfile() {
    this.profile = true;
    this.profileSecurity = false;
  }
  openProfileSecurity() {
    this.profile = false;
    this.profileSecurity = true;
  }
}
