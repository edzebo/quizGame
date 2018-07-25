import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../node_modules/@angular/material/dialog';
import { FinalComponent } from '../final/final.component';

@Component({
  selector: 'app-results',
  templateUrl: './wrong-answer.component.html',
  styleUrls: ['./wrong-answer.component.css']
})
export class WrongAnswerComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<FinalComponent>) { }

  ngOnInit() {
  }

  onClick() {
    this.matDialogRef.close();
  }
}
