import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Lanches {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class LanchesService {

  private lanchesCollection: AngularFirestoreCollection<Lanches>;
  public lanches: Observable<Lanches[]>;
  
  constructor(db: AngularFirestore) {
    this.lanchesCollection = db.collection<Lanches>('Lanches', ref => ref.orderBy('id', 'asc'));

    this.lanches = this.lanchesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getLanches() {
    return this.lanches;
  }

  getLanche(id) {
    return this.lanchesCollection.doc<Lanches>(id).valueChanges();
  }

  updateLanche(lanches: Lanches, id: string) {
    return this.lanchesCollection.doc(id).update(lanches);
  }

  addLanche(lanches: Lanches) {
    return this.lanchesCollection.add(lanches);
  }

  removeLanche(id) {
    return this.lanchesCollection.doc(id).delete();
  }
}
