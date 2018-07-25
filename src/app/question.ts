import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class Question {
  question: string;
  answers: string[];
  correctAnswer: string;


  constructor (ques: string, ans1: string, ans2: string, ans3: string, ans4: string, corAns: string) {
    this.question = ques;
    this.answers = [ans1, ans2, ans3, ans4];
    this.correctAnswer = corAns;
  }

}
