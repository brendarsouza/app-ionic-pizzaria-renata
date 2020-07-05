import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Cardapio } from '../../interfaces/cardapio.interface';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  private PATH = 'cardapio';
  private cardapioCollection: AngularFirestoreCollection<Cardapio>;
  private cardapioPizzasCollection: AngularFirestoreCollection<Cardapio>;
  private cardapioLanchesCollection: AngularFirestoreCollection<Cardapio>;
  private cardapioBebidasCollection: AngularFirestoreCollection<Cardapio>;
  private cardapioSobremesasCollection: AngularFirestoreCollection<Cardapio>;
  public cardapio: Observable<Cardapio[]>;
  public pizzas: Observable<Cardapio[]>;
  public lanches: Observable<Cardapio[]>;
  public bebidas: Observable<Cardapio[]>;
  public sobremesas: Observable<Cardapio[]>;

  constructor(db: AngularFirestore) {
    this.cardapioCollection = db.collection<Cardapio>('cardapio');
    this.cardapioPizzasCollection = db.collection<Cardapio>('cardapio',
    query => query.where('categoria', '==', 'Pizzas').orderBy('nome', 'asc'));
    this.cardapioLanchesCollection = db.collection<Cardapio>('cardapio',
    query => query.where('categoria', '==', 'Lanches').orderBy('nome', 'asc'));
    this.cardapioBebidasCollection = db.collection<Cardapio>('cardapio',
    query => query.where('categoria', '==', 'Bebidas').orderBy('nome', 'asc'));
    this.cardapioSobremesasCollection = db.collection<Cardapio>('cardapio',
    query => query.where('categoria', '==', 'Sobremesas').orderBy('nome', 'asc'));

  }

  getCardapio() {
    this.cardapio = this.cardapioCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    return this.cardapio;
  }

  getPizzas() {
    this.pizzas =  this.cardapioPizzasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.pizzas;
  }

  getLanches() {
    this.lanches =  this.cardapioLanchesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.lanches;
  }

  getBebidas() {
    this.bebidas =  this.cardapioBebidasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.bebidas;
  }

  getSobremesas() {
    this.sobremesas =  this.cardapioSobremesasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.sobremesas;
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
