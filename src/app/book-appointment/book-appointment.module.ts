import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAppointmentPageRoutingModule } from './book-appointment-routing.module';

import { BookAppointmentPage } from './book-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    BookAppointmentPageRoutingModule
  ],
  declarations: [BookAppointmentPage]
})
export class BookAppointmentPageModule {}
