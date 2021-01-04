import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsDashboardComponent } from './hotels-dashboard/hotels-dashboard.component';
import { AsideFiltersComponent } from './aside-filters/aside-filters.component';
import { HotelsOrderComponent } from './hotels-order/hotels-order.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelRoomComponent } from './hotel-room/hotel-room.component';
import { OfferComponent } from './offer/offer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HotelsDashboardComponent,
    AsideFiltersComponent,
    HotelsOrderComponent,
    HotelCardComponent,
    HotelRoomComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
