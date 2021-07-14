import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageChatPageRoutingModule } from './page-chat-routing.module';

import { PageChatPage } from './page-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    PageChatPageRoutingModule
  ],
  declarations: [PageChatPage]
})
export class PageChatPageModule {}
