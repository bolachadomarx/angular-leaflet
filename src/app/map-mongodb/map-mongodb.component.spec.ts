import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMongodbComponent } from './map-mongodb.component';

describe('MapMongodbComponent', () => {
  let component: MapMongodbComponent;
  let fixture: ComponentFixture<MapMongodbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMongodbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMongodbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
