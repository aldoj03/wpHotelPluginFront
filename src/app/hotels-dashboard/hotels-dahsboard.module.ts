import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsDahsboardRoutingModule } from './hotels-dahsboard-routing.module';
import { HotelsDashboardComponent } from './hotels-dashboard.component';
import { AsideFiltersComponent } from '../aside-filters/aside-filters.component';
import { HotelsOrderComponent } from '../hotels-order/hotels-order.component';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import { HotelRoomComponent } from '../hotel-room/hotel-room.component';
import { OfferComponent } from '../offer/offer.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    HotelsDashboardComponent,
    AsideFiltersComponent,
    HotelsOrderComponent,
    HotelCardComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    HotelsDahsboardRoutingModule,
    SharedModule
  ]
})
export class HotelsDahsboardModule { }
