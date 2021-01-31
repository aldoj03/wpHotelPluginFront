import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { switchMap } from 'rxjs/operators/';
import { Room } from '../model-response';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit, OnDestroy {

  public hotelID
  public subscription: Subscription
  public hotel
  public hotelImages = []
  public imagesArray = []
  public checkInData
  public loading = true
  public rooms: Array<Room> = []
  public daysToBook
  public pricePerDay
  public nearPlaces = []
  public facilities = []
  public foods = []
  public otherServices = []
  public starsNumber = []
  public rank 

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {

    this.subscription = this.route.queryParams.pipe(switchMap(params => {
      this.hotelID = params['id'];
      const checkInData = JSON.parse(window.localStorage.getItem('checkInData'))
      this.checkInData = {
        hotelCode: this.hotelID,
        checkInData
      }
      this.daysToBook = this.hotelService.calDayToBook(this.checkInData.checkInData.checkIn, this.checkInData.checkInData.checkOut)
      return this.hotelService.getSingleHotel(this.hotelID)
    }),
      switchMap(val => {
        if (val) {
          console.log(JSON.parse(val))
          this.hotel = JSON.parse(val).hotel
          this.initHotelImages()
          this.initHotelServicesArrays()
          this.getStars()
          this.getRank()
          return this.hotelService.getSingleHotelRooms(this.checkInData)
        }
      })).subscribe(val2 => {
        if (val2) {
          const data = JSON.parse(val2)
          console.log(data)
          this.initHotelRooms(data.hotels.hotels[0])
        }
      });
  }

  ngOnInit(): void {
  }

  initHotelImages() {
    this.imagesArray = this.hotel.images.map(val => 'http://photos.hotelbeds.com/giata/bigger/' + val.path)
  }

  procesarReserva() {
    let timerInterval
    Swal.fire({
      title: 'Procesando reserva!',
      html: 'Espere un momento.',
      timer: 6000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()

        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })
  }

  initHotelRooms(hotel) {
    this.rooms = hotel.rooms

    this.pricePerDay = Number(hotel.minRate) / this.daysToBook

    this.loading = false
  }


  initHotelServicesArrays() {
    this.hotel.facilities.forEach(facility => {
      if (facility.facilityGroupCode == 40) this.nearPlaces.push(facility)
      if (facility.facilityGroupCode == 60) this.facilities.push(facility)
      if (facility.facilityGroupCode == 80) this.foods.push(facility)
      if (facility.facilityGroupCode == 70) this.otherServices.push(facility)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  getRank(){

    const ranking  = Math.floor(this.hotel.ranking / 10) 
    this.rank = ranking == 0 ? 1 : ranking
  }

  getStars() {
    const number = Number(this.hotel.category.description.content[0])

    if (typeof (number) == 'number' && !isNaN(number)) {

      this.starsNumber = Array(number).fill(1).map(val => val)

    }
  }
}
