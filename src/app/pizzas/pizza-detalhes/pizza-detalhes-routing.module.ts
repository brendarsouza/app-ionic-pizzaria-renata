import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaDetalhesPage } from './pizza-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaDetalhesPageRoutingModule {}
