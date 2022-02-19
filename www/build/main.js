webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forms/forms.module": [
		156
	],
	"../pages/list/list.module": [
		158
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forms__["a" /* FormsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forms__["a" /* FormsPage */]),
            ],
        })
    ], FormsPageModule);
    return FormsPageModule;
}());

//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
            ],
        })
    ], ListPageModule);
    return ListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_forms_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forms_forms_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_toast_toast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { SinglePage } from '../pages/single/single';
// import { BuyPage } from '../pages/buy/buy';
// import { CartPage } from '../pages/cart/cart';
// import { TimerPage } from '../pages/timer/timer';




// import { AboutPage } from '../pages/about/about';
// import { AboutPageModule } from '../pages/about/about.module';
// import { AdvicesPage } from '../pages/advices/advices';
// import { AdvicesPageModule } from '../pages/advices/advices.module';






//import { Push } from '@ionic-native/push';
//import { LocalNotifications } from '@ionic-native/local-notifications';


//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { FCM } from '@ionic-native/fcm';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_forms_forms_module__["FormsPageModule"],
                // AboutPageModule,
                // AdvicesPageModule,
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list_module__["ListPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */], { backButtonText: '' }, {
                    links: [
                        { loadChildren: '../pages/forms/forms.module#FormsPageModule', name: 'FormsPage', segment: 'forms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
                // SinglePage,
                // BuyPage,
                __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_forms_forms__["a" /* FormsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                //  Push,
                // UniqueDeviceID,
                //  LocalNotifications,
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_forms_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { SinglePage } from '../pages/single/single';
// import { BuyPage } from '../pages/buy/buy';
// import { CartPage } from '../pages/cart/cart';

//import { FCM } from '@ionic-native/fcm';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';
//import { LocalNotifications } from '@ionic-native/local-notifications';

// import { AboutPage } from '../pages/about/about';
// import { AdvicesPage } from '../pages/advices/advices';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_forms_forms__["a" /* FormsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            var user = localStorage.getItem('user');
            if (user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_forms_forms__["a" /* FormsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
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
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_forms_forms__["a" /* FormsPage */]);
    };
    MyApp.prototype.goToSingle = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.setRoot(SinglePage);
    };
    MyApp.prototype.goToBuy = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.setRoot(BuyPage);
    };
    MyApp.prototype.goToCart = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.setRoot(CartPage);
    };
    MyApp.prototype.goToList = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.push(ListPage);
    };
    MyApp.prototype.goToAbout = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.push(AboutPage);
    };
    MyApp.prototype.goToAdvice = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.push(AdvicesPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hamidalinia/Documents/projects/uni/src/app/app.html"*/'<ion-menu [content]="mainContent" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        فهرست\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToList()" id="menu-list-item1">\n        سفارش های قبلی من\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToAdvice()" id="menu-list-item2">\n          انتقادات و پیشنهادات\n        </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToAbout()" id="menu-list-item2">\n        درباره تن ویچ\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/hamidalinia/Documents/projects/uni/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FormsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormsPage = /** @class */ (function () {
    function FormsPage(ToastProvider, http, navCtrl, navParams) {
        this.ToastProvider = ToastProvider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.tryAgain = false;
        this.showLoader = false;
        this.http = http;
    }
    FormsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormsPage');
        this.getProducts();
    };
    FormsPage.prototype.showToast = function (message, duration, position, asAlert) {
        if (asAlert === void 0) { asAlert = true; }
        this.ToastProvider.showToast(message, duration, position);
    };
    FormsPage.prototype.goToHome = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { id: id });
    };
    FormsPage.prototype.getProducts = function () {
        var _this = this;
        this.tryAgain = false;
        this.showToast('در حال بروز رسانی فرم...', 3000, 'bottom', false);
        this.showLoader = true;
        this.items = [];
        var link = 'http://idehweb.ir/diplom/?allforms=1';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'content-type': 'application/x-www-form-urlencoded',
        });
        // console.log(this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.http.get(link, options)
            .subscribe(function (data) {
            if (data.status == 200) {
                var products = JSON.parse(data['_body']);
                if (products) {
                    _this.items = products;
                    _this.showLoader = false;
                    var array = [];
                    // array.push(jsonObj);
                    // var cart = {
                    //     items: array
                    // };
                    // this.storage.set('cart', JSON.stringify(cart));
                }
            }
            else {
                _this.tryAgain = true;
            }
        }, function (error) {
            _this.showLoader = false;
            _this.tryAgain = true;
        });
    };
    FormsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forms',template:/*ion-inline-start:"/Users/hamidalinia/Documents/projects/uni/src/pages/forms/forms.html"*/'<!--\n  Generated template for the FormsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>کارگاه ها</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let field of items;let i=index">\n    <ion-item (click)="goToHome(field.id)">\n      <ion-label color="primary">\n        <h3>{{field.title}}\n          </h3>\n        <div style="font-size: 11px;">{{field.description}}</div>\n      </ion-label>\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/hamidalinia/Documents/projects/uni/src/pages/forms/forms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FormsPage);
    return FormsPage;
}());

//# sourceMappingURL=forms.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastProvider Provider');
    }
    ToastProvider.prototype.showToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            dismissOnPageChange: true
        });
        toast.present(toast);
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SinglePage } from '../single/single';
// import { BuyPage } from '../buy/buy';
// import { CartPage } from '../cart/cart';

//import { } from '../../assets/product.json'



//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
var HomePage = /** @class */ (function () {
    function HomePage(NavParams, navCtrl, storage, ToastProvider, http, alertCtrl) {
        this.NavParams = NavParams;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.ToastProvider = ToastProvider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.showLoader = false;
        this.tryAgain = true;
        this.answers = [];
        this.http = http;
        this.id = this.NavParams.get('id');
        this.getProducts();
        this.items = [];
        // this.items = JSON.parse(localStorage.getItem('products'));
    }
    HomePage.prototype.try_again = function () {
        this.getProducts();
    };
    HomePage.prototype.submit = function () {
        var _this = this;
        console.log(this.answers);
        var ans = [];
        this.items.forEach(function (element) {
            if (_this.answers[element.id]) {
                ans.push({
                    field_id: element.id,
                    value: _this.answers[element.id]
                });
            }
        });
        console.log(ans);
        var obj = {
            fields: ans
        };
        this.showLoader = true;
        var link = 'http://idehweb.ir/diplom/?ddd=1';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'content-type': 'application/x-www-form-urlencoded',
        });
        // console.log(this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = 'fields=' + JSON.stringify(ans);
        this.http.post(link, body, options)
            .subscribe(function (data) {
            if (data.status == 200) {
                var products = JSON.parse(data['_body']);
                console.log(products);
                alert('پاسخ شما با موفقیت ارسال شد، با تشکر');
                _this.answers = [];
                _this.getProducts();
            }
            else {
                _this.tryAgain = true;
            }
        }, function (error) {
            _this.showLoader = false;
            _this.tryAgain = true;
        });
        console.log(obj);
    };
    HomePage.prototype.getProducts = function () {
        var _this = this;
        this.tryAgain = false;
        this.showToast('در حال بروز رسانی فرم...', 3000, 'bottom', false);
        this.showLoader = true;
        this.items = [];
        var link = 'http://idehweb.ir/diplom/wp-json/ideh-app-gravityforms/v1/form/' + this.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'content-type': 'application/x-www-form-urlencoded',
        });
        // console.log(this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.http.get(link, options)
            .subscribe(function (data) {
            if (data.status == 200) {
                var products = JSON.parse(data['_body']);
                if (products) {
                    _this.items = products.fields;
                    localStorage.setItem('products', JSON.stringify(products));
                    _this.showLoader = false;
                    var array = [];
                    // array.push(jsonObj);
                    // var cart = {
                    //     items: array
                    // };
                    // this.storage.set('cart', JSON.stringify(cart));
                }
            }
            else {
                _this.tryAgain = true;
            }
        }, function (error) {
            _this.showLoader = false;
            _this.tryAgain = true;
        });
    };
    HomePage.prototype.goToSingle = function (params) {
        if (!params)
            params = {};
        // this.navCtrl.push(SinglePage, { params: params });
    };
    HomePage.prototype.goToBuy = function (item) {
        // console.log('Your age is', item);
        var sosCount = 1;
        var count = 1;
        var jsonObj = {
            id: item.id,
            foodName: item.foodName,
            count: count,
            sosCount: sosCount,
            price: item.price,
            img: item.img
        };
        // console.log(jsonObj);
        var array = [];
        array.push(jsonObj);
        var cart = {
            items: array
        };
        console.log(cart);
        // this.navCtrl.push(BuyPage, { cart: cart, buyOne: true });
    };
    HomePage.prototype.goToCart = function () {
        // this.navCtrl.push(CartPage);
    };
    HomePage.prototype.showToast = function (message, duration, position, asAlert) {
        if (asAlert === void 0) { asAlert = true; }
        if (asAlert)
            this.presentConfirm();
        else
            this.ToastProvider.showToast(message, duration, position);
    };
    HomePage.prototype.addToCart = function (item, count, sosCount) {
        var _this = this;
        // console.log('Your age is', item);
        if (!sosCount)
            sosCount = 0;
        if (!count)
            count = 1;
        var jsonObj = {
            id: item.id,
            foodName: item.foodName,
            count: count,
            sosCount: sosCount,
            price: item.price,
            img: item.img
        };
        // console.log(jsonObj);
        var shouldBeBreak = false;
        this.storage.get('cart').then(function (val) {
            console.log('Your age is', val);
            if (!val) {
                val = [];
            }
            var jsonobject = JSON.parse(val);
            if (jsonobject) {
                // console.log(jsonobject.items);
                jsonobject.items.forEach(function (element) {
                    if (element.id == jsonObj.id) {
                        shouldBeBreak = true;
                        console.log('in if', shouldBeBreak);
                    }
                });
                if (shouldBeBreak) {
                    _this.showToast('شما از قبل این محصول را انتخاب کرده اید!', 1000, 'top');
                }
                else {
                    jsonobject.items.push(jsonObj);
                    console.log(jsonobject);
                    console.log('after if', shouldBeBreak);
                    _this.storage.set('cart', JSON.stringify(jsonobject)).then(function (val) {
                        _this.showToast('این محصول با موفقیت به فاکتور شما اضافه شد!', 1000, 'top');
                    });
                }
            }
            else {
                var array = [];
                array.push(jsonObj);
                var cart = {
                    items: array
                };
                console.log(cart);
                _this.storage.set('cart', JSON.stringify(cart)).then(function (val) {
                    _this.showToast('این محصول با موفقیت به فاکتور شما اضافه شد!', 1000, 'top');
                });
            }
        });
    };
    HomePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            //  title: '',
            message: 'عطر مورد نظر به لیست سفارشتون اضافه شد. بازم چیزی نیاز دارید؟',
            buttons: [
                {
                    text: 'بله',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'خیر، نمایش فاکتور',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.goToCart();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/hamidalinia/Documents/projects/uni/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>\n      نظر سنجی\n    </ion-title>\n\n\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <ion-list *ngFor="let field of items;let i=index">\n    <div *ngIf="field.type==\'text\'">\n      <ion-item>\n        <ion-label color="primary">{{field.label}}</ion-label>\n        <ion-input [(ngModel)]="answers[field.id]" placeholder="{{field.label}}"></ion-input>\n      </ion-item>\n    </div>\n    <div *ngIf="field.type==\'textarea\'">\n      <ion-item>\n        <ion-textarea placeholder="{{field.label}}" [(ngModel)]="answers[field.id]"></ion-textarea>\n\n      </ion-item>\n    </div>\n    <div *ngIf="field.type==\'radio\'">\n\n      <ion-list radio-group [(ngModel)]="answers[field.id]">\n        <ion-item *ngFor="let choice of field.choices;let js=index">\n          <ion-label>{{choice.text}}</ion-label>\n          <ion-radio value="{{choice.text}}" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n    </div>\n    <div *ngIf="field.type==\'select\'">\n      <ion-item>\n        <ion-label>{{field.label}}</ion-label>\n        <ion-select [(ngModel)]="answers[field.id]">\n          <ion-option *ngFor="let choice of field.choices" value="{{choice.value}}">{{choice.text}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <!-- <div *ngIf="field.type==\'checkbox\'">\n      <ion-list >\n\n        <ion-item *ngFor="let choice of field.choices">\n          <ion-label>{{choice.text}}</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div> -->\n  </ion-list>\n  <button ion-button full block (click)="submit()">ثبت</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hamidalinia/Documents/projects/uni/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, http, iab, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    ListPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://idehweb.ir/diplom/?khj=1&username=' + this.username + '&password=' + this.password;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'content-type': 'application/x-www-form-urlencoded',
        });
        // console.log(this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.http.get(link, options)
            .subscribe(function (data) {
            if (data.status == 200) {
                var orders = JSON.parse(data['_body']);
                console.log(orders);
                if (orders == 'true' || orders == true) {
                    localStorage.setItem('user', 'true');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                else {
                    alert('نام کاربری یا رمز عبور اشتباه است.');
                }
            }
            else {
                _this.tryAgain = true;
            }
            _this.showLoader = false;
        }, function (error) {
            _this.showLoader = false;
            _this.tryAgain = true;
        });
    };
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hamidalinia/Documents/projects/uni/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      ورود\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label color="primary">نام کاربری</ion-label>\n      <ion-input [(ngModel)]="username" placeholder="نام کاربری"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">رمز عبور</ion-label>\n      <ion-input [(ngModel)]="password" type="password" placeholder="رمز عبور"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full block (click)="submit()">ورود</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/hamidalinia/Documents/projects/uni/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map