import { QUESTIONS } from './questions-mock';
import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  counter: number = 0;

  constructor(private runingQuestion: Question) {
    this.runingQuestion = QUESTIONS[this.counter];
   }
}
