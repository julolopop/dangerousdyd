import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
  { path: '', component: CharactersComponent }
];


@NgModule({
  declarations: [CharactersComponent, ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersModule{ }
export class CharactersRoutingModule { }