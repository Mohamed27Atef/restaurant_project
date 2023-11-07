import { Component } from '@angular/core';
import { setCookie } from 'typescript-cookie';

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
  profileImageSrc: string = '../../../assets/images/user2.png';

  onImageSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (file.size <= 5242880) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.profileImageSrc = e.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert('File size exceeds 5 MB. Please choose a smaller image.');
      }
    }
  }
}
