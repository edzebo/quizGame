import { WrongAnswerComponent } from './../wrong-answer/wrong-answer.component';
import { QuestionService } from './../question.service';
import { Question } from './../question';
import { FinalComponent } from '../final/final.component';
import { QUESTIONS } from '../questions-mock';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { CorrectAnswerSnackbarComponent } from '../correct-answer-snackbar/correct-answer-snackbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public currentQuestionIndex = 0;
  public answerValue: string;
  public cashAmount = 0;
  public isAnswerCorrect: boolean;
  private myQuestions = this.questionService.getQuestions();
  public currentQuestion: Question = this.questionService.shuffle(this.myQuestions)[
    this.currentQuestionIndex
  ];
  constructor(
    private questionService: QuestionService,
    private popup: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() { }

  private showResults() {
    const dialogPopup = this.popup.open(FinalComponent, {
      width: '600px',
      data: {
        cashAmount: this.cashAmount
      }
    });
  }

  public userAnswer(event) {
    this.isAnswerCorrect =
      event.srcElement.innerText === this.currentQuestion.correctAnswer;

    if (this.currentQuestionIndex < QUESTIONS.length - 1) {
      // I have one aditional click here.
      if (this.isAnswerCorrect) {
        // this.openSnackbar();
        event.srcElement.classList += ' true';
        this.cashAmount += (this.currentQuestionIndex + 1) * 50;
        this.currentQuestionIndex++;
        setTimeout(() => {
          this.currentQuestion = this.myQuestions[this.currentQuestionIndex];
          event.srcElement.classList += ' default';
          console.log('Html should change now'); // provjera
        }, 500);
      } else {
        setTimeout(() => {
          // Popup nakon 500ms
          const dialogPopup = this.popup.open(WrongAnswerComponent, {
            width: '600px'
          });
        }, 500);
        event.srcElement.classList += ' false'; // Bolji nacin za dodat klasu dugmetu?
      }
    } else {
      this.showResults();
    }
  }

  openSnackbar() {
    this.snackBar.openFromComponent(CorrectAnswerSnackbarComponent, {
      duration: 500,
    });
  }
}
