import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapMongodbComponent } from './map-mongodb/map-mongodb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapPedestreComponent } from './map-pedestre/map-pedestre.component';
import { MapMetroComponent } from './map-metro/map-metro.component';

@NgModule({
  declarations: [AppComponent, MapComponent, MapMongodbComponent, MapPedestreComponent, MapMetroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
