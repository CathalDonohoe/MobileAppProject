import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';

/**
 * Generated class for the KerryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kerry',
  templateUrl: 'kerry.html',
})
export class KerryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KerryPage');
  }

}
