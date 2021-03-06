
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  public cashAmount: number;
  // It works. Injecting from parent to popup. Dont know how and why.
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private matDialogRef: MatDialogRef<FinalComponent>) { }

  ngOnInit() {
    this.cashAmount = this.data.cashAmount;
  }
  public onClick() {
    this.matDialogRef.close();
  }
}
