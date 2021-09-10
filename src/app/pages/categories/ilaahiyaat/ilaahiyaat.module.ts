import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlaahiyaatPageRoutingModule } from './ilaahiyaat-routing.module';

import { IlaahiyaatPage } from './ilaahiyaat.page';
import { HeaderPageModule } from '../../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlaahiyaatPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [IlaahiyaatPage]
})
export class IlaahiyaatPageModule {}
