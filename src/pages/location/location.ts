import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  lat: any;
  lng: any;
  visible: boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }


  location(){
    if(this.visible=true){
      this.visible=false;
      let meh = this.geolocation.watchPosition();
      meh.subscribe((data) =>{
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
      });
    }

    else{
      this.visible = true;
    }
  }
}