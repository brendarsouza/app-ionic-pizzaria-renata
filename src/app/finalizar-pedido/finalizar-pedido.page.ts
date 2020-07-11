import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavParams, NavController, ToastController } from '@ionic/angular';
import { CardapioService } from 'src/app/services/cardapio/cardapio.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Cardapio } from 'src/app/interfaces/cardapio.interface';

import { trigger, style, animate, transition } from '@angular/animations';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { CarrinhoService } from '../services/carrinho/carrinho.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.page.html',
  styleUrls: ['./finalizar-pedido.page.scss'],
})
export class FinalizarPedidoPage implements OnInit {

  private snapshotChangesSubscription: any;

  
  pedido: any;
  carrinho: Cardapio[] = [];
  
  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: CardapioService,
    private webview: WebView,
    private cartService: CarrinhoService, 
    private route: ActivatedRoute
  ) {
    // this.route.queryParams.subscribe(params => {
    //   let getNav = this.router.getCurrentNavigation();
    //   if (getNav.extras.state) {
    //     this.pedido = getNav.extras.state.pedido;
    //   }
    // });
   }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.validations_form = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      ponto_referencia: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      observacao: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    let data = {
      nome: value.nome,
      telefone: value.telefone,
      logradoro: value.logradouro,
      numero: value.numero,
      complemento: value.complemento,
      ponto_referencia: value.ponto_referencia,
      bairro: value.bairro,
      observacao: value.observacao
    }
    this.firebaseService.cadastrar(data)
    .then(
      res => {
        this.router.navigate(["/cardapio"]);
      }
    )
  }

  openImagePicker(){
    this.imagePicker.hasReadPermission()
    .then((result) => {
      if(result == false){
        // no callbacks required as this opens a popup which returns async
        this.imagePicker.requestReadPermission();
      }
      else if(result == true){
        this.imagePicker.getPictures({
          maximumImagesCount: 1
        }).then(
          (results) => {
            for (var i = 0; i < results.length; i++) {
              this.uploadImageToFirebase(results[i]);
            }
          }, (err) => console.log(err)
        );
      }
    }, (err) => {
      console.log(err);
    });
  }

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Image was updated successfully',
      duration: 3000
    });
    this.presentLoading(loading);
    let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image_src, randomId)
    .then(photoURL => {
      this.image = photoURL;
      loading.dismiss();
      toast.present();
    }, err =>{
      console.log(err);
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
