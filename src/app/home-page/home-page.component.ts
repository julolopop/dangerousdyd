import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterInfoService } from '../_service/CharacterInfo.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/dialog/dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public objectKeys = Object.keys;
  public info;
  public hechizos;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    private characterInfoService: CharacterInfoService,
    public dialog: MatDialog
  ) {
    this.characterInfoService.getinfoCharacters(localStorage.getItem('pj')).subscribe(res => {
      this.info = res;
    });
  }

  openDialog(tipo: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: [this.info['estadistica'][tipo],'number',tipo]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.info['estadistica'][tipo] = result;
    });
  }

}
