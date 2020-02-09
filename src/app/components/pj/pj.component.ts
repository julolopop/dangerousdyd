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

  public objectKeys = Object.keys; º
  @Input() defensa: number;
  @Input() barra: number;

  constructor(public dialog: MatDialog) { }

  openDialog(key: string, pos: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: [this.barra[key][pos], "number", key]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.barra[key][pos] = parseInt(result);
    });
  }
  openDialogD(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: [this.defensa, "number", 'defensa']
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.defensa=  parseInt(result);
    });
  }

  ngOnInit() {
  }
  cambioVida(key:string,num: number) {
    this.barra[key][0] += num;
  }
}
