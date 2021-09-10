import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MouhamadiyaatPage } from './mouhamadiyaat.page';

const routes: Routes = [
  {
    path: '',
    component: MouhamadiyaatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouhamadiyaatPageRoutingModule {}
