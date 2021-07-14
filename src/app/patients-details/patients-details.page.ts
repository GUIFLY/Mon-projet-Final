import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.page.html',
  styleUrls: ['./patients-details.page.scss'],
})
export class PatientsDetailsPage implements OnInit {

  
  genders: Array<{ id: string, title: string }> = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'}
  ];
  private form: FormGroup;
  public submitted: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  
    this.buildForm();
  
  }
  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsDetailsPage');
  }


  validatePasswordAction() {

    this.navCtrl.navigateForward('/text-consultation-booking');
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      full_name: [''],
      age: [''],
      gender: [''],
      weight: [''],
      height: [''],
      address: [''],
      city: ['']
    });

  }


}
