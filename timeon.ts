import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

/**
 * Generated class for the TimeonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeon',
  templateUrl: 'timeon.html',
})
export class TimeonPage {
  items: Observable<any[]>;
  items2: Observable<any[]>;

  TimeOn: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase) {
    this.TimeOn=this.calculateTime('+7');
    this.items = afDB.list('Rooms').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({
          key: a.key,...a.payload.val()
        }
        ))
      )
    );
  }

  calculateTime(offset: any){
    let d = new Date();
    let nd = new Date(d.getTime() + (3600000 * offset));
    return nd.toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeonPage');
    console.log('nd');
  }

}
