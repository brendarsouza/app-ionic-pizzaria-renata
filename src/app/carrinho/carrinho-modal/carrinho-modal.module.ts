import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoModalPageRoutingModule } from './carrinho-modal-routing.module';

import { CarrinhoModalPage } from './carrinho-modal.page';
import { ConfirmarPedidoPageModule } from 'src/app/confirmar-pedido/confirmar-pedido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPedidoPageModule,
    CarrinhoModalPageRoutingModule
  ],
  declarations: [CarrinhoModalPage]
})
export class CarrinhoModalPageModule {}
