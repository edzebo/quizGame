import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  counter:number = 0;
  currentQuestion;
  constructor( private questionService: QuestionService) { }

  ngOnInit() {

    this.currentQuestion = this.questionService.getQuestion(this.counter);
  }

}