import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../model-response';

@Component({
  selector: 'app-hotels-order',
  templateUrl: './hotels-order.component.html',
  styleUrls: ['./hotels-order.component.css']
})
export class HotelsOrderComponent implements OnInit {

  @Input() total
  @Input() hotels:Array<Hotel>;
  @Output() toggleMap = new EventEmitter();

  public urlMaps:string
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
    if(item == 1){
      this.hotels = this.hotels.sort(function(a, b) {
        return Number(a.minRate) - Number(b.minRate);
      });

      
    }

    if(item == 2){
      this.hotels = this.hotels.sort(function(a, b) {
        return Number(b.ranking) - Number(a.ranking);
      });
    
  }
}
    showMap(){
      this.toggleMap.emit(false)
    }
}
