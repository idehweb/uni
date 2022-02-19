import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  username;
  password;
  showLoader;
  tryAgain;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private iab: InAppBrowser, private alertCtrl: AlertController) {
    this.http = http;

 
  }

  submit() {

    var link = 'http://idehweb.ir/diplom/?khj=1&username='+this.username+'&password='+this.password;
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
          var orders = JSON.parse(data['_body']);
          console.log(orders);
          if(orders=='true' || orders==true){
            localStorage.setItem('user','true');
            this.navCtrl.setRoot(HomePage);
          }else{
            alert('نام کاربری یا رمز عبور اشتباه است.')
          }
        }else{
          this.tryAgain=true;
        }
        this.showLoader = false;
      }, error => {
        this.showLoader = false;
        this.tryAgain=true;
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
