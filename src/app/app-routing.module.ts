import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'create',
    loadChildren: './create/create.module#CreatePageModule'
  },
  {
    path: 'details/:id',
    loadChildren: './details/details.module#DetailsPageModule'
  },
  {
    path: 'edit',
    loadChildren:'./edit/edit.module#EditPageModule'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
