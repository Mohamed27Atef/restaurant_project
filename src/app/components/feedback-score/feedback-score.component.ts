import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FeedbackService } from 'src/app/services/restaurant-feedback.service';
import { IRestaurantFeedback } from 'src/app/interfaces/RestaurantFeedback';

@Component({
  selector: 'app-feedback-score',
  templateUrl: './feedback-score.component.html',
  styleUrls: ['./feedback-score.component.css'],
})
export class FeedbackScoreComponent implements OnInit, OnChanges {
  @Input() userName!: string;
  @Input() userAvatar!: string;
  @Input() restaurantId!: number;
  @Input() postedReview: any;
  feedbackData: any = { reviews: [] };
  filteredReviews: IRestaurantFeedback[] = [];
  ratingCounts: number[] = [0, 0, 0, 0, 0];
  averageRating: number = 0;
  selectedRating: number | null = null;
  totalRating: number = 0;

  constructor(private feedbackService: FeedbackService) {}
  ngOnChanges(): void {
    console.log(this.postedReview);
    this.feedbackData.reviews.push(this.postedReview);
  }

  ngOnInit() {
    this.feedbackService
      .getReviewsForRestaurant(this.restaurantId)
      .subscribe((data: any) => {
        this.feedbackData.reviews = data;
        this.calculateRatingCounts();
        this.filterDisplayedReviews();
        if (data.length > 0) {
          for (const review of data) {
            this.totalRating += review.rate;
          }
          this.averageRating = this.totalRating / data.length;
        } else {
          this.averageRating = 0;
        }
      });
  }

  calculateRatingCounts() {
    console.log('Calculating Rating Counts');

    if (this.feedbackData.reviews && this.feedbackData.reviews.length > 0) {
      this.feedbackData.reviews.forEach((review: IRestaurantFeedback) => {
        const rating = review.rate;
        if (rating >= 1 && rating <= 5) {
          this.ratingCounts[rating - 1]++;
        }
      });
    }
  }
  filterDisplayedReviews() {
    if (this.selectedRating === null) {
      this.filteredReviews = this.feedbackData.reviews;
    } else {
      this.filteredReviews = this.feedbackData.reviews.filter(
        (review: IRestaurantFeedback) => review.rate === this.selectedRating
      );
    }
  }

  filterReviewsByRating(rating: number) {
    this.selectedRating = rating;
    this.filterDisplayedReviews();
  }
}
