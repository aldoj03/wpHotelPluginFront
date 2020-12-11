import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels-order',
  templateUrl: './hotels-order.component.html',
  styleUrls: ['./hotels-order.component.css']
})
export class HotelsOrderComponent implements OnInit {

  public orderItems : Array<String> = [];
  public filterActive: number = 0;

  constructor() { 
    this.orderItems = [
      'Recomendados',
      'Precio',
      'Valoracón',
      'Distancia'
    ]
  }

  ngOnInit(): void {
  }

  setOrder(item){
    this.filterActive = item
  }
}
