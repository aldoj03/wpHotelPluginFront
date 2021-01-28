import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotelID
  public hotel
  public hotelImages = []
  public imagesArray = []

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) { 
    this.route.queryParams.subscribe(params => {
      this.hotelID = params['id'];
      this.hotelService.getSingleHotel(this.hotelID)
      .subscribe(val=>{
        if(val){
          console.log(JSON.parse(val))
          this.hotel = JSON.parse(val).hotel
          this.initHotelImages()
        }
      })
  });
  }

  ngOnInit(): void {

  }

  initHotelImages(){
   this.imagesArray =  this.hotel.images.map(val=>'http://photos.hotelbeds.com/giata/bigger/' + val.path)
  }
}
