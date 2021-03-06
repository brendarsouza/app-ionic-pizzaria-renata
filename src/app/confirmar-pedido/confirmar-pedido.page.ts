import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardapio } from '../interfaces/cardapio.interface';
import { NavParams } from '@ionic/angular';
import { CarrinhoService } from '../services/carrinho/carrinho.service';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.page.html',
  styleUrls: ['./confirmar-pedido.page.scss'],
})
export class ConfirmarPedidoPage implements OnInit {

  pedido: any;
  carrinho: Cardapio[] = [];

  constructor(
    private cartService: CarrinhoService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.pedido = getNav.extras.state.pedido;
      }
    });
  }
  ngOnInit() { 
    this.carrinho = this.cartService.getCart();
  }

  getTotal() {
    return this.carrinho.reduce((i, j) => i + j.valor * j.quantidade, 0);
  }

}