import { MapMetroComponent } from './map-metro/map-metro.component';
import { MapPedestreComponent } from './map-pedestre/map-pedestre.component';
import { MapComponent } from './map/map.component';
import { MapMongodbComponent } from './map-mongodb/map-mongodb.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mongo',
    component: MapMongodbComponent
  },
  {
    path: 'local',
    component: MapComponent
  },
  {
    path: 'vizinhanca',
    component: MapPedestreComponent
  },
  {
    path: 'metro',
    component: MapMetroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
