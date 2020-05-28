import { Component, OnInit } from "@angular/core";
import { Pizzas, PizzasService } from "src/app/services/pizzas/pizzas.service";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: "app-pizza-detalhes",
  templateUrl: "./pizza-detalhes.page.html",
  styleUrls: ["./pizza-detalhes.page.scss"],
})
export class PizzaDetalhesPage implements OnInit {
  pizza: Pizzas;

  pizzaId = null;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private pizzasService: PizzasService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.pizzaId = this.route.snapshot.params["id"];
    if (this.pizzaId) {
      this.loadPizzas();
    }
  }

  async loadPizzas() {
    const loading = await this.loadingController.create({
      message: "Loading Pizza..",
    });
    await loading.present();

    this.pizzasService.getPizza(this.pizzaId).subscribe((res) => {
      loading.dismiss();
      this.pizza = res;
    });
  }

  async savePizza() {
    const loading = await this.loadingController.create({
      message: "Saving Pizza..",
    });
    await loading.present();

    if (this.pizzaId) {
      this.pizzasService.updatePizza(this.pizza, this.pizzaId).then(() => {
        loading.dismiss();
        // this.nav.back("pizzas");
      });
    } else {
      this.pizzasService.addPizza(this.pizza).then(() => {
        loading.dismiss();
        // this.nav.goBack("pizzas");
      });
    }
  }
}
