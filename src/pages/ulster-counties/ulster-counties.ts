import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';


/**
 * Generated class for the UlsterCountiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ulster-counties',
  templateUrl: 'ulster-counties.html',
})
export class UlsterCountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  counties: string[] = ["Cavan", "Donegal", "Monaghan"];

  ionViewDidLoad() {
    console.log('ionViewDidLoad UlsterCountiesPage');
  }

  openCavanPage(){
    this.navCtrl.push('CavanPage');
  }

  openDonegalPage(){
    this.navCtrl.push('DonegalPage');
  }

  openMonaghanPage(){
    this.navCtrl.push('MonaghanPage');
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

}
