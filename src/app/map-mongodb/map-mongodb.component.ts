import { environment } from './../../environments/environment';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import 'leaflet.markercluster';
@Component({
  selector: 'app-map-mongodb',
  templateUrl: './map-mongodb.component.html',
  styleUrls: ['./map-mongodb.component.css'],
})
export class MapMongodbComponent implements AfterViewInit {
  map: any;
  environment: any;

  constructor(private httpClient: HttpClient) {}
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    L.Icon.Default.imagePath = 'assets/leaflet/';
    this.httpClient
      .get('http://localhost:3000/geojson?name=geoteste')
      .subscribe((geojson: any) => {
        this.map = L.map('map', {
          center: [-20, -64],
          zoom: 4,
        });

        const tiles = L.tileLayer(
          // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
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

        const geoJsonLayer = L.geoJSON(geojson.geojson, {
          pointToLayer: function (feature, latlng) {
            console.log(feature);

            return L.marker(latlng, { icon: icons }).bindPopup(
              `${feature.properties.envolvidos} está envolvido nesse incendio`
            );
          },
        })

        const markers = L.markerClusterGroup({});

        markers.addLayer(geoJsonLayer)

        this.map.addLayer(markers)
      });
  }
}
