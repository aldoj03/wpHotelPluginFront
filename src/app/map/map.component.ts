import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Marker, Popup } from 'mapbox-gl';
import { MapboxService } from '../services/mapbox.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  @Output() toggleMap = new EventEmitter()
  @Input() center
  @Input() markers = []
  @Input() smallMap = false
  @Input() closeBtn = true
  @Input() hasPopup = true
  public popUps = []
  public markersMap: Array<Marker> = []
  public popUpMap: Array<Popup> = []
  constructor(
    private mapService: MapboxService
  ) { }

  ngOnInit(): void {
    console.log(this.center);
    console.log(this.markers);

    this.mapService.buildMap(this.center)
    this.setMarkers()
  }

  closeMap() {
    this.toggleMap.emit(true)
  }

  setMarkers() {

    this.markers.forEach(marker => {
      const cords = {
        lat: marker.lat,
        lng: marker.lng
      }

      this.markersMap.push(this.mapService.buildMarker(cords, marker.text))
      if(this.hasPopup){

        this.popUpMap.push(this.mapService.buildPopUp(marker.text))
      }
    })


    this.markersMap.forEach((marker, i) => {
      this.mapService.addMarker(marker)
      if(this.hasPopup){
      
        this.mapService.addPopUp(marker, this.popUpMap[i])
        this.onMarkerHover(marker)
      }
    })
  }

  onMarkerHover(marker: Marker) {
    marker.getElement().addEventListener('mouseover', () => {
      marker.togglePopup()
    })
    marker.getElement().addEventListener('mouseleave', () => {
      marker.togglePopup()

    })
  }

  togglePopup(marker: Marker) {
    marker.togglePopup()

  }
  ngOnDestroy() {

  }


}
