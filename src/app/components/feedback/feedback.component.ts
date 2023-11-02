import { Component, Input, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/restaurant-feedback.service';
import{IRestaurantFeedback} from 'src/app/interfaces/RestaurantFeedback';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent{

  stars: number[] = [1, 2, 3, 4, 5];
  selectedRating: number = 0;
  @Input() userName!: string;
  @Input() userAvatar!: string;
  @Input() restaurantId!: number;
  userComment: string = '';

  feedback: IRestaurantFeedback = {
    text: '',
    rate: 0,
    postDate: new Date(),
    ResturantId: this.restaurantId
  };

  constructor(private feedbackService: FeedbackService) {
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
      (response) => {
        console.log('Feedback submitted successfully.', response);
      },
      (error) => {
        console.error('Error submitting feedback.', error);
      }
    );
  }
}

