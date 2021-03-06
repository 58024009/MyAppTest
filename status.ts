import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  items: Observable<any[]>;
  items2: Observable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB:AngularFireDatabase) {
    // this.items = afDB.list('Rooms').valueChanges();
    this.items = afDB.list('Rooms').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({
          key: a.key,...a.payload.val()
        }
        ))
      )
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
