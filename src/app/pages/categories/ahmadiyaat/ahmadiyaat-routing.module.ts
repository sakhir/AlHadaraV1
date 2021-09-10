import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhmadiyaatPage } from './ahmadiyaat.page';

const routes: Routes = [
  {
    path: '',
    component: AhmadiyaatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhmadiyaatPageRoutingModule {}
