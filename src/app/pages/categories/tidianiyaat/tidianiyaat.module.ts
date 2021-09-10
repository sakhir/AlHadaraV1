import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TidianiyaatPageRoutingModule } from './tidianiyaat-routing.module';

import { TidianiyaatPage } from './tidianiyaat.page';
import { HeaderPageModule } from '../../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TidianiyaatPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [TidianiyaatPage]
})
export class TidianiyaatPageModule {}
