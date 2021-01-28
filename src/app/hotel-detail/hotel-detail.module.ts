import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelDetailRoutingModule } from './hotel-detail-routing.module';
import { HotelDetailComponent } from './hotel-detail.component';


@NgModule({
  declarations: [HotelDetailComponent],
  imports: [
    CommonModule,
    HotelDetailRoutingModule,
  ]
})
export class HotelDetailModule { }
