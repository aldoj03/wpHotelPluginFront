import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsDashboardComponent } from './hotels-dashboard.component';

describe('HotelsDashboardComponent', () => {
  let component: HotelsDashboardComponent;
  let fixture: ComponentFixture<HotelsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
