import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { SinglePage } from '../single/single';
// import { BuyPage } from '../buy/buy';
// import { CartPage } from '../cart/cart';
import { Storage } from '@ionic/storage';
//import { } from '../../assets/product.json'
import { ToastProvider } from '../../providers/toast/toast';
import { Http, RequestOptions, Headers } from '@angular/http';

import { AlertController } from 'ionic-angular';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    items: any = [];
    showLoader = false;
    tryAgain = true;
    answers = [];
    id;
    constructor(public NavParams:NavParams,public navCtrl: NavController, private storage: Storage, public ToastProvider: ToastProvider, public http: Http, private alertCtrl: AlertController) {
        this.http = http;
        this.id=this.NavParams.get('id');
        this.getProducts();
        this.items = [];
        // this.items = JSON.parse(localStorage.getItem('products'));
    }
    try_again() {
        this.getProducts();
    }
    submit() {
        console.log(this.answers);
        let ans = [];
        this.items.forEach(element => {
            if (this.answers[element.id]) {
                ans.push({
                    field_id: element.id,
                    value: this.answers[element.id]
                });
            }
        });
        console.log(ans);
        let obj = {
            fields: ans
        };


        this.showLoader = true;

        var link = 'http://idehweb.ir/diplom/?ddd=1';
        let headers = new Headers({
            'content-type': 'application/x-www-form-urlencoded',
        });
        // console.log(this.token);
        let options = new RequestOptions({
            headers: headers
        });
        let body = 'fields=' + JSON.stringify(ans);
        this.http.post(link, body, options)
            .subscribe(data => {
                if (data.status == 200) {
                    var products = JSON.parse(data['_body']);
                    console.log(products);
                    alert('پاسخ شما با موفقیت ارسال شد، با تشکر');
                    this.answers=[];
                    this.getProducts();

                } else {
                    this.tryAgain = true;
                }
            }, error => {
                this.showLoader = false;
                this.tryAgain = true;
            });

        console.log(obj);
    }
    getProducts() {
        this.tryAgain = false;
        this.showToast('در حال بروز رسانی فرم...', 3000, 'bottom', false);
        this.showLoader = true;
        this.items = [];
        var link = 'http://idehweb.ir/diplom/wp-json/ideh-app-gravityforms/v1/form/'+this.id;
        let headers = new Headers({
            'content-type': 'application/x-www-form-urlencoded',
        });
        // console.log(this.token);
        let options = new RequestOptions({
            headers: headers
        });

        this.http.get(link, options)
            .subscribe(data => {
                if (data.status == 200) {
                    var products = JSON.parse(data['_body']);
                    if (products) {
                        this.items = products.fields;

                        localStorage.setItem('products', JSON.stringify(products));
                        this.showLoader = false;
                        var array = [];
                        // array.push(jsonObj);
                        // var cart = {
                        //     items: array
                        // };
                        // this.storage.set('cart', JSON.stringify(cart));
                    }
                } else {
                    this.tryAgain = true;
                }
            }, error => {
                this.showLoader = false;
                this.tryAgain = true;
            });



    }
    goToSingle(params) {
        if (!params) params = {};
        // this.navCtrl.push(SinglePage, { params: params });
    }
    goToBuy(item) {

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
    }
    goToCart() {
        // this.navCtrl.push(CartPage);
    }
    showToast(message: string, duration: number, position: string, asAlert: boolean = true) {
        if (asAlert)
            this.presentConfirm();
        else
            this.ToastProvider.showToast(message, duration, position);
    }
    addToCart(item, count, sosCount) {
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
        this.storage.get('cart').then((val) => {

            console.log('Your age is', val);
            if (!val) {
                val = [];
            }
            var jsonobject = JSON.parse(val);
            if (jsonobject) {
                // console.log(jsonobject.items);
                jsonobject.items.forEach(element => {
                    if (element.id == jsonObj.id) {
                        shouldBeBreak = true;
                        console.log('in if', shouldBeBreak);
                    }
                });
                if (shouldBeBreak) {
                    this.showToast('شما از قبل این محصول را انتخاب کرده اید!', 1000, 'top');
                } else {
                    jsonobject.items.push(jsonObj);
                    console.log(jsonobject);
                    console.log('after if', shouldBeBreak);
                    this.storage.set('cart', JSON.stringify(jsonobject)).then((val) => {
                        this.showToast('این محصول با موفقیت به فاکتور شما اضافه شد!', 1000, 'top');
                    });
                }
            } else {
                var array = [];
                array.push(jsonObj);
                var cart = {
                    items: array
                };
                console.log(cart);

                this.storage.set('cart', JSON.stringify(cart)).then((val) => {
                    this.showToast('این محصول با موفقیت به فاکتور شما اضافه شد!', 1000, 'top');
                });
            }




        });

    }
    presentConfirm() {
        let alert = this.alertCtrl.create({
            //  title: '',
            message: 'عطر مورد نظر به لیست سفارشتون اضافه شد. بازم چیزی نیاز دارید؟',
            buttons: [
                {
                    text: 'بله',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'خیر، نمایش فاکتور',
                    handler: () => {
                        console.log('Buy clicked');
                        this.goToCart();
                    }
                }
            ]
        });
        alert.present();
    }
}
