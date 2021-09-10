import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./pages/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'ilaahiyaat',
    loadChildren: () => import('./pages/categories/ilaahiyaat/ilaahiyaat.module').then( m => m.IlaahiyaatPageModule)
  },
  {
    path: 'mouhamadiyaat',
    loadChildren: () => import('./pages/categories/mouhamadiyaat/mouhamadiyaat.module').then( m => m.MouhamadiyaatPageModule)
  },
  {
    path: 'ahmadiyaat',
    loadChildren: () => import('./pages/categories/ahmadiyaat/ahmadiyaat.module').then( m => m.AhmadiyaatPageModule)
  },
  {
    path: 'tidianiyaat',
    loadChildren: () => import('./pages/categories/tidianiyaat/tidianiyaat.module').then( m => m.TidianiyaatPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
