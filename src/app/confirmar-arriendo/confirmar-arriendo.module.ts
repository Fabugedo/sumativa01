import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ConfirmarArriendoPageRoutingModule } from './confirmar-arriendo-routing.module';
import { ConfirmarArriendoPage } from './confirmar-arriendo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarArriendoPageRoutingModule
  ],
  declarations: [ConfirmarArriendoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmarArriendoPageModule {}
