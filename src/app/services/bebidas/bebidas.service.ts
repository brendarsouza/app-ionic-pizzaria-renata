import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Bebidas {
  id: number;
  name: string;
  image: string;
  size: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  private bebidasCollection: AngularFirestoreCollection<Bebidas>;
  public bebidas: Observable<Bebidas[]>;
  
  constructor(db: AngularFirestore) {
    this.bebidasCollection = db.collection<Bebidas>('Bebidas');

    this.bebidas = this.bebidasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getBebidas() {
    return this.bebidas;
  }

  getBebida(id) {
    return this.bebidasCollection.doc<Bebidas>(id).valueChanges();
  }

  updateBebida(bebidas: Bebidas, id: string) {
    return this.bebidasCollection.doc(id).update(bebidas);
  }

  addBebida(bebidas: Bebidas) {
    return this.bebidasCollection.add(bebidas);
  }

  removeBebida(id) {
    return this.bebidasCollection.doc(id).delete();
  }
}
