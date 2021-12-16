import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  map: any;
  constructor(private httpClient: HttpClient) {}

  private initMap(): void {
    L.Icon.Default.imagePath = 'assets/leaflet/';
    this.httpClient
      .get('assets/Focos_2020-12-18_2021-12-15.geojson')
      .subscribe((geojson: any) => {
        console.log(geojson);
        
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

        var icons = L.icon({
          iconUrl: '/assets/leaflet/fire.png',
          iconSize: [15, 15],
        });

        const geoJsonLayer = L.geoJSON(geojson, {
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

  ngAfterViewInit(): void {
    this.initMap();
  }
}
