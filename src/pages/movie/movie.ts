import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import {HomePage} from'./../home/home';


@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movies:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider:MovieProvider) {

  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad(){
    this.movieProvider.getFilmInfo().subscribe((data)=>{
      this.movies = data.Search;
    });
  }
}
