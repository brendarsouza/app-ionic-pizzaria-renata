import { Component, OnInit } from "@angular/core";
import { Pizzas, PizzasService } from "../services/pizzas/pizzas.service";
import { HeaderPageModule } from "../header/header.module";
import { Lanches, LanchesService } from "../services/lanches/lanches.service";
import { Bebidas, BebidasService } from "../services/bebidas/bebidas.service";
import { NavParams, NavController, LoadingController } from "@ionic/angular";
import { CardapioService } from '../services/cardapio/cardapio.service';
import { Cardapio } from '../interfaces/cardapio.interface';

@Component({
  selector: "app-cardapio",
  templateUrl: "./cardapio.page.html",
  styleUrls: ["./cardapio.page.scss"],
})
export class CardapioPage implements OnInit {
  private loading: HTMLIonLoadingElement;
  public cardapio: Cardapio[];
  public pizzas: Pizzas[];
  public bebidas: Bebidas[];
  public lanches: Lanches[];
  public carrinho = [];
  private isShowing = false;

  constructor(
    private cardapioService: CardapioService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getCardapio();
    this.presentLoader('Loading');
  }

  public getCardapio() {
    this.cardapioService.getCardapio().subscribe((res) => {
      this.cardapio = res;
      this.dismissLoader();
    });
  }

  
  public async presentLoader(message: string): Promise<void> {
    if (!this.isShowing) {
      this.isShowing = true;
      this.loading = await this.loadingController.create({
        message: message,
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

    const tmp = document.getElementById(item.id);
    const num = parseInt(tmp.getAttribute('value'));
    if (num >= 0) {
      document.getElementById(item.id).setAttribute('value', (num + 1) + '');
      document.getElementById('ion-chip' + item.id).classList.remove('ion-color-default');
      document.getElementById('ion-chip' + item.id).classList.add('ion-color-success');
      this.addItemCart(tmp);
    }
  }

  public removeItem(item) {
    const tmp = document.getElementById(item.id);
    const num = parseInt(tmp.getAttribute('value'));
    if (num > 0) {
      document.getElementById(item.id).setAttribute('value', (num - 1) + '');

      document.getElementById('ion-chip' + item.id).classList.remove('ion-color-success');
      document.getElementById('ion-chip' + item.id).classList.add('ion-color-default');
      this.removeItemCart(tmp);
    }
  }

  public addItemCart(id) {
    
    for (let index = 0; index < this.carrinho.length; index++) {
      this.carrinho[index] =  this.cardapioService.getItemCardapio(id);
      
    }
    console.log(this.carrinho);
  }

  public removeItemCart(id) {

  }

}
