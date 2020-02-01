import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-pj',
  templateUrl: './pj.component.html',
  styleUrls: ['./pj.component.scss']
})
export class PjComponent implements OnInit {

  @Input() defense;
  
  constructor() { }

  ngOnInit() {
  }

}
