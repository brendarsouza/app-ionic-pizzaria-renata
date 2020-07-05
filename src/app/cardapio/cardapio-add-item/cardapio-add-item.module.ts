import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioAddItemPageRoutingModule } from './cardapio-add-item-routing.module';

import { CardapioAddItemPage } from './cardapio-add-item.page';
import { HeaderPageModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioAddItemPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [CardapioAddItemPage]
})
export class CardapioAddItemPageModule {}
