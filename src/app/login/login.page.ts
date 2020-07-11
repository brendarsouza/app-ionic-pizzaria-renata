import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AuthProvider } from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { LoadingController, NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  animations: [
    trigger("login", [
      transition(":enter", [
        style({
          opacity: 0,
        }),
        animate(
          "1s ease-in-out",
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(":leave", [
        style({
          opacity: 0,
        }),
      ]),
    ]),
    trigger("register", [
      transition(":enter", [
        style({
          opacity: 0,
        }),
        animate(
          "1s ease-in-out",
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(":leave", [
        style({
          opacity: 0,
        }),
      ]),
    ]),
  ],
})
export class LoginPage implements OnInit {
  login = true;
  register = false;

  loginForm = {
    email: "",
    password: "",
  };

  registerForm = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private authProvider: AuthProvider,
    private firebaseProvider: FirebaseProvider,
    private loadingCtrl: LoadingController,
    private keyboard: Keyboard,
    private storage: Storage,
    private appRoute: Router,
    private navCtrl: NavController
  ) {

    this.keyboard.onKeyboardShow().subscribe(() => {
      console.log('abriu teclado');
    });
  }

  ngOnInit() {}

  // Exibir form de registro
  exibirRegistrar() {
    this.login = false;
    this.register = true;
  }

  // Exibir form de login
  exibirLogin() {
    this.login = true;
    this.register = false;
  }


  // login
  fazerLogin() {
    let load = this.loadingCtrl.create();
    // load.present();

    this.authProvider.login(this.loginForm)
      .then((res) => {
        let uid = res.user.uid;
        this.firebaseProvider.getUser(uid)
          .then((res) => {
            let data = res.data();
            this.storage.set('usuario', data)
              .then(() => {
                this.navCtrl.navigateRoot('carrinho');
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Registro
  criarNovaConta() {
    let load = this.loadingCtrl.create();

    this.authProvider.register(this.registerForm)
    .then((res) => {
      let uid = res.user.uid;

      // organizar dados
      let data = {
        uid: uid,
        name: this.registerForm.name,
        email: this.registerForm.email
      };

      // gravar dados user no firebase
      this.firebaseProvider.postUser(data)
      .then(() => {
        this.storage.set('usuario', data)
        .then(() => {
          this.navCtrl.navigateRoot('login');
        });
      })
      .catch((err) => {
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
  }
}
