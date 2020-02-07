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

  @Input() defense:number;
  @Input() vida:number;
  public vidaA:number;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.vida
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
     this.vida = result;
    });
  }

  ngOnInit() {
    this.vidaA= this.vida;
  }
  cambioVida(num :number){
    this.vidaA += num;
  }
}
