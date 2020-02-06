import { Component, OnInit, Input,ViewChild,ElementRef } from '@angular/core';
import { HechizosService } from '../../_service/hechizos.service';
import { hechizo } from 'src/app/_interface/interfacesRequest';

@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styleUrls: ['./hechizos.component.scss']
})
export class HechizosComponent implements OnInit {
  @Input() info;
  public hechizos: hechizo[] = [];
  public hechizosData: hechizo[] = [];

  @ViewChild('select',{static:false}) select:ElementRef;
  @ViewChild('name',{static:false}) name:ElementRef;

  constructor(
    private hechizosService: HechizosService,
    ) { }

  ngOnInit() {
    this.hechizosService.getHechizos().subscribe(res =>{
      res.sort((a,b) => {
        return a.level > b.level?1:a.level == b.level?0:-1;
      })
      this.hechizos = res;
      this.hechizosData = res;
      this.hechizos = this.hechizos.filter(item => item.level == 'Cantrip');
      this.hechizos = this.hechizos.slice(0,30);
    });
  }

  filter(){
    this.hechizos = this.hechizosData;
    this.hechizos = this.hechizos.filter(item => item.level == this.select.nativeElement.value);
    if(this.name.nativeElement.value != "" || this.name.nativeElement.value)
    this.hechizos = this.hechizos.filter(item => item.name.toLowerCase().includes(this.name.nativeElement.value.toLowerCase()));  
    this.hechizos = this.hechizos.slice(0,30);
  }

  

}
