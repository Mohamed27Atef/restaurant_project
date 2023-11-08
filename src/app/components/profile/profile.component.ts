import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service.service';
import {UserProfile} from 'src/app/interfaces/Profile';
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



  userId:string='';
  userName: string = ''; // Add initial values if needed
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  Location: string = '';
  phoneNumber: string = '';


  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    // Fetch user data and pre-fill the form
    this.fetchUserProfile();
  }

  // Fetch user profile data
  fetchUserProfile() {
    // Make an API call to fetch user profile data and populate the form fields
    this.profileService.getUserProfile().subscribe((profile: UserProfile) => {
      this.userId = profile.userId;
      this.userName = profile.userName;
      this.firstName = profile.firstName;
      this.lastName = profile.lastName;
      this.email = profile.email;
      this.Location = profile.location;
      this.phoneNumber = profile.phoneNumber;
      this.profileImageSrc = profile.profileImage;
    });
  }

  // Save changes
  saveChanges() {
    const updatedProfile: UserProfile = {
      userId: this.userId,
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      location: this.Location,
      phoneNumber: this.phoneNumber,
      profileImage: this.profileImageSrc,
    };

    // Make an API call to update the user's profile
    this.profileService.updateUserProfile(updatedProfile).subscribe(() => {
      alert('Profile updated successfully');
    });
  }
  
  openProfileSecurity() {
    this.profile = false;
    this.profileSecurity = true;
  }
  profileImageSrc: string = '../../../assets/images/user.png';

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
