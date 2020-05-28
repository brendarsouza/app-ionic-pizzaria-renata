import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioAddItemPage } from './cardapio-add-item.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioAddItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioAddItemPageRoutingModule {}
