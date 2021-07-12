import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, } from '@ionic/angular';

@Component({
  selector: 'app-book-appointment-confirmation',
  templateUrl: './book-appointment-confirmation.page.html',
  styleUrls: ['./book-appointment-confirmation.page.scss'],
})
export class BookAppointmentConfirmationPage implements OnInit {
  options: any;
  pageReady: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    // public viewController: ViewController
    ) {

      if (navParams.data) {
        this.options = navParams.data;
        this.pageReady = true;
        console.log(this.options);
      }
  }


  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAppointmentConfirmationPage');
  }

  // confirmOnClick() {
  //   this.viewController.dismiss({confirm: true});
  // }

  // cancelOnClick() {
  //   this.viewController.dismiss({confirm: false});
  // }


}
