import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../model-response';

@Component({
  selector: 'app-hotel-room',
  templateUrl: './hotel-room.component.html',
  styleUrls: ['./hotel-room.component.css']
})
export class HotelRoomComponent implements OnInit {

  @Input() room:Room;
  @Input() checkDays:any;


  constructor() { }

  ngOnInit(): void {

    console.log(this.room);
    
  }

}
