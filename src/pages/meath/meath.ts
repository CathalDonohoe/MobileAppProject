import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';


/**
 * Generated class for the MeathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meath',
  templateUrl: 'meath.html',
})
export class MeathPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeathPage');
  }

}
