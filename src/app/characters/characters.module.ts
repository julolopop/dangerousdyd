import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [CharactersComponent, ItemComponent],
  imports: [
    CommonModule
  ],
    exports: []
})
export class CharactersModule{ }