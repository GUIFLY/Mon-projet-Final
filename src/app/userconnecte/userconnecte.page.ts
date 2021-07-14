import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-userconnecte',
  templateUrl: './userconnecte.page.html',
  styleUrls: ['./userconnecte.page.scss'],
})
export class UserconnectePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserconnectePage');
  }

  openListUsers() {
    this.navCtrl.navigateForward('/userlist');
  }

  expression(){
    this.navCtrl.navigateForward('/teleconsultation')
  }
  examen(){
    this.navCtrl.navigateForward('/examen')
  }
  rdv(){
    this.navCtrl.navigateForward('/rendez-vous')
  }
  abonnement(){
    this.navCtrl.navigateForward('/abonnement')
  }

}
