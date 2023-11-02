import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class RecipeFeedbackService {

  constructor(private httpClient: HttpClient) {}
  private apiPort = environment.apiPort;
  private DB_URL = `https://localhost:${this.apiPort}/api/RecipeFeedBack/getNumberOfReview/`;

  getNumberOfReivew(recipeId : number) : Observable<any> {
    return this.httpClient.get(this.DB_URL + recipeId);

  }
}
