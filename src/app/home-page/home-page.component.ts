import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public objectKeys = Object.keys;
  public info = {
    "nombre": "sadrag",
    "estadistica": {
      "Fuerza": "12",
      "Destreza": "11",
      "Constitución": "9",
      "Inteligencia": "8",
      "Sabiduría": "10",
      "Carisma": "10",
    },
    "habilidades": {
      "Acrobacias": "Destreza",
      "Atletismo": "Fuerza",
      "C. Arcano": "Inteligencia",
      "Engaño": "Carisma",
      "Histori": "Inteligencia",
      "Interpretación": "Carisma",
      "Intimidación": "Carisma",
      "Investigación": "Inteligencia",
      "Juego de Mano": "Destreza",
      "Medicina": "Sabiduría",
      "Naturaleza": "Inteligencia",
      "Percepció": "Sabiduría",
      "Perspicacia": "Sabiduría",
      "Persuasión": "Carisma",
      "Religión": "Inteligencia",
      "Sigilo": "Destreza",
      "Supervivencia": "Sabiduría",
      "T. con Animale": "Sabiduría",
    }
  }

  constructor() {
    
   }

   trunc(num){
     return Math.trunc(num);
   }

}
