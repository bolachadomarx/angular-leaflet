import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map-metro',
  templateUrl: './map-metro.component.html',
  styleUrls: ['./map-metro.component.css'],
})
export class MapMetroComponent implements AfterViewInit {
  map: any;
  environment: any;

  constructor(private httpClient: HttpClient) {}
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    L.Icon.Default.imagePath = 'assets/leaflet/';
    this.httpClient
      .get('http://localhost:3000/geojson?name=metro')
      .subscribe((geojson: any) => {
        console.log(geojson);

        this.map = L.map('map', {
          center: [40.796091667748556, -73.96145400006371],
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
              const popup = L.popup().setContent(
                JSON.stringify(feature.properties)
              );
              layer.bindPopup(popup);
            }
          },
        }).addTo(this.map);
      });
  }
}
