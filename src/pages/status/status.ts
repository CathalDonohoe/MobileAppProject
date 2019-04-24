import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from'./../home/home';


/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  status:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  
  openHome(){
    this.navCtrl.push(HomePage);
  }

  onSave(){
    console.log(this.status);
    this.storage.set("status", this.status);
    this.navCtrl.pop();
  }

}
