import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  public key
  public mapbox = (mapboxgl as typeof mapboxgl);
  public map: mapboxgl.Map;
  public style = `mapbox://styles/mapbox/streets-v11`;
  public lat;
  public lng;
  public zoom = 15;
  public marker: mapboxgl.Marker;
  public popup: mapboxgl.Popup;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken
  }


  buildMap(center) {
    this.lat = center.lat
    this.lng = center.lng
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    // this.map.addControl(new mapboxgl.NavigationControl());
  }

  addMarker(marker) {


    marker.addTo(this.map)
    // this.marker.setPopup(this.popup) 
    // this.marker.getElement().addEventListener('mouseenter',this.togglePopup)
    // this.marker.getElement().addEventListener('mouseleave',this.togglePopup)
  }

  togglePopup() {
    this.marker.togglePopup()

  }

  buildMarker(cords, text) {

    const el = document.createElement('div');
    el.innerHTML = Number(text).toFixed(2)
    el.classList.add('custom_marker');
    const marker = new mapboxgl.Marker(el)
    marker.setLngLat({ lat: cords.lat, lng: cords.lng })

    return marker
  }

  buildPopUp(text) {
    const popUp = new mapboxgl.Popup({ offset: 25 })
    popUp.setHTML('<h3>' + text + '</h3><p></p>')
  }


  addPopUp(marker, popUp) {
    marker.setPopup(popUp)
  }


}
