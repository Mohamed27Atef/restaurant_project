import { Component, Input, OnInit } from '@angular/core';
import { RecipeFeedbackService } from 'src/app/services/recipe-feedback.service';
import { RecipeFeedback } from 'src/app/interfaces/RecipeFeedback';
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
  @Input() recipeId!: number;
  userComment: string = '';
  RemoveComponentAfterSubmit:boolean=false;


  constructor(private RecipeFeedbackService: RecipeFeedbackService) {}

  ngOnInit(): void {
    console.log(this.recipeId);
  }

  rate(rating: number): void {
    this.selectedRating = rating;
  }

  submitFeedback() {
    const feedbackToAdd = {
      text: this.userComment,
      rate: this.selectedRating,
      postDate: new Date(),
      RecipeId: this.recipeId,
    };
    this.RemoveComponentAfterSubmit=true;
    this.RecipeFeedbackService.postFeedback(feedbackToAdd).subscribe(
      (response) => {
        console.log('Feedback submitted successfully.', response);
      },
      (error) => {
        console.error('Error submitting feedback.', error);
      }
    );
  
    this.userComment = '';
    this.selectedRating = 0;
  }
}
