import { Component, OnInit, Input } from '@angular/core';
import { Hotel, json } from '../model-response'
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-hotels-dashboard',
  templateUrl: './hotels-dashboard.component.html',
  styleUrls: ['./hotels-dashboard.component.css']
})
export class HotelsDashboardComponent implements OnInit {


  public hotels: Array<any>;
  public hotelsFiltered: Array<any>;
  public checkDays: any;
  public pricesFilter: Array<string>;
  public categoriesFilter: Array<any>;
  public searchString: string;

  constructor(
    private hotelService: HotelService
  ) {

    this.pricesFilter = []
    this.categoriesFilter = []
  }


  ngOnInit(): void {
    this.hotels = json.hotels
    this.checkDays = {
      checkIn: json.checkIn,
      checkOut: json.checkOut
    }
    this.hotelsFiltered = [...this.hotels]
    console.log(this.hotels);

  }

  identify(index, item) {
    return item.code;
  }


  filterHotels() {

    this.hotelsFiltered = this.filterPrice()
    console.log(this.hotelsFiltered);

    this.hotelsFiltered = this.filterCategory()
    console.log(this.hotelsFiltered);

    // this.hotelsFiltered = this.filterSeachString()
    // console.log(this.hotelsFiltered);



  }

  filterPrice() {
    let params = [];
    this.pricesFilter.map((val, index) => {
      const stringSeperated = val.split('-')
      const min = Number(stringSeperated[0])
      const max = Number(stringSeperated[1])

      params.push({ min, max })
    })

    let hotelsFiltered = [];
    this.hotels.forEach((hotel, index) => {

      const hotelRate = Number(hotel.minRate)
      const days = this.hotelService.calDayToBook(this.checkDays.checkIn, this.checkDays.checkOut)
      const pricePerDay = hotelRate / days

      params.forEach(val => {

        if (hotelRate >= val.min && pricePerDay <= val.max) hotelsFiltered.push(hotel)

      })
    })

    return this.pricesFilter.length == 0 ? this.hotels : [...hotelsFiltered]

  }

  filterCategory() {

    if (this.categoriesFilter.length == 0) return this.hotelsFiltered
    let arrayLocal = []

    this.hotelsFiltered.forEach(hotel => {

      this.categoriesFilter.forEach(cat => {
        if (hotel.categoryCode.includes(cat)) arrayLocal.push(hotel)
      });

    });

    return [...arrayLocal]
  }

  filterSeachString() {
    console.log(this.searchString);
    
    // if (this.searchString.length < 3) return this.hotelsFiltered
    // let arrayLocal = this.hotelsFiltered.filter(hotel => hotel.name.includes(this.searchString));

    return []
  }
}
