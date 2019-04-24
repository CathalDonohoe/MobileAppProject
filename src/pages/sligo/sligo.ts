import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';


/**
 * Generated class for the SligoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sligo',
  templateUrl: 'sligo.html',
})
export class SligoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SligoPage');
  }

}
