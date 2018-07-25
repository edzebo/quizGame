import { QuestionService } from './../question.service';
import { QUESTIONS } from './../questions-mock';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public myQuestions: Question[] = QUESTIONS;
  public tempQuestion = '';
  public tempAns1 = '';
  public tempAns2 = '';
  public tempAns3 = '';
  public tempAns4 = '';
  public tempCorAns = '';

  constructor(private questionService: QuestionService) { }




  public onSubmit() {
    this.questionService.createQuestion(this.tempQuestion, this.tempAns1, this.tempAns2, this.tempAns3, this.tempAns4, this.tempCorAns);
  }

  ngOnInit() {
  }

}
