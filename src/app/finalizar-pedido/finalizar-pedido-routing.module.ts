import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarPedidoPage } from './finalizar-pedido.page';

const routes: Routes = [
  {
    path: 'finalizar-pedido',
    component: FinalizarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarPedidoPageRoutingModule {}
