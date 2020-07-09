import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from 'src/providers/firebase';

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
    private firebaseProviders: FirebaseProvider,
  ) { 
    this.getLanches();
  }
  
  getLanches() {
    this.firebaseProviders.getLanches().then((r) => {
      this.lanches = r;
    });
  }

  ngOnInit() {
  }

}
