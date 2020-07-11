import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarPedidoPageRoutingModule } from './confirmar-pedido-routing.module';
import { ConfirmarPedidoPage } from './confirmar-pedido.page';
import { HeaderPageModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    ConfirmarPedidoPageRoutingModule
  ],
  declarations: [ConfirmarPedidoPage]
})
export class ConfirmarPedidoPageModule {}
