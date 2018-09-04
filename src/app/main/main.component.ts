import { WrongAnswerComponent } from './../wrong-answer/wrong-answer.component';
import { QuestionService } from './../question.service';
import { Question } from './../question';
import { FinalComponent } from '../final/final.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public currentQuestionIndex = 0;
  public cashAmount = 0;
  public isAnswerCorrect: boolean;
  public myQuestions = this.questionService.getQuestions();
  public currentQuestion: Question = this.myQuestions[this.currentQuestionIndex];

  constructor(
    private questionService: QuestionService,
    private popup: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() { }

  public userAnswer(event) {
    this.isAnswerCorrect =
      event.srcElement.innerText === this.currentQuestion.correctAnswer;
    if (this.currentQuestionIndex < this.myQuestions.length - 1) {
      if (this.isAnswerCorrect) {
        this.callCorrectAnswer(event);
      } else {
        this.callWrongAnswer(event);
      }
    } else {
      if (this.isAnswerCorrect) {
        event.target.classList.add('true');
        this.showResults();
      } else {
        this.callWrongAnswer(event);
      }
    }
  }

  private callCorrectAnswer(event) {
    this.openSnackbar();
    event.target.classList.add('true');
    this.cashAmount += (this.currentQuestionIndex + 1) * 50;
    this.currentQuestionIndex++;
    setTimeout(() => {
      this.currentQuestion = this.myQuestions[this.currentQuestionIndex];
      event.target.classList.remove('true');
    }, 500);
  }

  private callWrongAnswer(event) {
    event.target.classList.add('false');
    setTimeout(() => {
      event.target.classList.remove('false');
      this.popup.open(WrongAnswerComponent, {
        width: '600px'
      });
    }, 500);
  }

  public showResults() {
    this.popup.open(FinalComponent, {
      width: '600px',
      data: {
        cashAmount: this.cashAmount
      }
    });
  }
  public openSnackbar() {
    this.snackBar.open('Tacan odgovor!', '', {
      duration: 300
    });
  }
}
