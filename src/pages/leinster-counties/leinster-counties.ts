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


  openLeinsterCounties2(){
    this.navCtrl.push('LeinsterCounties2Page');
  }

}
