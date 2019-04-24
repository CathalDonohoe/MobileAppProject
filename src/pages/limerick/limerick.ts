import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';

/**
 * Generated class for the LimerickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-limerick',
  templateUrl: 'limerick.html',
})
export class LimerickPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LimerickPage');
  }

}
