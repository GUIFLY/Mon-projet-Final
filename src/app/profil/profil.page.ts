import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProfileSetting } from 'src/model/ProflieSetting';
import { User } from 'src/model/User';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user: User = {
    full_name: 'BOCOBI 2',
    profileImage: 'assets/imgs/logo.png',
    coverImage: 'assets/imgs/sample_1.jpg',
    username: '@e-health bocobi2',
    email: 'martinien@gmail.com'
  };

  profileSettings: Array<ProfileSetting> = [
    {text: 'Mon compte', icon: 'bookmarks-outline', forwardIcon: true},
    {text: 'Mes questions et reponses', icon: 'document-text-outline', forwardIcon: true},
    {text: 'Ma Video Consultation', icon: 'videocam-outline', forwardIcon: true},
    {text: 'Mon Rapport', icon: 'document-text-outline', forwardIcon: true},
    {text: 'Autres', icon: 'flask-outline', forwardIcon: true},
    {text: 'Enregistrement', icon: 'cloudy-outline', forwardIcon: true},
    {text: 'Déconnexion', icon: 'log-out-outline', forwardIcon: true},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
  }

}
