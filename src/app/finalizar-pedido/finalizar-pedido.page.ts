import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho/carrinho.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.page.html',
  styleUrls: ['./finalizar-pedido.page.scss'],
})
export class FinalizarPedidoPage implements OnInit {
  pedido: any;
  usuario: any;  
  tipoConsumoSelecionado: any;

  constructor(
    private cartService: CarrinhoService, 
    private route: ActivatedRoute, 
    private router: Router
    ) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        console.log(getNav.extras.state)
        this.pedido = getNav.extras.state.pedido;
        this.usuario = getNav.extras.state.usuario;
        this.tipoConsumoSelecionado = getNav.extras.state.tipoConsumoSelecionado;
      }
    });
  }

  ngOnInit() {
    console.log(this.pedido)
    console.log(this.usuario)
    console.log(this.tipoConsumoSelecionado)
  }
  

}
