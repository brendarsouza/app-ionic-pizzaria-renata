import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioDetalhesPage } from './cardapio-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioDetalhesPageRoutingModule {}
