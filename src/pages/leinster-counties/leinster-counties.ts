import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeinsterCountiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-leinster-counties',
  templateUrl: 'leinster-counties.html',
})
export class LeinsterCountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterCountiesPage');
  }

  openCarlowPage(){
    this.navCtrl.push('CarlowPage');
  }


  openDublinPage(){
    this.navCtrl.push('DublinPage');
  }

  openKildarePage(){
    this.navCtrl.push('KildarePage');
  }


  openKilkennyPage(){
    this.navCtrl.push('KilkennyPage');
  }

  openLaoisPage(){
    this.navCtrl.push('LaoisPage');
  }

  openLongfordPage(){
    this.navCtrl.push('LongfordPage');
  }

  openLouthPage(){
    this.navCtrl.push('LouthPage');
  }

  openMeathPage(){
    this.navCtrl.push('MeathPage');
  }

  openOffalyPage(){
    this.navCtrl.push('OffalyPage');
  }

  openWestmeathPage(){
    this.navCtrl.push('WestmeathPage');
  }

  openWexfordPage(){
    this.navCtrl.push('WexfordPage');
  }

  openWicklowPage(){
    this.navCtrl.push('WicklowPage');
  }

}
