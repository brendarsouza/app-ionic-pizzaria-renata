import { Component, OnInit } from '@angular/core';
import { CarrinhoService, Product } from 'src/app/services/carrinho/carrinho.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Cardapio } from 'src/app/interfaces/cardapio.interface';
import { app } from 'firebase';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-carrinho-modal',
  templateUrl: './carrinho-modal.page.html',
  styleUrls: ['./carrinho-modal.page.scss'],
})
export class CarrinhoModalPage implements OnInit {

  carrinho: Cardapio[] = [];

  constructor(
    private cartService: CarrinhoService,
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.carrinho = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.carrinho.reduce((i, j) => i + j.valor * j.quantidade, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process
    const alert = await this.alertCtrl.create({
      header: 'Obrigado por seu pedido',
      message: 'Confirme o endereço para entrega',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
    console.log('carrinh-modal =>', this.carrinho)
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: this.carrinho
      }
    };
    this.router.navigate(['confirmar-pedido'], navigationExtras);
    // this.router.navigate(['/confirmar-pedido', {pedido: this.carrinho}]);
  }

}
