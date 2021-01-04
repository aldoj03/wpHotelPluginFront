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
}
