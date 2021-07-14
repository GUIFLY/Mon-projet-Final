import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { TreatmentCategoryInterface } from 'src/model/TreatmentCategory';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.page.html',
  styleUrls: ['./medicaments.page.scss'],
})
export class MedicamentsPage implements OnInit {

  options: any;

  items: Array<TreatmentCategoryInterface> = [
    { id: 1, title: "Soin des yeux", icon: "md-eye", forwardIcon: true },
    { id: 2, title: "Mode de vie sain", icon: "md-eye", forwardIcon: true },
    { id: 3, title: "Conditions liées", icon: "md-eye", forwardIcon: true },
    { id: 4, title: "Santé Homme", icon: "md-eye", forwardIcon: true },
    { id: 5, title: "Grossesse & Garde d'enfants", icon: "md-eye", forwardIcon: true },
    { id: 6, title: "Psychologie", icon: "md-eye", forwardIcon: true },
    { id: 7, title: "Santé sexuelle", icon: "md-eye", forwardIcon: true },
    { id: 8, title: "Santé de la peau", icon: "md-eye", forwardIcon: true },
    { id: 9, title: "Santé adolescents", icon: "md-eye", forwardIcon: true },
    { id: 10, title: "Santé femme", icon: "md-eye", forwardIcon: true },
    { id: 11, title: "Yoga", icon: "md-eye", forwardIcon: true }
  ];
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
    if (navParams.data != undefined) {
      this.options = navParams.data;
    }
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentsPage');
  }

  healthItemOnClick(item: TreatmentCategoryInterface) {
    this.navCtrl.navigateForward('medicaments-post');
    // this.router.navigate(['medicaments-Post', item])
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      search: ['']
    });

  }
}
