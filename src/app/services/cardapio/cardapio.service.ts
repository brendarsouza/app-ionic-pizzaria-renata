import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { map } from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Cardapio } from "../../interfaces/cardapio.interface";

@Injectable({
  providedIn: "root",
})
export class CardapioService {
  private PATH = 'cardapio/';
  private cardapioCollection: AngularFirestoreCollection<Cardapio>;
  public cardapio: Observable<Cardapio[]>;
  
  constructor(db: AngularFirestore) {
    this.cardapioCollection = db.collection<Cardapio>('cardapio');

    this.cardapio = this.cardapioCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCardapio() {
    return this.cardapio;
  }

  getItemCardapio(id) {
    return this.cardapioCollection.doc<Cardapio>(id).valueChanges();
  }

  updateCardapio(cardapio: Cardapio, id: string) {
    return this.cardapioCollection.doc(id).update(cardapio);
  }

  addCardapio(cardapio: Cardapio) {
    return this.cardapioCollection.add(cardapio);
  }

  removeCardapio(id) {
    return this.cardapioCollection.doc(id).delete();
  }
}
