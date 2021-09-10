import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MouhamadiyaatPageRoutingModule } from './mouhamadiyaat-routing.module';

import { MouhamadiyaatPage } from './mouhamadiyaat.page';
import { HeaderPageModule } from '../../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MouhamadiyaatPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [MouhamadiyaatPage]
})
export class MouhamadiyaatPageModule {}
