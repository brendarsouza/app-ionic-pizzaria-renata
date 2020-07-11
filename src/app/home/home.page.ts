import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from 'src/providers/firebase';
import { CardapioService } from '../services/cardapio/cardapio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  lanches: any = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private cardapioService: CardapioService,
  ) { 
    this.getLanches();
  }
  
  public getLanches() {
    this.cardapioService.getLanches().subscribe((res) => {
      this.lanches = res;
      
    });
  }

  ngOnInit() {
  }

}
