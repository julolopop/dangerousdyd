import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaniaService } from '../_service/Campania.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../_interface/interfacesRequest';
import { Globals } from '../_global/globla';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    private CampaniaService: CampaniaService,
    private globals: Globals
  ) { }

  ngOnInit() {
    this.CampaniaService.getCampanas().subscribe(res => {
      let request: any = res;

    });

  }

  gotoInfo(sex) {
    this.globals.data.sex = sex;

    this.CampaniaService.setCampanas(this.globals.data);
    this.router.navigate(['/info']);

  }

}
