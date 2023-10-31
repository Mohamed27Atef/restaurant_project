import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private myClient: HttpClient) {}
  private apiPort = environment.apiPort;
  private DB_URL = `https://localhost:${this.apiPort}/api/Recipe/`;

  getRecipe(id: number) {
    return this.myClient.get(this.DB_URL + id);
  }

  getRecipeByMenuId(id: number) {
    return this.myClient.get(this.DB_URL + 'getRecipeByMenuId/' + id);
  }
}
