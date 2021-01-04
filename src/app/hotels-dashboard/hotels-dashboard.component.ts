import { Component, OnInit } from '@angular/core';
import { json } from '../model-response'
@Component({
  selector: 'app-hotels-dashboard',
  templateUrl: './hotels-dashboard.component.html',
  styleUrls: ['./hotels-dashboard.component.css']
})
export class HotelsDashboardComponent implements OnInit {

  public hotels: Array<any>;
  public daysToBook: number;
  public checkDays: any;

  constructor() { }

  ngOnInit(): void {
    console.log(json);
    this.hotels = json.hotels
    this.checkDays = {
      checkIn :json.checkIn,
      checkOut: json.checkOut
    }
  }

  identify(index, item) {
    return item.code;
  }

 

}
