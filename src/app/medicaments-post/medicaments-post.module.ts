import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentsPostPageRoutingModule } from './medicaments-post-routing.module';

import { MedicamentsPostPage } from './medicaments-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    MedicamentsPostPageRoutingModule
  ],
  declarations: [MedicamentsPostPage]
})
export class MedicamentsPostPageModule {}
