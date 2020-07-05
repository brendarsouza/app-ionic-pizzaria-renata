import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cardapio', pathMatch: 'full' },
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
    path: 'cardapio-detalhes/:id',
    loadChildren: () => import('./cardapio/cardapio-detalhes/cardapio-detalhes.module').then( m => m.CardapioDetalhesPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
