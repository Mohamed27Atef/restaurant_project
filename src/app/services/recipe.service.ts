import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private myClient: HttpClient) {}
  private apiPort = environment.apiPort;
  private DB_URL = `https://localhost:${this.apiPort}/api/Recipe/`;

  createRecipe(recipe: Recipe) {
    return this.myClient.post(this.DB_URL, recipe);
  }
  getRecipe(id: number): Observable<any> {
    return this.myClient.get(this.DB_URL + id);
  }

  getRecipeByMenuId(id: number) {
    return this.myClient.get(this.DB_URL + 'getRecipeByMenuId/' + id);
  }
  //This to load all recipes in Recipe Filter page
  getRecipes(): Observable<Recipe[]> {
    return this.myClient.get<Recipe[]>(this.DB_URL); //put here the url
  }
}
