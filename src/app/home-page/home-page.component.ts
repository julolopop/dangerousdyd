import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterInfoService } from '../_service/CharacterInfo.service';

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
  ) {
    this.characterInfoService.getinfoCharacters(localStorage.getItem('pj')).subscribe(res => {
      this.info = res;
    });


  }
}
