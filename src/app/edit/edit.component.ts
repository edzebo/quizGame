import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public myQuestions: Question[] = this.questionService.getQuestions();
  public tempQuestion = '';
  public tempAns1 = '';
  public tempAns2 = '';
  public tempAns3 = '';
  public tempAns4 = '';
  public tempCorAns = '';
  public editState = false;
  public questionToEdit: Question;

  constructor(private questionService: QuestionService) { }




  public onSubmit() {
    // tslint:disable-next-line:max-line-length
    if (this.tempQuestion !== '' && this.tempAns1 !== '' && this.tempAns2 !== '' && this.tempAns3 !== '' && this.tempAns4 !== '' && this.tempCorAns !== '') {
      const q = new Question(this.tempQuestion, this.tempAns1, this.tempAns2, this.tempAns3, this.tempAns4, this.tempCorAns);
      this.myQuestions.push(q);
      console.log('pushed to myQuestions');
    } else {
      console.log('Prazno polje');
    }
  }

  public changeEditState(event, question) {
    this.editState = !this.editState;
    this.questionToEdit = question;
  }


  public deleteQuestion($event, question) {
    let index: number;
    for (let i = 0; i < this.myQuestions.length; i++) {
      if (this.myQuestions[i].question === question.question) {
        index = i;
      }
    }
    this.myQuestions.splice(index, 1);
  }

  ngOnInit() {
  }

}
