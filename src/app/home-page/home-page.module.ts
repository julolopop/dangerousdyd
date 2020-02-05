import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HomePageComponent } from './home-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomePageComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ComponentsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
