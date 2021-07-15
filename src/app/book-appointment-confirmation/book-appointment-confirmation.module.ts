import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAppointmentConfirmationPageRoutingModule } from './book-appointment-confirmation-routing.module';

import { BookAppointmentConfirmationPage } from './book-appointment-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    BookAppointmentConfirmationPageRoutingModule
  ],
  declarations: [BookAppointmentConfirmationPage]
})
export class BookAppointmentConfirmationPageModule {}
