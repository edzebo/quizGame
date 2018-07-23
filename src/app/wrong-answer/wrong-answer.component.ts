import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './wrong-answer.component.html',
  styleUrls: ['./wrong-answer.component.css']
})
export class WrongAnswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  reloadPage() {
    location.reload();
  }

}
