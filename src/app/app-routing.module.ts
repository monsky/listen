import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'individual',
    loadChildren: () => import('./pages/individual/individual.module').then( m => m.IndividualPageModule)
  },
  {
    path: 'city-tours',
    loadChildren: () => import('./pages/city-tours/city-tours.module').then( m => m.CityToursPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
