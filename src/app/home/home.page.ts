import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @ViewChild(Slides) slides: Slides;
  @ViewChild(IonSlides) slides: IonSlides;
  skipMsg: string="Skip"

  constructor(public navCtrl: NavController, private alertController: AlertController) {
  }

  skip(){
    this.navCtrl.navigateForward("/detail")
    console.log('ddddddd DetailPage');
  }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad DetailPage');
    }
    SlideChanged(){
    if (this.slides.isEnd())
    this.skipMsg="Merçi"
  }

}