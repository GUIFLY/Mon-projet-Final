import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthKeyPageRoutingModule } from './auth-key-routing.module';

import { AuthKeyPage } from './auth-key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthKeyPageRoutingModule
  ],
  declarations: [AuthKeyPage]
})
export class AuthKeyPageModule {}
