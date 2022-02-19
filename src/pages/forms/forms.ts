import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

/**
 * Generated class for the FormsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {

  constructor(public ToastProvider: ToastProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http = http;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
    this.getProducts();
  }
  items = [];
  tryAgain = false;
  showLoader = false;
  showToast(message: string, duration: number, position: string, asAlert: boolean = true) {

    this.ToastProvider.showToast(message, duration, position);
  }
  goToHome(id) {
    this.navCtrl.push(HomePage, { id: id })
  }
  getProducts() {
    this.tryAgain = false;
    this.showToast('در حال بروز رسانی فرم...', 3000, 'bottom', false);
    this.showLoader = true;
    this.items = [];
    var link = 'http://idehweb.ir/diplom/?allforms=1';
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
            this.items = products;

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

}
