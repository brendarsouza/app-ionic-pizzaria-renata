import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Produtos {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private PATH = 'produtos/';
  private produtosCollection: AngularFirestoreCollection<Produtos>;
  public produtos: Observable<Produtos[]>;
  
  constructor(db: AngularFirestore) {
    this.produtosCollection = db.collection<Produtos>('Produtos', ref => ref.orderBy('id', 'asc'));

    this.produtos = this.produtosCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getProdutos() {
    return this.produtos;
  }

  getProduto(id) {
    return this.produtosCollection.doc<Produtos>(id).valueChanges();
  }

  updateProduto(produtos: Produtos, id: string) {
    return this.produtosCollection.doc(id).update(produtos);
  }

  addProduto(produtos: Produtos) {
    return this.produtosCollection.add(produtos);
  }

  removeProduto(id) {
    return this.produtosCollection.doc(id).delete();
  }
}
