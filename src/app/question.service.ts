import { QUESTIONS } from './questions-mock';
import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  counter:number;

  constructor(  ) { }

   getQuestion(param) {
    return QUESTIONS[param];
  }  
}
