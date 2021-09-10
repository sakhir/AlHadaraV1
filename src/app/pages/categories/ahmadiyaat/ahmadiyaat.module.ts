import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhmadiyaatPageRoutingModule } from './ahmadiyaat-routing.module';

import { AhmadiyaatPage } from './ahmadiyaat.page';
import { HeaderPageModule } from '../../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhmadiyaatPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [AhmadiyaatPage]
})
export class AhmadiyaatPageModule {}
