import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelDetailRoutingModule } from './hotel-detail-routing.module';
import { HotelDetailComponent } from './hotel-detail.component';
import { SharedModule } from '../shared/shared/shared.module';
import { MapComponent } from '../map/map.component';


@NgModule({
  declarations: [
    HotelDetailComponent,
  ],
  imports: [
    CommonModule,
    HotelDetailRoutingModule,
    SharedModule
  ]
})
export class HotelDetailModule { }
