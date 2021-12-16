import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMetroComponent } from './map-metro.component';

describe('MapMetroComponent', () => {
  let component: MapMetroComponent;
  let fixture: ComponentFixture<MapMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMetroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
