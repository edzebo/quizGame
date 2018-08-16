import { MatSnackBar } from '@angular/material/snack-bar';
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
  public tempQuestion = new Question('', '', '', '', '', '');
  public editState = false;
  public questionToEdit: Question;

  constructor(private questionService: QuestionService, private snackBar: MatSnackBar) { }

  public onSubmit() {
    if (this.validateQuestion(this.tempQuestion)) {
      this.myQuestions.push(this.tempQuestion);
      this.snackBar.open('Pitanje je dodano u bazu!', '', {
        duration: 800
      });
    } else {
      this.snackBar.open('Svi ponudeni odgovori moraju biti razliciti i jedan od odgovora mora biti tacan.!!!', '', {
        duration: 1500
      });
    }
  }

  public changeEditState(event, question) {
    this.editState = true;
    this.questionToEdit = question;
  }

  public deleteQuestion(question) {
    let index: number;
    for (let i = 0; i < this.myQuestions.length; i++) {
      if (this.myQuestions[i].question === question.question) {
        index = i;
      }
    }
    this.myQuestions.splice(index, 1);
  }

  public validateQuestion(question: Question): boolean {
    for (let i = 0; i < 4; i++) {
      let hit = 0;
      for (let j = 0; j < 4 - i; j++) {
        if (question.answers[i] === question.answers[j]) {
          hit++;
        }
        if (hit > 1) {
          return false;
        }
      }
    }

    for (let i = 0; i < 4; i++) {
      if (question.answers[i] === question.correctAnswer) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() { }
}
