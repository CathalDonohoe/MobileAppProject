import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  information:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  openStatusPage(){
    this.navCtrl.push("StatusPage");
  }

  ionViewWillEnter() {
    this.storage.get("status").then((val) => {
      this.information=val;
  
  }).catch((err)=>{
    console.log(err);
  })
}

 
}
