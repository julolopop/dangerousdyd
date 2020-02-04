import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../_service/Character.service';
import { CampaniaService } from '../_service/Campania.service';
import { CharacterInfoService } from '../_service/CharacterInfo.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {


  public characters = [];

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    private CampaniaService: CampaniaService,
    private CharacterService: CharacterService,
    private CharacterInfoService: CharacterInfoService
  ) { }

  ngOnInit() {
    this.CampaniaService.getCampanas().subscribe(res => {
      let request: any = res;
      this.CharacterService.getCharacters(request.campana[0]).subscribe(res => {
        let request: any = res;
        this.characters.push(...request.pj);
      });
    });

  }

  gotoInfo(info) {
    localStorage.setItem('pj', info.id);
    this.router.navigate(['/info'], info);

  }

}
