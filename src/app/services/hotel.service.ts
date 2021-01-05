import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url: string = environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { }

  getHotelDetails(id: number) {
    const headers = new Headers({
     
    })
    const endPoint = `${ this.url }/${ id }/details`;

    return this.httpClient.get(endPoint);
  }

  calcPricePerDay(){

  }

  public calDayToBook(checkIn, checkOut){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(checkIn).getTime();
    const secondDate = new Date(checkOut).getTime();

    const daysToBook = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return daysToBook;
  }

  
}
