import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotel } from '../model-response';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url: string = environment.apiUrlLocal
  public pagination:number = 1; 

  constructor(
    private httpClient: HttpClient
  ) { }

 
 public set setPagination(v : number) {
   this.pagination = v;
 }
 

 
 public get getPagination() : number {
   return  this.pagination
 }
 

 getHotels(id:string, page:number){
  const endPoint = `${this.url}hoteles?id=${id}&page=${page}`; 
  console.log(endPoint);
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  return this.httpClient.get<any>(endPoint,{headers});

 }

 getHotelsFiltered(params){
  const endPoint = this.url + 'hoteles/filtered'
  console.log(endPoint);
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
let options = { headers: headers };
  return this.httpClient.post<Array<any>>(endPoint,params,options);

 }

  public calDayToBook(checkIn, checkOut){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(checkIn).getTime();
    const secondDate = new Date(checkOut).getTime();

    const daysToBook = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return daysToBook;
  }

  
}
