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
  @Input() regimenFilters:Array<string>;

  public offer:any;
  public pricePerDay:number;
  public princeWhithOffer:number;
  public regimenFilterModel;

  constructor() {
    this.regimenFilterModel = [
      {
        value: 'RO',
        text: 'Solo alojamiento'
      },
      {
        value: 'SC',
        text: 'Alojamiento con cocina'
      },
      {
        value: 'BB',
        text: 'Desayuno'
      },
      {
        value: 'HB',
        text: 'Media pension'
      },
      {
        value: 'FB',
        text: 'Pension completa'
      },
      {
        value: 'AI',
        text: 'Todo incluido'
      },
      {
        value: 'CB',
        text: 'Desayuno continental'
      },
    ]
   }

  ngOnInit(): void {
    this.initValues()
    this.regimenFilterModel.forEach(val=>{
      if(val.value == this.rate.boardCode){
        this.rate.boardName = val.text
      }
    })
  }
  
  initValues(){
    this.offer = this.rate.offers ?   this.rate.offers[0] : null
    if(this.offer){
      this.princeWhithOffer = Number(this.offer.amount) != 0 ? Number(this.rate.net) - Math.abs( Number(this.offer.amount)) : 0

    }
    this.pricePerDay = Number(this.rate.net) / this.daysToBook

  }

  a(){
    document.location.href = 'https://www.google.co.ve/'
  }

}
