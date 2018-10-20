import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

/**
 * Generated class for the TimeoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeoff',
  templateUrl: 'timeoff.html',
  template: `
    <form (ngSubmit)="logForm()">
    <ion-header>

      <ion-navbar>
        <ion-title>timeoff</ion-title>
      </ion-navbar>

    </ion-header><br><br><br><br>
    <ion-list padding center text-center>
    <ion-item>
      <ion-label>TimeOff</ion-label>
      <ion-datetime displayFormat="HH:mm" [(ngModel)]="TimeOff" name='timeoff'></ion-datetime>
    </ion-item>
    <ion-item *ngFor="let item of items | async">
        <ion-label>{{item.key}} Light: {{item.light}}</ion-label>
        <ion-checkbox [(ngModel)]="item.i" (click)="isChecked($event)" [ngModelOptions]="{standalone:true}"></ion-checkbox>
      </ion-item>
    <button ion-button color="dark" click="Timeoff(item.key)">Submit</button>
  </ion-list>
    </form>
  `,
})
export class TimeoffPage {
  items: Observable<any[]>;
  items2: Observable<any[]>;
  TimeOff

  isChecked(event): void {
    var isChecked = event.currentTarget.checked;
    console.log(isChecked);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase) {
    this.items = this.afDB.list('Rooms').valueChanges();
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
    console.log('ionViewDidLoad TimeoffPage');
  }
  Timeoff() {
    this.afDB.list("/Rooms/").push({
      time : this.TimeOff.format()
    });
  }
  logForm() {
    console.log(this.TimeOff)
  }

}
