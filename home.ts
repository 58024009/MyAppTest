import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { text } from '@angular/core/src/render3/instructions';
//import { listChanges } from 'angularfire2/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  items2: Observable<any[]>;
  myInput

  constructor(public navCtrl: NavController,public afDB: AngularFireDatabase) {
    this.items = this.afDB.list('Rooms').valueChanges();
  }

  GoToMenu(){
    this.navCtrl.push(MenuPage)
  }

  btnAddClicked(){
    
    this.afDB.object('/Rooms/Room01').update({
      light : this.myInput,
      status : true,
      i : this.myInput,
      
    });

  }
  deleted(){
    this.afDB.list('/Room01/').remove()
  }
  
}
