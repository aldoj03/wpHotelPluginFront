import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MapboxService } from '../services/mapbox.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() setShowMap = new EventEmitter
  @Input() center 
  @Input() markers = []

  constructor(
    private mapService: MapboxService
  ) { }

  ngOnInit(): void {
    console.log(this.center);
    
    this.mapService.buildMap(this.center)
    this.newMarker()
  }

  closeMap(){
    this.setShowMap.emit(true)
  }

  newMarker(){
   this.markers.forEach(cords=>{
    this.mapService.addMarker({lat:cords.lat, lng:cords.lng})
   }) 
  }
}
