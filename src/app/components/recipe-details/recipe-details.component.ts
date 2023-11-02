import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, AfterViewInit {
  recipe: any;
  relatedRecipe: any;
  Id: number = 0;
 
  constructor(
    private myService: RecipeService,
    private myActive: ActivatedRoute,
    private addToCartService:AddToCartService,
  ) {}

  addToCart(){
    const CartItemData={
       quantity: "1",
       totalPrice: "200",
       recipeId: this.Id.toString(),
       restaurantId: "1"
     }
     this.addToCartService.AddRecipeToCart(CartItemData).subscribe({
       next:(Response)=>console.log(Response),
       error:(err)=>console.log(err)
     })   
   }

  ngOnInit(): void {
    this.Id = this.myActive.snapshot.params['id'];
    this.Id = 1;
    this.myService.getRecipe(this.Id).subscribe({
      next: (data) => {
        this.recipe = data;
        console.log(this.recipe);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.myService.getRecipeByMenuId(this.Id).subscribe({
      next: (data) => {
        this.relatedRecipe = data;
        console.log(this.recipe);
      },
      error: (err) => {
        console.log(err);
      },
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
    const quantityDiv: any = document.querySelector('.quantity');
    const currentQuantity = parseInt(quantityDiv.textContent);
    quantityDiv.textContent = (currentQuantity + 1).toString();
  }

  remove() {
    const quantityDiv: any = document.querySelector('.quantity');
    const currentQuantity = parseInt(quantityDiv.textContent);
    if (currentQuantity > 1) {
      quantityDiv.textContent = (currentQuantity - 1).toString();
    }
  }
}
