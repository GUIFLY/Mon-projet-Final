import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametrePage');
  }
toggleTheme(event: { detail: { checked(); }; }){
  if(event.detail.checked){
   document.body.setAttribute('color-theme','dark')
 }
}
profil(){
  this.navCtrl.navigateForward('/profil')
}

userconnect(){
  this.navCtrl.navigateForward('/text-consultation')
}

bmw(){
  this.navCtrl.navigateForward('/testget')
}

}
