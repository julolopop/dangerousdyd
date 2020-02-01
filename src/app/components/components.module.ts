import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxlargeComponent } from './boxlarge/boxlarge.component';
import { ItemComponent } from './item/item.component';
import { PjComponent } from './pj/pj.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [BoxlargeComponent,ItemComponent,PjComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [BoxlargeComponent,ItemComponent,PjComponent]
})
export class ComponentsModule { }
