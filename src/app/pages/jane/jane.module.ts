import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JanePageRoutingModule } from './jane-routing.module';

import { JanePage } from './jane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JanePageRoutingModule
  ],
  declarations: [JanePage]
})
export class JanePageModule {}
