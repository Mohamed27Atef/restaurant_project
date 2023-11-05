import { Component, Input, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/restaurant-feedback.service';
import { IRestaurantFeedback } from 'src/app/interfaces/RestaurantFeedback';
@Component({
  selector: 'app-recipe-feedback',
  templateUrl: './recipe-feedback.component.html',
  styleUrls: ['./recipe-feedback.component.css']
})
export class RecipeFeedbackComponent  implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedRating: number = 0;
  @Input() userName!: string;
  @Input() userAvatar!: string;
  @Input() restaurantId!: number;
  userComment: string = '';


  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    console.log(this.restaurantId);
  }

  rate(rating: number): void {
    this.selectedRating = rating;
  }

  submitFeedback() {
    const feedbackToAdd = {
      text: this.userComment,
      rate: this.selectedRating,
      postDate: new Date(),
      ResturantId: this.restaurantId,
    };

    this.feedbackService.postFeedback(feedbackToAdd).subscribe(
      {
        next: (response) => {
          console.log('Feedback submitted successfully.', response);
        },
        error: (error) => {
          console.error('Error submitting feedback.', error);
        },
      }
    );

    // Clear the form
    this.userComment = '';
    this.selectedRating = 0;
  }
}