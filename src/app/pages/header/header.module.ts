import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';

import { HeaderPage } from './header.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [HeaderPage] ,
  exports: [HeaderPage]
})
export class HeaderPageModule {}
