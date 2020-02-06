import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatExpansionModule } from '@angular/material';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HomePageComponent } from './home-page.component';
import { ComponentsModule } from '../components/components.module';
import { HechizosComponent } from './hechizos/hechizos.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HabilidadesComponent,
    HechizosComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ComponentsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
