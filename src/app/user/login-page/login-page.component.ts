import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ "prompt": "select_account" });
    this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem('User',JSON.stringify(result));
        this.router.navigate(['/character']);
      }).catch((error) => {
        window.alert(error)
      });
  }
}
