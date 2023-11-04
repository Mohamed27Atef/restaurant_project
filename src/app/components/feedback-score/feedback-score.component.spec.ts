import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackScoreComponent } from './feedback-score.component';

describe('FeedbackScoreComponent', () => {
  let component: FeedbackScoreComponent;
  let fixture: ComponentFixture<FeedbackScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackScoreComponent]
    });
    fixture = TestBed.createComponent(FeedbackScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
