import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectAnswerSnackbarComponent } from './correct-answer-snackbar.component';

describe('CorrectAnswerSnackbarComponent', () => {
  let component: CorrectAnswerSnackbarComponent;
  let fixture: ComponentFixture<CorrectAnswerSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectAnswerSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectAnswerSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
