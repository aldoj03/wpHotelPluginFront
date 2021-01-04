import { Component, Input, OnInit } from '@angular/core';
import { Hotel, Room } from '../model-response';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  public expandRoomsContent: boolean;
  public rooms: Array<Room>;
  @Input() hotel: Hotel;
  @Input() checkDays: Hotel;

  constructor(
    private hotelService: HotelService
  ) {
    this.expandRoomsContent = false
  }

  ngOnInit(): void {
    this.hotelService.getHotelDetails(this.hotel.code).subscribe(val => console.log(val))
    this.rooms = this.hotel.rooms;
  }

  toggleMoreRooms() {
    this.expandRoomsContent = !this.expandRoomsContent
  }

}
