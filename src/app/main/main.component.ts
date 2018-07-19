import { QuestionService } from './../question.service';
import { Question } from './../question';
import { FinalComponent } from '../final/final.component';
import { QUESTIONS } from '../questions-mock';
import { ResultsComponent } from '../results/results.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentQuestionIndex: number = 0;
  
  answerValue: string;
  cashAmount: number = 0;

  constructor(private questionService: QuestionService, private popup: MatDialog) { }
  
  ngOnInit() {
    
  }

  myQuestions: Question[] = this.questionService.getQuestions();
  currentQuestion: Question = this.myQuestions[this.currentQuestionIndex]
  
  private showResults() {
    let dialogPopup = this.popup.open(FinalComponent, {
      width: '400px',
      data: {
        cashAmount: this.cashAmount
      }
    })
  }

  public userAnswer(event) {
    if (this.currentQuestionIndex < QUESTIONS.length - 1) {  // I have one aditional click here. 
      if (event.srcElement.innerText === this.currentQuestion.correctAnswer) {
        this.cashAmount += this.currentQuestion.cashValue;
        this.currentQuestionIndex++; 
        console.log("Html should change now")
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



