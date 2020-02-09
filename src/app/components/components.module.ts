import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxlargeComponent } from './boxlarge/boxlarge.component';
import { ItemComponent } from './item/item.component';
import { PjComponent } from './pj/pj.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material';
import { BoxshortComponent } from './boxshort/boxshort.component';



@NgModule({
  declarations: [BoxlargeComponent,BoxshortComponent,ItemComponent,PjComponent, DialogComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  exports: [BoxlargeComponent,BoxshortComponent,ItemComponent,PjComponent],
  entryComponents: [
    DialogComponent
  ]
  
})
export class ComponentsModule { }
