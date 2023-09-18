import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public sitter: boolean = true;
  constructor(public navCtrl: NavController) {

  }
  change(){
    console.log(this.sitter);
  }

}
