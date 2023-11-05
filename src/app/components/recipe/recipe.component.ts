import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {//implements OnInit {
  recipes: Recipe[] = [];
  selectedCategoryFilter: string = 'All Categories';
  uniqueCategories: string[] = [];
  filteredRecipes: Recipe[] = [];
  searchText: string = '';
  minRating: number = 0;
  maxRating: number = 5;
  minPrice: number = 0;
  maxPrice: number = 1000;
  restaurantFilter: string = '';
  uniqueRestaurants: string[] = [];

  constructor(private recipeService: RecipeService) {
    this.filteredRecipes = [];
  }
  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes;
      this.uniqueRestaurants = this.getUniqueRestaurants();
      this.uniqueCategories = this.getUniqueCategories();
    });
  }
  private getUniqueCategories(): string[] {
    const uniqueCategories = [...new Set(this.recipes.map((recipe) => recipe.menuName))];
    return uniqueCategories;
  }

  private getUniqueRestaurants(): string[] {
    const uniqueNames = [...new Set(this.recipes.map((recipe) => recipe.restaurantName))];
    return uniqueNames;
  }
  filterRecipes() {
    this.filteredRecipes = this.recipes.filter((recipe) => {
      const nameMatch = recipe.name.toLowerCase().includes(this.searchText.toLowerCase());
      const ratingMatch = recipe.rating >= this.minRating && recipe.rating <= this.maxRating;
      const priceMatch = recipe.price >= this.minPrice && recipe.price <= this.maxPrice;

      if (this.restaurantFilter) {
        const restaurantMatch = recipe.restaurantName.toLowerCase().includes(this.restaurantFilter.toLowerCase());
        return nameMatch && ratingMatch && priceMatch && restaurantMatch;
      } else {
        return nameMatch && ratingMatch && priceMatch;
      }
    });
  }
  filterByCategory(selectedCategory: string) {
    this.selectedCategoryFilter = selectedCategory;
    if (selectedCategory === 'All Categories') {
      this.filteredRecipes = this.recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
          recipe.rating >= this.minRating &&
          recipe.rating <= this.maxRating &&
          recipe.price >= this.minPrice &&
          recipe.price <= this.maxPrice
        );
      });
    } else {
      this.filteredRecipes = this.recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
          recipe.rating >= this.minRating &&
          recipe.rating <= this.maxRating &&
          recipe.price >= this.minPrice &&
          recipe.price <= this.maxPrice &&
          recipe.menuName.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      });
    }
  }
}
