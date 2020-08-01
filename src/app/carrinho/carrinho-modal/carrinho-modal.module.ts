import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CarrinhoModalPageRoutingModule } from './carrinho-modal-routing.module';
import { CarrinhoModalPage } from './carrinho-modal.page';
import { ConfirmarPedidoPageModule } from '../../confirmar-pedido/confirmar-pedido.module';
import { FinalizarPedidoPageModule } from 'src/app/finalizar-pedido/finalizar-pedido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarPedidoPageModule,
    ConfirmarPedidoPageModule,
    CarrinhoModalPageRoutingModule
  ],
  declarations: [CarrinhoModalPage]
})
export class CarrinhoModalPageModule {}
