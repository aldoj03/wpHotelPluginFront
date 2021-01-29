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
  public lat ;
  public lng ;
  public zoom = 15;

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

    addMarker(cords){
      
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';



      const maker = new mapboxgl.Marker(el).setLngLat({lat:cords.lat, lng: cords.lng})
      maker.addTo(this.map)
    }
}
