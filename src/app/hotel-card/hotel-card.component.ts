import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  public expandRoomsContent:boolean;
  public rooms:Array<any>;

  constructor() {
    this.rooms = [1,2,3,4];
    this.expandRoomsContent = false
   }

  ngOnInit(): void {
  }

  toggleMoreRooms(){
    this.expandRoomsContent = !this.expandRoomsContent
  }

}
