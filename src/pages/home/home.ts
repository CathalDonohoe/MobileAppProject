import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  openUlsterPage(){
    this.navCtrl.push('UlsterCountiesPage');
  }

  openMunsterPage(){
    this.navCtrl.push('MunsterCountiesPage');
  }

  openConnachtPage(){
    this.navCtrl.push('ConnachtCountiesPage');
  }

  openLeinsterPage(){
    this.navCtrl.push('LeinsterCountiesPage');
  }
}