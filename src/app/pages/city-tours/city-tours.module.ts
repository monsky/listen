import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityToursPageRoutingModule } from './city-tours-routing.module';

import { CityToursPage } from './city-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityToursPageRoutingModule
  ],
  declarations: [CityToursPage]
})
export class CityToursPageModule {}
