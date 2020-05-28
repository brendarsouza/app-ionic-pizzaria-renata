import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaDetalhesPageRoutingModule } from './pizza-detalhes-routing.module';

import { PizzaDetalhesPage } from './pizza-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaDetalhesPageRoutingModule
  ],
  declarations: [PizzaDetalhesPage]
})
export class PizzaDetalhesPageModule {}
