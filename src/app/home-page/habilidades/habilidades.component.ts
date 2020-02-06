import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  public objectKeys = Object.keys;
  @Input() info;
  constructor() { }

  ngOnInit() {
  }

  trunc(num) {
    return Math.trunc(num);
  }
}
