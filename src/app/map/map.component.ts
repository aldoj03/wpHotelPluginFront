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
  public popUps = []
  public markersMap = []
  public popUpMap = []
  constructor(
    private mapService: MapboxService
  ) { }

  ngOnInit(): void {
    console.log(this.center);

    this.mapService.buildMap(this.center)
    this.setMarkers()
  }

  closeMap() {
    this.setShowMap.emit(true)
  }

  setMarkers() {

     this.markers.forEach(marker => {
      const cords = {
        lat: marker.cords.lat,
        lng: marker.cords.lng
      }
      
     this.markersMap.push(this.mapService.buildMarker(cords, marker.text)) 
     this.popUpMap.push(this.mapService.buildPopUp( marker.text))
    })
    

    this.markersMap.forEach((marker,i) => {
       this.mapService.addMarker(marker)
       this.mapService.addPopUp(marker,this.popUpMap[i])
    })
  }


}
