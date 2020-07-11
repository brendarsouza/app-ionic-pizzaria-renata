import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any;

  constructor(plataform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    plataform.ready().then(() => {
      this.storage.get('usuario')
      .then((usuario) => {
        console.log(usuario);
        if (usuario) {
          // this.rootPage = 'home';
          this.rootPage = 'home';
        } else {
          this.rootPage = 'login';
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
