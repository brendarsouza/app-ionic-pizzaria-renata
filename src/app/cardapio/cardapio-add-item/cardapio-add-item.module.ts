import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioAddItemPageRoutingModule } from './cardapio-add-item-routing.module';

import { CardapioAddItemPage } from './cardapio-add-item.page';
import { HeaderPageModule } from 'src/app/header/header.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from 'src/providers/firebase';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioAddItemPageRoutingModule,
    HeaderPageModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseProvider,
    ImagePicker,
    WebView,
  ],
  declarations: [CardapioAddItemPage]
})
export class CardapioAddItemPageModule {}
