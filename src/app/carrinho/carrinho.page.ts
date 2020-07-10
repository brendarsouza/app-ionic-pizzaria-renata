import { Component, OnInit } from '@angular/core';
import { HeaderPageModule } from '../header/header.module';
import { NavParams, NavController, LoadingController } from '@ionic/angular';
import { CardapioService } from '../services/cardapio/cardapio.service';
import { Cardapio } from '../interfaces/cardapio.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  private loading: HTMLIonLoadingElement;
  public cardapio: Cardapio[] = [];
  public pizzas: Cardapio[] = [];
  public bebidas: Cardapio[] = [];
  public lanches: Cardapio[] = [];
  public carrinho = [];
  private isShowing = false;

  constructor(
    private cardapioService: CardapioService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getCardapio();
    this.getPizzas();
    this.getLanches();
    this.getBebidas();
    this.presentLoader('Loading');
  }

  public getCardapio() {
    this.cardapioService.getCardapio().subscribe((res) => {
      this.cardapio = res;
      this.dismissLoader();
    });
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
  }

  public getBebidas() {
    this.cardapioService.getBebidas().subscribe((res) => {
      this.bebidas = res;
      this.dismissLoader();
    });
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

  public addItem(item) {
console.log(item.id)
    const tmp = document.getElementById(item.id);
    // tslint:disable-next-line: radix
    const num = parseInt(tmp.getAttribute('value'));
    if (num >= 0) {
      document.getElementById(item.id).setAttribute('value', (num + 1) + '');
      document.getElementById('ion-chip' + item.id).classList.remove('ion-color-default');
      document.getElementById('ion-chip' + item.id).classList.add('ion-color-success');
      this.addItemCart(item.id);
    }
  }

  public addItemCart(id) {
    this.carrinho[0] = this.cardapioService.getItemCardapio(id);
    console.log('this.carrinho[0] =>', this.carrinho[0]);
    for (let index = 0; index < this.carrinho.length; index++) {
      console.log('index =>', index);
      this.carrinho[index]  =  this.cardapioService.getItemCardapio(id);
      console.log('this.carrinho[index] =>', this.carrinho[index]);
    }
    console.log('tamanho =>',this.carrinho.length)

  }

  public removeItem(item) {
    const tmp = document.getElementById(item.id);
    // tslint:disable-next-line: radix
    const num = parseInt(tmp.getAttribute('value'));
    if (num > 0) {
      document.getElementById(item.id).setAttribute('value', (num - 1) + '');

      document.getElementById('ion-chip' + item.id).classList.remove('ion-color-success');
      document.getElementById('ion-chip' + item.id).classList.add('ion-color-default');
      this.removeItemCart(tmp);
    }
  }

  public removeItemCart(id) {

  }

}
