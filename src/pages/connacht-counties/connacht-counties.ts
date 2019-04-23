import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConnachtCountiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connacht-counties',
  templateUrl: 'connacht-counties.html',
})
export class ConnachtCountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnachtCountiesPage');
  }

  openGalwayPage(){
    this.navCtrl.push('GalwayPage');
  }

  openSligoPage(){
    this.navCtrl.push('SligoPage');
  }

  openLeitrimPage(){
    this.navCtrl.push('LeitrimPage');
  }

  openMayoPage(){
    this.navCtrl.push('MayoPage');
  }


  openRoscommonPage(){
    this.navCtrl.push('RoscommonPage');
  }

}
