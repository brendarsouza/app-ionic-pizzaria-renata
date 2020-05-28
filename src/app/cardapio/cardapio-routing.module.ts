import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioPage } from './cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioPage
  },
  {
    path: 'cardapio-detalhes',
    loadChildren: () => import('./cardapio-detalhes/cardapio-detalhes.module').then( m => m.CardapioDetalhesPageModule)
  },
  {
    path: 'cardapio-add-item',
    loadChildren: () => import('./cardapio-add-item/cardapio-add-item.module').then( m => m.CardapioAddItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioPageRoutingModule {}
