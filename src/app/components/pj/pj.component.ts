import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pj',
  templateUrl: './pj.component.html',
  styleUrls: ['./pj.component.scss']
})
export class PjComponent implements OnInit {

  @Input() defense: number;
  @Input() vida: number;
  public inputs: number[] =[];

  constructor(public dialog: MatDialog) { }

  openDialog(input: number, label: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: [this.inputs[input], "number", label]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.inputs[input] = result;
    });
  }

  ngOnInit() {
    this.inputs[0] = this.vida;
    this.inputs[1] = this.vida;
    this.inputs[2] = this.defense;
  }
  cambioVida(num: number) {
    this.inputs[1] += num;
  }
}
