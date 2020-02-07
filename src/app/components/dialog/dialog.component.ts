import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { element } from 'protractor';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @ViewChild('input',{static:false}) input : ElementRef;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    this.data = this.input.nativeElement.value;
    this.dialogRef.close(this.data);
  }

}
