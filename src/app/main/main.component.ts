import { FinalComponent } from './../final/final.component';
import { QUESTIONS } from './../questions-mock';
import { ResultsComponent } from './../results/results.component';
import { QuestionService } from './../question.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material/dialog';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  counter: number = 0;
  currentQuestion;
  answerValue: string;
  cashAmount: number = 0;

  constructor(private questionService: QuestionService, public popup: MatDialog) { }

  ngOnInit() {

    this.currentQuestion = this.questionService.getQuestion(this.counter);
  }
  ngDoCheck() {
    this.currentQuestion = this.questionService.getQuestion(this.counter);

  }
  showResults() {
    let dialogPopup = this.popup.open(FinalComponent, {
      width: '400px',
      data: {
        cashAmount: this.cashAmount
      }
    })
  }

  userAnswer(event) {
    if (this.counter < QUESTIONS.length - 1) {  // I have one aditional click here. 
      if (event.srcElement.innerText == this.currentQuestion.correctAnswer) {
        this.cashAmount += this.currentQuestion.cashValue;
        this.counter++; 
      }
      else {
        let dialogPopup = this.popup.open(ResultsComponent, {
          width: '500px'
        })
      }

    }
    else {
      this.showResults();
    }
  }
}



