import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarPedidoPageRoutingModule } from './finalizar-pedido-routing.module';

import { FinalizarPedidoPage } from './finalizar-pedido.page';
import { HeaderPageModule } from '../header/header.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from 'src/providers/firebase';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    FinalizarPedidoPageRoutingModule,
    HeaderPageModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseProvider,
    ImagePicker,
    WebView,
  ],
  declarations: [FinalizarPedidoPage]
})
export class FinalizarPedidoPageModule {}
