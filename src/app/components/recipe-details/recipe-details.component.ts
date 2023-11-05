import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'isotope-layout';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeFeedbackService } from 'src/app/services/recipe-feedback.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, AfterViewInit {
  recipe!: any;
  relatedRecipe: any;
  quantity: number = 1;
  numberOfReview: number = 0;
  Id: number = 0;
 
  constructor(
    private myService: RecipeService,
    private myActive: ActivatedRoute,
    private addToCartService : AddToCartService,
    private recipeFeedbackService: RecipeFeedbackService
  ) {
    this.Id = this.myActive.snapshot.params['id'];
  }

  addToCart(){
    const CartItemData={
       quantity: this.quantity,
       totalPrice: this.recipe.totalPrice,
       recipeId: this.Id.toString(),
       restaurantId: this.recipe.restaurantId
     }
     this.addToCartService.AddRecipeToCart(CartItemData).subscribe({
       next:(Response)=>console.log(Response),
       error:(err)=>console.log(err)
     })   
   }

  ngOnInit(): void {
    // this.recipeFeedbackService.getNumberOfReivew(this.Id).subscribe({
    //   next: data=> 
    //     this.numberOfReview = data
    // })
    this.myService.getRecipe(this.Id).subscribe({
      next: (data) => this.recipe = data,
      error: (err) => console.log(err),
    });
    this.myService.getRecipeByMenuId(this.Id).subscribe({
      next: (data) => this.relatedRecipe = data,
      error: (err) => console.log(err),
    });
  }

  ngAfterViewInit() {
    const favoriteIcons = document.querySelectorAll('.favorite-button');
    const thumbnailImages = document.querySelectorAll('.thumbnail');
    const mainImage: any = document.querySelector('.main-image img');

    thumbnailImages.forEach((thumbnail: any) => {
      thumbnail.addEventListener('mouseenter', () => {
        const imgSrc = thumbnail.getAttribute('src');
        mainImage.setAttribute('src', imgSrc);
      });
    });

    const wishlistBtn = document.getElementById('wishlistBtn');

    favoriteIcons.forEach((icon) => {
      wishlistBtn?.addEventListener('click', () => {
        icon.classList.toggle('fas');
      });
    });

    this.updateStarRating();
  }

 

  updateStarRating() {
    const productRatingElements = document.querySelectorAll('.product-rating');

    productRatingElements.forEach((ratingElement: any) => {
      const ratingText = ratingElement.querySelector('.stars-num').textContent;
      const rating = parseFloat(ratingText);

      function RoundToNearestHalf(num: number) {
        const rounded = Math.round(num * 2) / 2;
        return rounded;
      }

      const starsElement = ratingElement.querySelector('.stars');
      starsElement.innerHTML = '';

      for (let i = 1; i <= rating; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star');
        starsElement.appendChild(starIcon);
      }

      if (rating % 1 == 0.5) {
        const halfStarIcon = document.createElement('i');
        halfStarIcon.classList.add('fas', 'fa-star-half-alt');
        starsElement.appendChild(halfStarIcon);
      }

      const emptyStarsCount = 5 - Math.ceil(rating);
      for (let i = 0; i < emptyStarsCount; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('far', 'fa-star');
        starsElement.appendChild(starIcon);
      }
    });
  }

  plus() {
   this.quantity ++;
  }

  remove() {

    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
