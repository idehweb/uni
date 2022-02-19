
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { SinglePage } from '../pages/single/single';
// import { BuyPage } from '../pages/buy/buy';
// import { CartPage } from '../pages/cart/cart';
// import { TimerPage } from '../pages/timer/timer';
import { ListPage } from '../pages/list/list';
import { ListPageModule } from '../pages/list/list.module';

import { FormsPage } from '../pages/forms/forms';
import { FormsPageModule } from '../pages/forms/forms.module';

// import { AboutPage } from '../pages/about/about';
// import { AboutPageModule } from '../pages/about/about.module';
// import { AdvicesPage } from '../pages/advices/advices';
// import { AdvicesPageModule } from '../pages/advices/advices.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { NgModule, ErrorHandler } from '@angular/core'; 
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ToastProvider } from '../providers/toast/toast';
//import { Push } from '@ionic-native/push';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { FCM } from '@ionic-native/fcm';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // SinglePage,
    // BuyPage,
    // CartPage,
    // TimerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsPageModule,
    // AboutPageModule,
    // AdvicesPageModule,
    ListPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{backButtonText: ''})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // SinglePage,
    // BuyPage,
    ListPage,
    FormsPage,
    // CartPage,
    // AboutPage,
    // AdvicesPage,
    // TimerPage
  ],
  providers: [
    StatusBar,
  //  Push,
   // UniqueDeviceID,
  //  LocalNotifications,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ToastProvider
  ]
})
export class AppModule { }