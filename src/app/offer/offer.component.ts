import { Component, OnInit, Input } from '@angular/core';
import { Rate } from '../model-response';
import  Swal  from 'sweetalert2/dist/sweetalert2.js'

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

}
