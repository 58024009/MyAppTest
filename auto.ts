import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TimePage } from '../time/time';
import { GpsPage } from '../gps/gps';

/**
 * Generated class for the AutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auto',
  templateUrl: 'auto.html',
})
export class AutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoPage');
  }
  GoToTime(){
    this.navCtrl.push(TimePage)
  }
  GoToGPS(){
    this.navCtrl.push(GpsPage)
  }
}
