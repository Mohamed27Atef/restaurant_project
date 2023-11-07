import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { getCookie } from 'typescript-cookie';
const JsonToken = getCookie('User');
const token = JsonToken != undefined ? JSON.parse(JsonToken) : null;

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
});
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
    return this.myClient.get<Recipe[]>(this.DB_URL);
  }

  searchRecipesByName(name: string, page: number = 1) {
    const url = `${this.DB_URL}search/${name}?p=${page}`;
    return this.myClient.get<Recipe[]>(url);
  }
  searchRecipeInResByName(name: string, page: number = 1) {
    const url = `${this.DB_URL}searchReceipeInResturant/${name}?p=${page}`;
    return this.myClient.get<Recipe[]>(url, { headers: headers });
  }
}
