import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoPage } from './carrinho.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoPage
  },
  {
    path: 'carrinho-modal',
    loadChildren: () => import('./carrinho-modal/carrinho-modal.module').then( m => m.CarrinhoModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoPageRoutingModule {}
