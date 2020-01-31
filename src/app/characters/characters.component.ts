import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {


  public characters = [
    {
      "id":1,
      "name":"Sadrag",
      "img":"https://www.arcade-fighter.com/images/soul-calibur/soul-calibur-lizardman-1.jpg"
    },
    {
      "id":2,
      "name":"Sadrag 1",
      "img":"https://www.arcade-fighter.com/images/soul-calibur/soul-calibur-lizardman-1.jpg"
    }
  ]

  constructor( public router: Router) { }

  ngOnInit() {
  }

  gotoInfo(){
    this.router.navigate(['/info']);
  }

}
