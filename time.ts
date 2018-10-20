import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TimeonPage } from '../timeon/timeon';
import { TimeoffPage } from '../timeoff/timeoff';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }
  GoToTimeOn(){
    this.navCtrl.push(TimeonPage)
  }
  GoToTimeOff(){
    this.navCtrl.push(TimeoffPage)
  }
}
