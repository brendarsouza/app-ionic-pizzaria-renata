import { Component, OnInit } from '@angular/core';
import { HeaderPageModule } from '../header/header.module';
import { NavParams, NavController, LoadingController } from '@ionic/angular';
import { CardapioService } from '../services/cardapio/cardapio.service';
import { Cardapio } from '../interfaces/cardapio.interface';

import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoModalPage } from './carrinho-modal/carrinho-modal.page';
import { CarrinhoService } from '../services/carrinho/carrinho.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  private loading: HTMLIonLoadingElement;
  public cardapio: Cardapio[] = [];
  public pizzas: Cardapio[] = [];
  public lanches: Cardapio[] = [];
  public bebidas: Cardapio[] = [];
  public sobremesas: Cardapio[] = [];
  private isShowing = false;
  
  public carrinho = [];
  public contadorItemCarrinho: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(
    private carrinhoService: CarrinhoService,
    private modalCtrl: ModalController,
    private cardapioService: CardapioService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.carrinho = this.carrinhoService.getCart();
    this.contadorItemCarrinho = this.carrinhoService.getCartItemCount();
    this.getPizzas();
    this.getLanches();
    this.getBebidas();
    this.getSobremesas();
    this.presentLoader('Loading');

  }

  public getPizzas() {
    this.cardapioService.getPizzas().subscribe((res) => {
      this.pizzas = res;
      this.dismissLoader();
    });
  }

  public getLanches() {
    this.cardapioService.getLanches().subscribe((res) => {
      this.lanches = res;
      this.dismissLoader();
    });
    console.log(this.lanches)
  }

  public getBebidas() {
    this.cardapioService.getBebidas().subscribe((res) => {
      this.bebidas = res;
      this.dismissLoader();
    });
  }

  public getSobremesas() {
    this.cardapioService.getSobremesas().subscribe((res) => {
      this.sobremesas = res;
      this.dismissLoader();
    });
  }

  public addItem(item) {
    const tmp = document.getElementById(item.id);
    // tslint:disable-next-line: radix
    const num = parseInt(tmp.getAttribute('value'));
    if (num >= 0) {
      document.getElementById(item.id).setAttribute('value', (num + 1) + '');
      document.getElementById('ion-chip' + item.id).classList.remove('ion-color-default');
      document.getElementById('ion-chip' + item.id).classList.add('ion-color-success');
      this.addToCart(item);
    }
  }

  addToCart(product) {
    this.carrinhoService.addProduct(product);
    this.animateCSS('tada');
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);
 
    let modal = await this.modalCtrl.create({
      component: CarrinhoModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }

  public async presentLoader(message: string): Promise<void> {
    if (!this.isShowing) {
      this.isShowing = true;
      this.loading = await this.loadingController.create({
        message,
      });
      return await this.loading.present();
    } else {
      // If loader is showing, only change text, won't create a new loader.
      this.isShowing = true;
      this.loading.message = message;
    }
  }

  public async dismissLoader(): Promise<void> {
    if (this.loading && this.isShowing) {
      this.isShowing = false;
      await this.loading.dismiss();
    }
  }

  public removeItem(item) {
    const tmp = document.getElementById(item.id);
    // tslint:disable-next-line: radix
    const num = parseInt(tmp.getAttribute('value'));
    if (num > 0) {
      document.getElementById(item.id).setAttribute('value', (num - 1) + '');

      document.getElementById('ion-chip' + item.id).classList.remove('ion-color-success');
      document.getElementById('ion-chip' + item.id).classList.add('ion-color-default');
      this.decreaseProduct(item);
    }
  }

  decreaseProduct(product) {
    for (const [index, p] of this.carrinho.entries()) {
      if (p.id === product.id) {
        p.quantidade -= 1;
        if (p.quantidade == 0) {
          this.carrinho.splice(index, 1);
        }
      }
    }
    this.contadorItemCarrinho.next(this.contadorItemCarrinho.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.carrinho.entries()) {
      if (p.id === product.id) {
        this.contadorItemCarrinho.next(this.contadorItemCarrinho.value - p.quantidade);
        this.carrinho.splice(index, 1);
      }
    }
  }
}
