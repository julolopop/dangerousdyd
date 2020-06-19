import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { CharactersComponent } from './characters/characters.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'character', component: CharactersComponent },
  { path: 'info', component:  InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
