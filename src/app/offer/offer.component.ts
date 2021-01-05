import { Component, OnInit, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Rate } from '../model-response';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @Input() rate:Rate;
  @Input() daysToBook:number;

  public offer:any;
  public pricePerDay:number;
  public princeWhithOffer:number;

  constructor() { }

  ngOnInit(): void {
    this.initValues()
  }
  
  initValues(){
    this.offer = this.rate.offers ?   this.rate.offers[0] : null
    if(this.offer){
      this.princeWhithOffer = Number(this.offer.amount) != 0 ? Number(this.rate.net) - Math.abs( Number(this.offer.amount)) : 0

    }
    this.pricePerDay = Number(this.rate.net) / this.daysToBook

  }

  

}
