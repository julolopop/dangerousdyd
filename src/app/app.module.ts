import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserModule } from './user/user.module';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { Globals } from './_global/globla';
import { 
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    InfoComponent
  ],
  imports: [
    UserModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
