import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CampaniaService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo gato
  public createCat(data: {nombre: string, url: string}) {
    return this.firestore.collection('Usuarios').add(data);
  }
  //Obtiene un gato
  public getCampanas() {
    // return this.firestore.collection('Usuarios').doc(JSON.parse(localStorage.User).user.uid).valueChanges();
    return this.firestore.collection('Usuarios').doc('Hff63umfpnQ5sBxttGWnWjDwyC02').valueChanges();
  }
}
