import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarPedidoPageRoutingModule } from './finalizar-pedido-routing.module';

import { FinalizarPedidoPage } from './finalizar-pedido.page';
import { HeaderPageModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    FinalizarPedidoPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [FinalizarPedidoPage]
})
export class FinalizarPedidoPageModule {}
