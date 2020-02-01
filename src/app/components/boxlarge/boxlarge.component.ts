import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxlarge',
  templateUrl: './boxlarge.component.html',
  styleUrls: ['./boxlarge.component.scss']
})
export class BoxlargeComponent implements OnInit {
  @Input() name;
  @Input() num;

  constructor() { }

  ngOnInit() {
  }

}
