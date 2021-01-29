import { Component, Input, OnInit } from '@angular/core';
import { Hotel, Room } from '../model-response';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  public pathUrl = 'http://photos.hotelbeds.com/giata/'
  public expandRoomsContent: boolean;
  public rooms: Array<Room>;
  public daysToBook: number;
  public pricePerDay: number;
  public urlMap: string;
  public starsNumber: Array<any> = [];
  public rank: number;
  public shortDesc: boolean;
  public toggleShowMap: boolean = false
  public show: boolean;
  public center;
  @Input() hotel: Hotel;
  @Input() checkDays: any;
  @Input() regimenFilters: any;

  constructor(
    private hotelService: HotelService
  ) {
    this.expandRoomsContent = false
    this.shortDesc = true
  }

  ngOnInit(): void {
    const ranking  = Math.floor(this.hotel.ranking / 10) 
    this.rank = ranking == 0 ? 1 : ranking
    this.rooms = this.hotel.rooms;
    this.pathUrl += this.hotel.images.path 
    this.daysToBook = this.hotelService.calDayToBook(this.checkDays.checkIn,this.checkDays.checkOut)
    this.pricePerDay = Number(this.hotel.minRate) / this.daysToBook
    this.urlMap = `https://maps.google.com/?q=${this.hotel.latitude},${this.hotel.longitude}`
    this.center = {lat:this.hotel.latitude, lng: this.hotel.longitude}
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

  goHotelDetail(){
    
  }

  showMap(){
    this.toggleShowMap = !this.toggleShowMap
  }
  
}
