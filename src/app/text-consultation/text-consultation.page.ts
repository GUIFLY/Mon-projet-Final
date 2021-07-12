import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-text-consultation',
  templateUrl: './text-consultation.page.html',
  styleUrls: ['./text-consultation.page.scss'],
})
export class TextConsultationPage implements OnInit {
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder,) {
      this.buildForm();
  }


  ngOnInit() {
  }
  private buildForm() {

    this.form = this.formBuilder.group({
      username: ['']
    });

  }

}
