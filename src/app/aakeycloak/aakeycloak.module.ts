import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AakeycloakPageRoutingModule } from './aakeycloak-routing.module';

import { AakeycloakPage } from './aakeycloak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AakeycloakPageRoutingModule
  ],
  declarations: [AakeycloakPage]
})
export class AakeycloakPageModule {}
