import { Component, OnInit, Input } from '@angular/core';
import { Rate } from '../model-response';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @Input() rate:Rate;
  @Input() checkDays:any;

  public daysToBook:number;
  public pricePerDay:number;
  public offer:number;
  public princeWhithOffer:number;

  constructor() { }

  ngOnInit(): void {
    this.calcDaysToBook()
    this.offer = this.rate.offers ?   Number(this.rate.offers[0].amount) : 0
    this.princeWhithOffer = this.offer != 0 ? Number(this.rate.net) - Math.abs( Number(this.offer)) : 0
    console.log(this.princeWhithOffer);
    
  }

  calcDaysToBook() {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(this.checkDays.checkIn).getTime();
    const secondDate = new Date(this.checkDays.checkOut).getTime();

    this.daysToBook = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    this.pricePerDay = Number(this.rate.net) / this.daysToBook

  }

}
