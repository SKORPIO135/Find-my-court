import { Component, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  latitude: number;
  longitude: number;
  constructor(private geolocation: Geolocation) {}

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];
  user = null;

  ionViewWillEnter() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude
      this.longitude=resp.coords.longitude
      let latLng = new google.maps.LatLng(this.latitude, this.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
   
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
    
 
    
  }

  Find() {
    console.log("I FOUND SOMETHING")
  }






}
