import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
  public isToggled: boolean;
  items: Observable<any[]>;
  light: Observable<any[]>;
  arrData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
    this.isToggled = false;

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
    console.log('ionViewDidLoad ManualPage');
  }
  public notify(key, status: boolean) {
    console.log("Toggled: " + key + ":" + status);

    this.afDB.list('Rooms/').update(key, {
      text: "หลอดนี้กำลัง" + status,
      status: status
    })
  }
}
