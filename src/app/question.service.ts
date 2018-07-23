import { QUESTIONS } from './questions-mock';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  counter: number;

  constructor() { }

  getQuestions() {
    return this.shuffle(QUESTIONS);
  }


  // Fisher-Yates (aka Knuth) Shuffle.
  public shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      return array;
    }
  }
}
