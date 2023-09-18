import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountPageRoutingModule } from './account-routing.module';
import { AccountPage } from './account.page';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  declarations: [AccountPage],
  providers: [
    {provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true  }},
  ]
})
export class AccountPageModule {}