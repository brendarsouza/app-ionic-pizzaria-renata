import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioAddItemPageRoutingModule } from './cardapio-add-item-routing.module';

import { CardapioAddItemPage } from './cardapio-add-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioAddItemPageRoutingModule
  ],
  declarations: [CardapioAddItemPage]
})
export class CardapioAddItemPageModule {}
