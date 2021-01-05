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
  public daysToBook: number;
  public pricePerDay: number;
  public starsNumber: Array<any> = [];
  @Input() hotel: Hotel;
  @Input() checkDays: any;

  constructor(
    private hotelService: HotelService
  ) {
    this.expandRoomsContent = false
  }

  ngOnInit(): void {
    // this.hotelService.getHotelDetails(this.hotel.code).subscribe(val => console.log(val))
    this.rooms = this.hotel.rooms;
    this.daysToBook = this.hotelService.calDayToBook(this.checkDays.checkIn,this.checkDays.checkOut)
    this.pricePerDay = Number(this.hotel.minRate) / this.daysToBook

    this.getStars()
  }

  toggleMoreRooms() {
    this.expandRoomsContent = !this.expandRoomsContent
  }

  getStars(){
    const number = Number(this.hotel.categoryCode[0]) 
    
    if(typeof(number) == 'number' &&  !isNaN(number)){
      
      this.starsNumber =  Array(number).fill(1).map(val=>val)
      
    }
  }

  
}
