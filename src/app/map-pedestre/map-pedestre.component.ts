import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map-pedestre',
  templateUrl: './map-pedestre.component.html',
  styleUrls: ['./map-pedestre.component.css'],
})
export class MapPedestreComponent implements AfterViewInit {
  map: any;
  environment: any;

  constructor(private httpClient: HttpClient) {}
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    L.Icon.Default.imagePath = 'assets/leaflet/';
    this.httpClient
      .get('http://localhost:3000/geojson?name=vizinhanca')
      .subscribe((geojson: any) => {
        console.log(geojson);

        this.map = L.map('map', {
          center: [ 53.71582, -2.1],
          zoom: 11,
        });

        const tiles = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          // 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          {
            maxZoom: 18,
            minZoom: 3,
          }
        );

        tiles.addTo(this.map);

        var geojsonMarkerOptions = {
          radius: 8,
          fillColor: '#ff7800',
          color: '#000',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        };

        var icons = L.icon({
          iconUrl: '/assets/leaflet/fire.png',
          iconSize: [15, 15],
        });

        L.geoJSON(geojson.geojson, {
          onEachFeature: (feature, layer) => {
            
            if (feature.properties) {
              const popup = L.popup().setContent(JSON.stringify(feature.properties))
              layer.bindPopup(popup)
            }
          },
        }).addTo(this.map);
      });
  }
}
