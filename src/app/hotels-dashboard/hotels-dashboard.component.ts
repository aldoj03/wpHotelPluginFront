import { Component, OnInit, Input } from '@angular/core';
import { Hotel, json } from '../model-response'
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-hotels-dashboard',
  templateUrl: './hotels-dashboard.component.html',
  styleUrls: ['./hotels-dashboard.component.css']
})
export class HotelsDashboardComponent implements OnInit {


  public hotels: Array<Hotel>;
  public hotelsFiltered: Array<any>;
  public checkDays: any;
  public pricesFilter: Array<string>;
  public categoriesFilter: Array<any>;
  public searchString: string = '';
  public total;
  constructor(
    private hotelService: HotelService
  ) {
    this.pricesFilter = []
    this.categoriesFilter = []
    this.total = 0
  }


  ngOnInit(): void { 
    const paramsUrl = '?countryCode=ES&destinationCode=MAD&fields=all'
    this.hotelService.getHotelsFiltered({'a':2}).subscribe(val =>{
      console.log(val);
      this.hotels = val['hotels']
      this.total = val['checkDays'].total
      this.hotelsFiltered = [...this.hotels]
      console.log(this.hotels);
      this.checkDays = {
        checkIn: val['checkDays'].checkIn,
        checkOut: val['checkDays'].checkOut
      }
      
    }
    )
    // this.hotels = json.hotels
    this.checkDays = {
      checkIn: json.checkIn,
      checkOut: json.checkOut
    }

  }

  identify(index, item) {
    return item.code;
  }


  filterHotels() {

    this.hotelsFiltered = this.filterPrice()
    // console.log(this.hotelsFiltered);

    this.hotelsFiltered = this.filterCategory()
    // console.log(this.hotelsFiltered);

    this.hotelsFiltered = this.filterSeachString()
    // console.log(this.hotelsFiltered);

    // this.hotelsFiltered = this.filterGlobal()

    // this.getFilteredHotels()


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
        
        if (pricePerDay >= val.min && pricePerDay <= val.max) hotelsFiltered.push(hotel)

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

    if (this.searchString.length < 3) return this.hotelsFiltered
    let arrayLocal = this.hotelsFiltered.filter(hotel => hotel.name.toLowerCase().includes(this.searchString.toLowerCase()));

    return [...arrayLocal]
  }

  setSearchString(ev) {
    this.searchString = ev
    console.log(this.searchString);
    this.filterHotels()
  }


  filterGlobal() {

    let params = [];
    this.pricesFilter.map((val, index) => {
      const stringSeperated = val.split('-')
      const min = Number(stringSeperated[0])
      const max = Number(stringSeperated[1])

      params.push({ min, max })
    })
    const filtersObject = {
      price: params,
      category: this.categoriesFilter,
      string: this.searchString
    }

    console.log(filtersObject);

    const days = this.hotelService.calDayToBook(this.checkDays.checkIn, this.checkDays.checkOut)

    let arrayLocal = [];
    let flagAdded = false;
    this.hotels.forEach(hotel => {


      if (this.searchString.length > 3) {

        if (hotel.name.toLowerCase().includes(filtersObject.string.toLowerCase())) {

          arrayLocal.push(hotel)
        }
      }

      if (!flagAdded && filtersObject.category.length > 0) {

        if (filtersObject.category.length != 0) {
          filtersObject.category.forEach(cat => {
            if (hotel.categoryCode.includes(cat)) {
              arrayLocal.push(hotel)
              flagAdded = true
            }
          });
        }
      }

      if (!flagAdded && filtersObject.price.length > 0) {
        const hotelRate = Number(hotel.minRate)
        const pricePerDay = hotelRate / days

        filtersObject.price.forEach(val => {

          if (hotelRate >= val.min && pricePerDay <= val.max) arrayLocal.push(hotel)

        })

      }
    })

    console.log(arrayLocal);

    return [...arrayLocal]
  }


  getFilteredHotels(){


    let params = [];
    this.pricesFilter.map((val, index) => {
      const stringSeperated = val.split('-')
      const min = Number(stringSeperated[0])
      const max = Number(stringSeperated[1])

      params.push({ min, max })
    })
    const filtersObject = {
      price: params,
      category: this.categoriesFilter,
      string: this.searchString
    }

    console.log(filtersObject);
    const paramsUrl = '?countryCode=ES&destinationCode=MAD&fields=all'
    this.hotelService.getHotelsFiltered(filtersObject).subscribe(hotels=>{
      console.log((hotels));
      
    })
  }

 
}
