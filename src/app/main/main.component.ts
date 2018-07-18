import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { renderComponent } from '../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  counter:number = 0;
  currentQuestion;
  answerValue: string;
  cashAmount:number = 0;

  constructor( private questionService: QuestionService) { }


  ngOnInit() {

    this.currentQuestion = this.questionService.getQuestion(this.counter);
  }
  ngDoCheck() {

    this.currentQuestion = this.questionService.getQuestion(this.counter);
  }

  userAnswer(event) {
   if (event.srcElement.innerText == this.currentQuestion.correctAnswer) {
    this.cashAmount += this.currentQuestion.cashValue;
    this.counter++; //when it reaches end implement score.
    }
    else {
      //navigate to end component. or popup and then to start page
      
    }
   
  
  

   

  }

}