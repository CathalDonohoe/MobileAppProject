import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MunsterCountiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-munster-counties',
  templateUrl: 'munster-counties.html',
})
export class MunsterCountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MunsterCountiesPage');
  }

  openCorkPage(){
    this.navCtrl.push('CorkPage');
  }
  openClarePage(){
    this.navCtrl.push('ClarePage');
  }

  openKerryPage(){
    this.navCtrl.push('KerryPage');
  }

  openLimerickPage(){
    this.navCtrl.push('LimerickPage');
  }

  openTipperaryPage(){
    this.navCtrl.push('TipperaryPage');
  }

  openWaterfordPage(){
    this.navCtrl.push('WaterfordPage');
  }

}
