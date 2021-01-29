import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoomComponent } from 'src/app/hotel-room/hotel-room.component';
import { OfferComponent } from 'src/app/offer/offer.component';



@NgModule({
  declarations: [
    HotelRoomComponent,
    OfferComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HotelRoomComponent,
    OfferComponent
  ]
})
export class SharedModule { }
