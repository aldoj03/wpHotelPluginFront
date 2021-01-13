import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsDahsboardRoutingModule } from './hotels-dahsboard-routing.module';
import { HotelsDashboardComponent } from './hotels-dashboard.component';
import { AsideFiltersComponent } from '../aside-filters/aside-filters.component';
import { HotelsOrderComponent } from '../hotels-order/hotels-order.component';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import { HotelRoomComponent } from '../hotel-room/hotel-room.component';
import { OfferComponent } from '../offer/offer.component';


@NgModule({
  declarations: [
    HotelsDashboardComponent,
     AsideFiltersComponent, 
     HotelsOrderComponent, 
     HotelCardComponent,
    HotelRoomComponent,
  OfferComponent],
     
  imports: [
    CommonModule,
    HotelsDahsboardRoutingModule
  ]
})
export class HotelsDahsboardModule { }
