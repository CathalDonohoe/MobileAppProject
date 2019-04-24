import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';


/**
 * Generated class for the RoscommonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roscommon',
  templateUrl: 'roscommon.html',
})
export class RoscommonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoscommonPage');
  }

}
