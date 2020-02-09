import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxshort',
  templateUrl: './boxshort.component.html',
  styleUrls: ['./boxshort.component.scss']
})
export class BoxshortComponent implements OnInit {
  @Input() name;
  @Input() num;

  constructor() { }

  ngOnInit() {
  }

}
