import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoomComponent } from 'src/app/hotel-room/hotel-room.component';
import { OfferComponent } from 'src/app/offer/offer.component';
import { MapComponent } from 'src/app/map/map.component';



@NgModule({
  declarations: [
    HotelRoomComponent,
    OfferComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HotelRoomComponent,
    MapComponent,
    OfferComponent,
  ]
})
export class SharedModule { }
