import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { SinglePage } from '../pages/single/single';
// import { BuyPage } from '../pages/buy/buy';
// import { CartPage } from '../pages/cart/cart';


import { FormsPage } from '../pages/forms/forms';
//import { FCM } from '@ionic-native/fcm';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { ListPage } from '../pages/list/list';
// import { AboutPage } from '../pages/about/about';
// import { AdvicesPage } from '../pages/advices/advices';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = FormsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      let user = localStorage.getItem('user');
      if (user) {
        this.navCtrl.setRoot(FormsPage);

      } else {
        this.navCtrl.setRoot(ListPage);

      }

      //   const options: PushOptions = {
      //     android: {},
      //     ios: {
      //       alert: 'true',
      //       badge: true,
      //       sound: 'false'
      //     }
      //   };

      //   const pushObject: PushObject = this.push.init(options);


      //   pushObject.on('notification').subscribe((notification: any) => {
      //     console.log('Received a notification', notification);


      //   this.localNotifications.schedule({
      //     title: notification.title,
      //     text: notification.message,
      //   });
      //   });

      //   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

      //   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    });
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(FormsPage);
  }
  goToSingle(params) {
    if (!params) params = {};
    // this.navCtrl.setRoot(SinglePage);
  }
  goToBuy(params) {
    if (!params) params = {};
    // this.navCtrl.setRoot(BuyPage);
  }
  goToCart(params) {
    if (!params) params = {};
    // this.navCtrl.setRoot(CartPage);
  }
  goToList(params) {
    if (!params) params = {};
    // this.navCtrl.push(ListPage);
  }
  goToAbout(params) {
    if (!params) params = {};
    // this.navCtrl.push(AboutPage);
  }
  goToAdvice(params) {
    if (!params) params = {};
    // this.navCtrl.push(AdvicesPage);
  }
}
