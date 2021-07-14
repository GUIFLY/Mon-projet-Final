import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Notification} from "../../model/Notification";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  
  
  notifications: Array<Notification> = [{
    title: 'Super Offre',
    description: 'Enjoy 25% off on your every first video call.  Random Text From server, I am having a good time with Daktar online app.',
    date_time: Date()
  },
    {
      title: 'Super Offre',
      description: 'Enjoy 25% off on your every first video call.',
      date_time: Date(),
    },
    {
      title: 'Super Offre',
      description: 'Bénéficez de 25% pour vos premiers appel vidéo.',
      date_time: Date()
    }];


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
