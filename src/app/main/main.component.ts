import { QuestionService } from "./../question.service";
import { Question } from "./../question";
import { FinalComponent } from "../final/final.component";
import { QUESTIONS } from "../questions-mock";
import { ResultsComponent } from "../results/results.component";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  currentQuestionIndex: number = 0;

  answerValue: string;
  cashAmount: number = 0;
  isAnswerCorrect: boolean;

  constructor(
    private questionService: QuestionService,
    private popup: MatDialog
  ) { }

  ngOnInit() { }
  myQuestions: Question[] = this.questionService.getQuestions();
  currentQuestion: Question = this.questionService.shuffle(this.myQuestions)[
    this.currentQuestionIndex
  ];

  private showResults() {
    let dialogPopup = this.popup.open(FinalComponent, {
      width: "400px",
      data: {
        cashAmount: this.cashAmount
      }
    });
  }

  public userAnswer(event) {
    this.isAnswerCorrect =
      event.srcElement.innerText === this.currentQuestion.correctAnswer;

    if (this.currentQuestionIndex < QUESTIONS.length - 1) {
      // I have one aditional click here.
      if (this.isAnswerCorrect) {
        //Na sljedece pitanje nakon 500ms, KAD SULJO RIJESI PROBLEM
        event.srcElement.classList += " true"; //Bolji nacin za dodat klasu dugmetu??
        this.cashAmount += (this.currentQuestionIndex + 1) * 50;
        this.currentQuestionIndex++;
        console.log("Html should change now"); //provjera
      } else {
        setTimeout(() => {
          //Popup nakon 500ms
          let dialogPopup = this.popup.open(ResultsComponent, {
            width: "500px"
          });
        }, 500);
        event.srcElement.classList += " false"; // Bolji nacin za dodat klasu dugmetu?
      }
    } else {
      this.showResults();
    }
  }
}
