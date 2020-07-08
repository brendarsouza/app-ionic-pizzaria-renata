import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioPageRoutingModule } from './cardapio-routing.module';

import { CardapioPage } from './cardapio.page';
import { HeaderPageModule } from '../header/header.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from 'src/providers/firebase';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioPageRoutingModule,
    HeaderPageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseProvider
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}
