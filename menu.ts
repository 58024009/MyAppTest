import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ManualPage } from '../manual/manual';
import { AutoPage } from '../auto/auto';
import { StatusPage } from '../status/status';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  GoToStatus(){
    this.navCtrl.push(StatusPage)
  }
  GoToAuto(){
    this.navCtrl.push(AutoPage)
  }
  GoToManual(){
    this.navCtrl.push(ManualPage)
  }

}
