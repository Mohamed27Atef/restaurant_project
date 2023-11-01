import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'https://localhost:7058/api/ResturantFeedback'; 
  constructor(private http: HttpClient) {}

  postFeedback(feedbackData: any) {
    console.log(feedbackData);
    return this.http.post(`${this.apiUrl}`, feedbackData);
  }
}
