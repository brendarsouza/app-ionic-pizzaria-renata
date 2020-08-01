import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Cardapio, TipoConsumo } from '../interfaces/cardapio.interface';
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
  usuario: any;
  selectcategory:any;
  selectcategory1:any;
  
  tipoConsumo: TipoConsumo[] = [
    { id: 1, tipo: 'Balcão'},
    { id: 2, tipo: 'Retirar'},
    { id: 3, tipo: 'Entregar'},
  ];
  tipoConsumoSelecionado: any;
  constructor(
    private cartService: CarrinhoService, 
    private route: ActivatedRoute, 
    private router: Router
    ) {
      this.selectcategory="Entregar";

    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.pedido = getNav.extras.state.pedido;
      }
    });
  }
  codeSelected(){
    switch(this.selectcategory)
    {
      case "1": 
      this.selectcategory="Balcão";
      break;
      case "2": 
      this.selectcategory="Retirar";
      break;
      case "3": 
      this.selectcategory="Entregar";
      break;
    }
  }

  ngOnInit() { 
    this.carrinho = this.cartService.getCart();

  }

  getTotal() {
    return this.carrinho.reduce((i, j) => i + j.valor * j.quantidade, 0);
  }

  goToFinalizarPedido(){
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: this.carrinho,
        usuario: this.usuario,
        tipoConsumoSelecionado: this.selectcategory
      }
    };
    this.router.navigate(['finalizar-pedido'], navigationExtras);
  }

}