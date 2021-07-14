import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { TextConsultationServiceInterface } from 'src/model/TextConsultation';
import { TreatmentCategoryInterface } from 'src/model/TreatmentCategory';

@Component({
  selector: 'app-text-consultation-booking',
  templateUrl: './text-consultation-booking.page.html',
  styleUrls: ['./text-consultation-booking.page.scss'],
})
export class TextConsultationBookingPage implements OnInit {

  specialist: Array<TreatmentCategoryInterface> = [
    {id: 1, title: "Cardiologue"},
    {id: 2, title: "Dentiste"},
    {id: 3, title: "Dermatologue"},
    {id: 4, title: "Diabetiste"}
  ];
  textConsultationServices: Array<TextConsultationServiceInterface> = [
    {id: 1, text: "demander un Generaliste (1 suivi gratuit)", amount: 250, treatmentCategory: null},
    {id: 2, text: "demander un Specialiste (1 suivi gratuit)", amount: 500, treatmentCategory: this.specialist},
    {id: 3, text: "demander un consultant (1 suivi gratuit)", amount: 1000, treatmentCategory: this.specialist},
  ];
  private form: FormGroup;
  public submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertController: AlertController) {
      this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextConsultationBookingPage');
  }

  async validatePasswordAction() {
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }

    (await this.alertController.create({
      // title: "Hey",
      message: "Nous allons vous rediriger vers le payement"
    })).present();


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      promo: ['']
    });

  }


  ngOnInit() {
  }

}
