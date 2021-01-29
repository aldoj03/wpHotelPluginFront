import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../model-response'
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-hotels-dashboard',
  templateUrl: './hotels-dashboard.component.html',
  styleUrls: ['./hotels-dashboard.component.css']
})
export class HotelsDashboardComponent implements OnInit {


  public hotels: Array<Hotel>;
  public loading:boolean
  public hotelsFiltered: Array<any>;
  public checkDays: any;
  public pricesFilter: Array<string>;
  public pointsFilter: number = 0;
  public regimenFilters: Array<string>;
  public categoriesFilter: Array<any>;
  public searchString: string = '';
  public total;
  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) {
    this.pricesFilter = []
    this.categoriesFilter = []
    this.regimenFilters = []
    this.total = 0
    this.loading = true
  }
  
  
  ngOnInit(): void { 
  
      this.getHotels()

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


    this.hotelsFiltered = this.filterRegimen()
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


  



  filterRegimen(){
    if (this.regimenFilters.length == 0) return this.hotelsFiltered
    let arrayLocal = []

    this.hotelsFiltered.forEach(hotel => {

      this.regimenFilters.forEach(regimen => {
        if(hotel.boardCodes){

          if (hotel.boardCodes.includes(regimen)) arrayLocal.push(hotel)
        }else{
          arrayLocal.push(hotel)
        }
      });

    });

    return [...arrayLocal]
  }

 setPointFilter(point){
  this.pointsFilter = point
 }

 getNewPage(){
   console.log(this.hotelService.getPagination);
   this.getHotels(true)
 }

 getHotels(filter = false){
   this.loading = true
  const id = window.location.hash.replace('#','');
  const page = this.hotelService.getPagination
  this.hotelService.getHotels(id,page).subscribe(val =>{
    console.log(val);
    this.hotels = val['hotels']
    this.total = val['checkDays'].total
    this.hotelsFiltered = [...this.hotels]
    if(filter){
      this.filterHotels()
    }
    // console.log(this.hotels);
    this.checkDays = {
      checkIn: val['checkDays'].checkIn,
      checkOut: val['checkDays'].checkOut
    }
    this.loading = false
  })


 }
}
