import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/interfaces/Profile';
import {HeaderService} from 'src/app/services/header.service';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiPort = environment.apiPort;
  private baseUrl = `https://localhost:${this.apiPort}/api/Account`;



  constructor(private http: HttpClient,private header:HeaderService) {}

  // Fetch user profile data
  getUserProfile(): Observable<any> {
    const headers=this.header.getHeader();
    console.log(headers);
    return this.http.get(`${this.baseUrl}/get-profile`,{headers});
  }

  // Update user profile
  updateUserProfile(profile: UserProfile): Observable<any> {
    const headers=this.header.getHeader();
    console.log(headers);
    return this.http.put(`${this.baseUrl}/update-profile`, profile,{headers});
  }
}
