import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioDetalhesPageRoutingModule } from './cardapio-detalhes-routing.module';

import { CardapioDetalhesPage } from './cardapio-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioDetalhesPageRoutingModule
  ],
  declarations: [CardapioDetalhesPage]
})
export class CardapioDetalhesPageModule {}
