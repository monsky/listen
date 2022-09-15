import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityToursPage } from './city-tours.page';

const routes: Routes = [
  {
    path: '',
    component: CityToursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityToursPageRoutingModule {}
