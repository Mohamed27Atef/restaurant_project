import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, AfterViewInit {
  recipe!: any;
  relatedRecipe: any;
  quantity: number = 1
  Id: number = 0;
  constructor(
    private myService: RecipeService,
    private myActive: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.Id = this.myActive.snapshot.params['id'];
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
