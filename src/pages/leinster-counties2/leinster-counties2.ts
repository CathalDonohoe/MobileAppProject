import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'./../home/home';


/**
 * Generated class for the LeinsterCounties2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leinster-counties2',
  templateUrl: 'leinster-counties2.html',
})
export class LeinsterCounties2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterCounties2Page');
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

  openLeinsterCountiesPage(){
    this.navCtrl.push('LeinsterCountiesPage')
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }
  
}
