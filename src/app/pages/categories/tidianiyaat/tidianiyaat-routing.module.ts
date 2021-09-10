import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TidianiyaatPage } from './tidianiyaat.page';

const routes: Routes = [
  {
    path: '',
    component: TidianiyaatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TidianiyaatPageRoutingModule {}
