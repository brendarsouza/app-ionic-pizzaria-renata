import { Component, OnInit } from "@angular/core";
import { NavParams, NavController, LoadingController } from "@ionic/angular";
import { FirebaseProvider } from "src/providers/firebase";
import { PizzasService } from '../services/pizzas/pizzas.service';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  lanches: any;
  bebidas: any;
  pizzas: any;
  private loading: HTMLIonLoadingElement;
  private isShowing = false;

  constructor(
    private firebaseProviders: FirebaseProvider,
    private pizzasService: PizzasService,
    private loadingController: LoadingController
  ) {
    this.getLanches();
    this.getBebidas();
    this.getPizzas();
    this.presentLoader('Loading');
  }

  public getPizzas() {
    this.pizzasService.getPizzas().subscribe(res => {
      this.pizzas = res;
    });
  }

  getLanches() {
    this.firebaseProviders.getLanches().then((r) => {
      this.lanches = r;
      this.dismissLoader();
    });
  }

  getBebidas() {
    this.firebaseProviders.getBebidas().then((r) => {
      this.bebidas = r;
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
  ngOnInit() {}
}
