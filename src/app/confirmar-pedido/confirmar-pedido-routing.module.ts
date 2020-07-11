import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarPedidoPage } from './confirmar-pedido.page';

const routes: Routes = [
  {
    path: 'confirmar-pedido',
    component: ConfirmarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarPedidoPageRoutingModule {}
