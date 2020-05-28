import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Pizzas {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private PATH = 'pizzas/';
  private pizzasCollection: AngularFirestoreCollection<Pizzas>;
  public pizzas: Observable<Pizzas[]>;
  
  constructor(db: AngularFirestore) {
    this.pizzasCollection = db.collection<Pizzas>('Pizzas', ref => ref.orderBy('id', 'asc'));

    this.pizzas = this.pizzasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPizzas() {
    return this.pizzas;
  }

  getPizza(id) {
    return this.pizzasCollection.doc<Pizzas>(id).valueChanges();
  }

  updatePizza(pizzas: Pizzas, id: string) {
    return this.pizzasCollection.doc(id).update(pizzas);
  }

  addPizza(pizzas: Pizzas) {
    return this.pizzasCollection.add(pizzas);
  }

  removePizza(id) {
    return this.pizzasCollection.doc(id).delete();
  }
}
