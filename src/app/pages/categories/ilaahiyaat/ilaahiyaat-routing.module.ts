import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlaahiyaatPage } from './ilaahiyaat.page';

const routes: Routes = [
  {
    path: '',
    component: IlaahiyaatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlaahiyaatPageRoutingModule {}
