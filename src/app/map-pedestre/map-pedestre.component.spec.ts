import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPedestreComponent } from './map-pedestre.component';

describe('MapPedestreComponent', () => {
  let component: MapPedestreComponent;
  let fixture: ComponentFixture<MapPedestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPedestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPedestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
