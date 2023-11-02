import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiPort = environment.apiPort;
  private apiUrl = `https://localhost:${this.apiPort}/api/ResturantFeedback`; 
  constructor(private http: HttpClient) {}

  postFeedback(feedbackData: any) {
    console.log(feedbackData);
    return this.http.post(`${this.apiUrl}`, feedbackData);
  }
}
