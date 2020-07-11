import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cardapio',
    loadChildren: () => import('./cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'cardapio-add-item',
    loadChildren: () => import('./cardapio/cardapio-add-item/cardapio-add-item.module').then( m => m.CardapioAddItemPageModule)
  },
  {
    path: 'cardapio-detalhes',
    loadChildren: () => import('./cardapio/cardapio-detalhes/cardapio-detalhes.module').then( m => m.CardapioDetalhesPageModule)
  },
  {
    path: 'add-item-cardapio',
    loadChildren: () => import('./cardapio/cardapio-detalhes/cardapio-detalhes.module').then( m => m.CardapioDetalhesPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'confirmar-pedido/:pedido',
    loadChildren: () => import('./confirmar-pedido/confirmar-pedido.module').then( m => m.ConfirmarPedidoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
